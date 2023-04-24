import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Map = () => {
    function MapPlaceholder() {
        return (
            <p>
                Map of London.{' '}
                <noscript>You need to enable JavaScript to see this map.</noscript>
            </p>
        )
    }

    function MapWithPlaceholder() {
        return (
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}
                style={{ width: "100%", height: "100%", zIndex:"0"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }

    return (
        <MapWithPlaceholder />
    )
}

export default Map