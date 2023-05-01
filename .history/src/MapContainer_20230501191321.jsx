import Map from "./map/map";

function MapContainer({ markerPosition, setMarkerPosition }) {
  return (
    <div className="map-container">
      <Map
        markerPosition={markerPosition}
        setMarkerPosition={setMarkerPosition}
      />
    </div>
  );
}

export default MapContainer;