Module.register("MMM-LeafletMap", {
    defaults: {
        latitude: 29.13, // Default to your Kuwait coordinates!
        longitude: 48.11,
        zoom: 13,
        height: "300px",
        width: "100%"
    },

    // Save a global reference to the map engine instance
    mapInstance: null,

    getStyles: function() {
        return ["leaflet.css"];
    },

    getScripts: function() {
        return ["leaflet.js"];
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.id = "leaflet-map-container";
        wrapper.style.height = this.config.height;
        wrapper.style.width = this.config.width;
        return wrapper;
    },

    notificationReceived: function(notification, payload, sender) {
        if (notification === "DOM_OBJECTS_CREATED") {
            // Tell Leaflet exactly where your local images folder is
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: this.file("images/marker-icon-2x.png"),
                iconUrl: this.file("images/marker-icon.png"),
                shadowUrl: this.file("images/marker-shadow.png"),
            });

            // Start the Leaflet engine and save it to our global variable
            this.mapInstance = L.map('leaflet-map-container').setView([this.config.latitude, this.config.longitude], this.config.zoom);

            // Pull free OpenStreetMap map tiles from the web securely over HTTPS
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap'
            }).addTo(this.mapInstance);

            // Place your pin drop on the map
            L.marker([this.config.latitude, this.config.longitude]).addTo(this.mapInstance);
        }

        // FIX FOR MMM-PAGES: Force Leaflet to recalculate when the page becomes visible
        if (notification === "PAGE_CHANGED" || notification === "MODULE_DOM_UPDATED") {
            var self = this;
            setTimeout(function() {
                if (self.mapInstance) {
                    self.mapInstance.invalidateSize();
                }
            }, 300); // Give the browser 300ms to animate the page change first
        }
    }
});
