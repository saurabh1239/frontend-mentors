import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './App.css'
import Map from './Map';
import arrow from "../public/images/icon-arrow.svg"
import d from './tittles';
function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <section className="head">
        <h1>IP Address Tracker
        </h1>
        <form className="searchbox">
          <input type="text" placeholder='Search any ip address or Domain-name' />
          <button>
            <img src={arrow} alt="" />
          </button>
        </form>
        <div className="ip-container">
          {
            d.map((item, id) =>
              <>
                <div key={item. id} className='container-item'>
                  <p>{item.Tittle}</p>
                  <h3>{item.Description}</h3>
                </div>
                <hr />
              </>
            )
          }
        </div>
      </section>
      <div className="mapcontainer">
        <Map />
      </div>
    </div>
  )
}

export default App
