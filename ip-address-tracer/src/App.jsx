import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './App.css'
import Map from './Map';
import arrow from "../public/images/icon-arrow.svg"
import d from './tittles';

function App() {
  const [ip, setIp] = useState("8.8.8.8");
  navigator
  // const [location, setlocation] = useState("brooklyn");
  // const [timezone, setTimezone] = useState("UTC-5:00");
  // const [isp, setIsp] = useState("StarLink");
  // const [country, setCountry] = useState("america");
  const [data, setData] = useState(null)
  const [lat, setLat] = useState("51.505");
  const [log, setLog] = useState("-0.09")
  const [type, setType] = useState("")
  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&ipAddress=8.8.8.8")
        const info = await res.json();
        setData(info);
        // if (data === null) {
        //   console.log("null", data)
        // }
        // else {
        //  
        // }
        console.log("data", data);
      }
      getInitialData();
    } catch (error) {
      console.log(error);
    }
  }, [])
  const getEnteredData = async () => {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&ipAddress=${ip}`);
    const lastData = await res.json();
    setData(lastData)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIp(type)
    getEnteredData()
    console.log(data);
    // preventDefault();

  }
  return (
    <div className="App">
      <section className="head">
        <h1>IP Address Tracker</h1>
        <form className="searchbox" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='Search any ip address or Domain-name' name="ipaddress" value={type} onChange={(e) => setType(e.target.value)} />
          <button>
            <img src={arrow} alt="" />
          </button>
        </form>
        {data && (
          <>
            <div className="ip-container">
              <div className="container-item">
                <p>IP ADDRESS</p>
                <h3>{data.ip}</h3>
              </div>
              <div className="container-item">
                <p>LOCATION</p>
                <h3>{data.location.city}, {data.location.country}</h3>
              </div>
              <div className="container-item">
                <p>TIMEZONE</p>
                <h3>{data.location.timezone}</h3>
              </div>
              <div className="container-item">
                <p>ISP</p>
                <h3>{data.isp}</h3>
              </div>
            </div>
          </>
        )}
      </section>
      <div className="mapcontainer">
        {data &&
          <Map lat={data.location.lat} log={data.location.lng} />
        }
      </div>
    </div>
  )
}

export default App
