import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import LocationMarker from "./LocationMarker"
import "leaflet/dist/leaflet.css"

const Map = ({lat,log}) => {
    return (
        <MapContainer center={[lat, log]} zoom={13} scrollWheelZoom={true}
            style={{ width: "100%", height: "100%", zIndex: "0" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker lat={lat} log= {log}/>
        </MapContainer>
    )
}

export default Map