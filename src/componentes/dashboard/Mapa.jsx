import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

function Mapa() {

  return (

    <div className="mapa-container">

      <MapContainer
        center={[6.2442, -75.5812]}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "20px"
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />



        {/* MARCADOR 1 */}

        <Marker position={[6.2442, -75.5812]}>

          <Popup>
            📍 Sky Bar
          </Popup>

        </Marker>



        {/* MARCADOR 2 */}

        <Marker position={[6.2518, -75.5636]}>

          <Popup>
            ☕ Café Urbano
          </Popup>

        </Marker>

      </MapContainer>

    </div>
  );
}

export default Mapa;