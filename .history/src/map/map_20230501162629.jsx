import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [markerPosition, setMarkerPosition] = useState([ 34.7717, 72.4258]);

  function handleMapClick(e) {
    setMarkerPosition([e.latlng.lat, e.latlng.lng]);
  }

  return (
    <MapContainer center={markerPosition} zoom={13} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={markerPosition} draggable={true} eventHandlers={{
          dragend: (e) => {
            setMarkerPosition([e.target._latlng.lat, e.target._latlng.lng])
          },
        }}>
        <Popup>
          Current coordinates: {markerPosition[0]}, {markerPosition[1]}
        </Popup>
      </Marker>
      <MapClickHandler setMarkerPosition={setMarkerPosition} />
    </MapContainer>
  );
}

function MapClickHandler({ setMarkerPosition }) {
  const map = useMapEvents({
    click: (e) => {
      setMarkerPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return null;
}

export default Map;
