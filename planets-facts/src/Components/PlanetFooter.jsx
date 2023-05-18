import "./PlanetFooter.css"

// const EartData = [
//     "ROTATION TIME",
//     "REVOLUTION TIME",
//     "RADIUS",
//     "AVERAGE TEMP"
// ]

const EartData = [
    {
        title: "ROTATION TIME",
        Desc: "rotation"
    },
    {
        title: "REVOLUTION TIME",
        Desc: "revolution"
    },
    {
        title: "RADIUS",
        Desc: "radius"
    },
    {
        title: "AVERAGE TEMP",
        Desc: "temperature"
    },
]

const PlanetFooter = ({ Data, planet, setPlanet }) => {


    return (
        <div className="planetFooter">
            {/* {EartData.map((item, id) => {
                const specs = item.Desc;
                console.log(specs);
                return(
            )}
            )} */}
            <div className="factChip" >
                <span>ROTATION TIME</span>
                <h4>{Data[planet].rotation}</h4>
            </div>
            <div className="factChip" >
                <span>REVOLUTION TIME</span>
                <h4>{Data[planet].revolution}</h4>
            </div>
            <div className="factChip" >
                <span>RADIUS</span>
                <h4>{Data[planet].radius}</h4>
            </div>
            <div className="factChip" >
                <span>AVERAGE TEMP</span>
                <h4>{Data[planet].temperature}</h4>
            </div>
        </div>
    )
}

export default PlanetFooter