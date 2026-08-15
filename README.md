# MMM-LeafletMap

`MMM-LeafletMap` is a lightweight, 100% free, and standalone mapping module for the MagicMirror² platform. 

It serves as a clean, reliable alternative to `MMM-GoogleMaps-Tracking`. By utilizing the open-source **Leaflet.js** engine and **OpenStreetMap** graphics, it completely bypasses the need for expensive Google Cloud API accounts, credit card registration, or unexpected billing fees.

---

## Features
* **100% Free:** No API tokens, subscription costs, or developer keys required.
* **Global Coverage:** Seamlessly displays streets, boundaries, highways, and coastlines for any city on Earth.
* **Automated Setup:** Fetches the map library dynamically from a high-speed CDN. No messy local files to move or configure.

---

## Installation

To install the module, open your terminal screen, navigate to your MagicMirror modules folder, and run the single clone command:

```bash
cd ~/MagicMirror/modules
git clone https://github.com
```

---

## Configuration

To display the map on your dashboard, link the module inside your main configuration file (`~/MagicMirror/config/config.js`). Add this block to your `modules: [...]` array:

```javascript
{
    module: "MMM-LeafletMap",
    position: "top_right", // Change to your preferred layout position
    config: {
        latitude: 29.1308,   // Target latitude (Defaults to Abu Halifa, Kuwait)
        longitude: 48.1278,  // Target longitude
        zoom: 14,            // Zoom factor (1 = Global View, 18 = Street Level)
        height: "350px",     // Total height of the visual map container
        width: "100%"        // Total width of the map layout wrapper
    }
},
```

---

## Configuration Options

| Key Option | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `latitude` | `Number` | `29.1308` | The exact latitude coordinate to center the map viewport. |
| `longitude` | `Number` | `48.1278` | The exact longitude coordinate to center the map viewport. |
| `zoom` | `Number` | `14` | The starting magnifying level. Higher numbers zoom in closer to local neighborhoods. |
| `height` | `String` | `"350px"` | The vertical sizing rule for the dashboard element container. |
| `width` | `String` | `"100%"` | The horizontal layout sizing boundary. |

---

## Dependencies
* [Leaflet.js](https://leafletjs.com) - Open-source interactive JavaScript map core.
* [OpenStreetMap](https://openstreetmap.org) - Community-driven geographical tile data provider.
