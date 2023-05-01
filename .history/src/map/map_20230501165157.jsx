import { useState } from "react";
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ onMarkerPositionChange }) {
  const [markerPosition, setMarkerPosition] = useState([  34.796871641, 72.3460435]);

  const handleMarkerDragEnd = (e) => {
    const newMarkerPosition = [e.target._latlng.lat, e.target._latlng.lng];
    setMarkerPosition(newMarkerPosition);
    onMarkerPositionChange(newMarkerPosition);
  };

  return (
    <MapContainer center={markerPosition} zoom={13} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={markerPosition} draggable={true} eventHandlers={{ dragend: handleMarkerDragEnd }}>
        <Popup>
          Current coordinates: {markerPosition[0]}, {markerPosition[1]}
        </Popup>
      </Marker>
      <MapClickHandler onMarkerPositionChange={onMarkerPositionChange} />
    </MapContainer>
  );
}

function MapClickHandler({ onMarkerPositionChange }) {
  useMapEvents({
    click: (e) => {
      const newMarkerPosition = [e.latlng.lat, e.latlng.lng];
      onMarkerPositionChange(newMarkerPosition);
    },
  });

  return null;
}

MapClickHandler.propTypes = {
  onMarkerPositionChange: PropTypes.func.isRequired,
};

export default Map;
