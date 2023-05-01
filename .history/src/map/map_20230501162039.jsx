import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <div style={{
      height: '700px'
    }}>

    <MapContainer center={[34.7717, 72.4258]} zoom={13} style={{ height: "100%" }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
    </div>
  );
}

export default Map;
