Module.register("MMM-LeafletMap", {
    defaults: {
        latitude: 51.505,
        longitude: -0.09,
        zoom: 13,
        height: "300px",
        width: "100%"
    },

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
            // FIX: Tell Leaflet exactly where your local images folder is
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: this.file("images/marker-icon-2x.png"),
                iconUrl: this.file("images/marker-icon.png"),
                shadowUrl: this.file("images/marker-shadow.png"),
            });

            // Start the Leaflet engine using our local files
            var map = L.map('leaflet-map-container').setView([this.config.latitude, this.config.longitude], this.config.zoom);

            // Pull free OpenStreetMap map tiles from the web
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap'
            }).addTo(map);

            // Place a pin drop on the map
            L.marker([this.config.latitude, this.config.longitude]).addTo(map);
        }
    }
});

