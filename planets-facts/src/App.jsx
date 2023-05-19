import { useEffect, useState } from 'react'
import PlanetFooter from './Components/PlanetFooter.jsx'
import './App.css'
import Data from './Constant/Data.js';

function App() {
  const [structureView, setStructureView] = useState("overview");
  const [color, setColor] = useState("")
  const [images, setImages] = useState("");
  const [content, setContent] = useState("overview")
  const [source, setSource] = useState("overview")
  const [planet, setplanet] = useState(0);
  console.log(toString(planet));


  //function for header list items
  const handlePlanets = (id) => {
    console.log(id);
    setplanet(id)
    setColor(Data[planet].color)
  }
  const styles = {
    Active: {
      display: "flex",
      gap: "1em",
      padding: "1em",
      border: "1px solid white",
      width: "18em",
      fontSize: "1.2em",
      textTransform: "uppercase",
      cursor: "pointer",
      backgroundColor: `${color}`
    },
    li: {
      display: "flex",
      gap: "1em",
      padding: "1em",
      border: "1px solid white",
      width: "18em",
      fontSize: "1.2em",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  };
  ///function to control structure options
  const handleOverview = () => {
    console.log("overview");
    setStructureView("overview")
    setContent(Data[planet].overview.content)
    setSource(Data[planet].overview.source)
    setImages(Data[planet].images.planet)
  }
  const handleStructure = () => {
    console.log("strtucture");
    setStructureView("structure")
    setContent(Data[planet].structure.content)
    setSource(Data[planet].structure.source)
    setImages(Data[planet].images.internal)
  }
  const handleGeology = () => {
    console.log("geology");
    setStructureView("geology")
    setContent(Data[planet].geology.content)
    setSource(Data[planet].geology.source)
    setImages(Data[planet].images.planet)
  }
  // const uncontroledAddres = `Data[planet].${setStructureView}`;


  useEffect(() => {
    handleOverview()
    setColor(Data[planet].color)
  }, [planet])
  return (
    <div className="App">
      <header className='header'>
        <p>THE PLANETS</p>
        <ul className='planets'>
          {Data.map((item, id) =>
          (
            <li key={id} onClick={() => handlePlanets(id)}>{item.name}</li>
          )
          )}
        </ul>
      </header>
      <hr />
      {/* <div className="shootingstars"></div> */}
      <div className="planet">
        <div className="planetinfo">
          {
            structureView == "geology" ?
              <div className='planetImageGeology'>
                <img src={images} alt="" />
                <img src={Data[planet].images.geology} alt="" className='image-super' />
              </div>
              :
              <div className='planetImage'>
                <img src={images} alt="" />
              </div>
          }
          <div className="planetDescription">
            <h1 style={{ color: Data[planet].color }}>{Data[planet].name}</h1>
            <p>
              {content}
            </p>
            <span>Source:
              <a href={source}>Wikipedia</a>
            </span>
            <ul className='structureView'>
              <li onClick={handleOverview}
                // className={structureView === "overview" ? "LI Active" : "LI"}
                style={structureView === "overview" ?
                  styles.Active :
                  styles.li}
              >
                <span>01</span>
                <span>
                  overview
                </span>
              </li>
              <li onClick={handleStructure}
                style={structureView === "structure" ?
                  styles.Active :
                  styles.li}>
                <span>02</span>
                <span>
                  internal structure
                </span>
              </li>
              <li onClick={handleGeology}
                style={structureView === "geology" ?
                  styles.Active :
                  styles.li}>
                <span>03</span>
                <span>
                  surface geology
                </span>
              </li>
            </ul>
          </div>
        </div>
        <PlanetFooter Data={Data} planet={planet} setplanet={setplanet} />
      </div>
    </div >
  )
}

export default App
