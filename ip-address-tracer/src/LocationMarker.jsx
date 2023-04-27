import { useEffect, useMemo } from "react";
import { Marker, useMap } from "react-leaflet";

const LocationMarker = ({ lat, log }) => {
    const position = useMemo(() => {
        return [lat, log]
    }, [lat, log])
    const map = useMap();

    useEffect(() => {
        map.flyTo(position, 13, {
            animate: true,
        })
    }, [map, position])
    return (
        <Marker position={position}>
        </Marker>
    )
}
export default LocationMarker;