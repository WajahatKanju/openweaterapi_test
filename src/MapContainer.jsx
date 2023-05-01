import Map from "./map/map";
import PropTypes from "prop-types";

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

MapContainer.propTypes = {
  markerPosition: PropTypes.array.isRequired,
  setMarkerPosition: PropTypes.func.isRequired,
};



export default MapContainer;