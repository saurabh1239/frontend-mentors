import { useState } from 'react'
import PlanetFooter from './Components/PlanetFooter.jsx'
import Earth from "../public/assets/assets/planet-earth.svg"
import './App.css'
import Data from './Constant/Data.js';
import { Login } from '@mui/icons-material';

function App() {
  const [structureView, setStructureView] = useState("overview")
  const [planet, setplanet] = useState(0);
  console.log(Data);


  //function for header list items
  const handlePlanets = (id) => {
    console.log(id);
    setplanet(id)
  }

  ///function to control structure options
  const handleOverview = () => {
    setStructureView("overview")
  }
  const handleStructure = () => {
    setStructureView("structure")
  }
  const handleGeology = () => {
    setStructureView("geology")
  }
  const uncontroledAddres = `Data[planet].${setStructureView}`;
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
      {/* <hr /> */}
      {/* <div className="shootingstars"></div> */}
      <div className="planet">
        <div className="planetinfo">
          <img src={Data[planet].images.planet} alt="" />
          <div className="planetDescription">
            <h1>{Data[planet].name}</h1>
            <p>
              {Data[planet].`${structureView}`.content}
            </p>
            <span>Source:
              <a href={Data[planet].overview.source}>Wikipedia</a>
            </span>
            <ul className='structureView'>
              <li onClick={handleOverview}>
                <span>01</span>
                <span>
                  overview
                </span>
              </li>
              <li onClick={() => handleStructure}>
                <span>02</span>
                <span>
                  internal structure
                </span>
              </li>
              <li onClick={() => handleGeology}>
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
    </div>
  )
}

export default App
