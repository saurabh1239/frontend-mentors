import { Marker, useMap } from "react-leaflet";

const LocationMarker = ({ position }) => {
    const map = useMap();
    map.flyTo([position.lat, position.log], 13, { animate: true });
    return position === null ? null :
        <Marker position={position}>
        </Marker>
}
export default LocationMarker;