import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [markerPosition, setMarkerPosition] = useState([ 34.7717, 72.4258]);

  function handleMapClick(e) {
    setMarkerPosition([e.latlng.lat, e.latlng.lng]);
  }

  function handleMarkerClick() {
    console.log(`Current coordinates: ${markerPosition[0]}, ${markerPosition[1]}`);
  }

  return (
    <MapContainer center={markerPosition} zoom={13} style={{ height: "400px" }} onClick={handleMapClick}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={markerPosition}>
        <Popup>
          Current coordinates: {markerPosition[0]}, {markerPosition[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
