import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './App.css'
import Map from './Map';
import arrow from "../public/images/icon-arrow.svg"
import d from './tittles';
// const api = `https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&ipAddress=192.168.0.1`
function App() {
  const [ip, setIp] = useState("");
  // const [location, setlocation] = useState("brooklyn");
  // const [timezone, setTimezone] = useState("UTC-5:00");
  // const [isp, setIsp] = useState("StarLink");
  // const [country, setCountry] = useState("america");
  const [data, setData] = useState(null)
  const [lat, setLat] = useState(51.505)
  const [log, setLog] = useState(-0.09)
  const [type, setType] = useState("")
  const handleSubmit = (e) => {

    e.preventDefault();
    setIp(type)
    getInitialData()
    // preventDefault();

  }
  const getInitialData = async () => {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&ipAddress=${ip}`)
    const info = await res.json();
    setData(info);
    data.location === null ? 
    console.log(data, "null showing") :
      setLat(data.location.lat);
    setLog(data.location.lng);
    // setIp(info.ip);
    // setlocation(info.location.city)
    // setIsp(info.isp);
    // setTimezone(info.location.timezone)
    // setCountry(info.location.country)
    // setCoordinates()
    console.log("data", data);
  }
  // useEffect(() => {
  //   try {   
  //     getInitialData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [])
  return (
    <div className="App">
      <section className="head">
        <h1>IP Address Tracker</h1>
        <form className="searchbox" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='Search any ip address or Domain-name' onChange={(e) => setType(e.target.value)} />
          <button>
            <img src={arrow} alt="" />
          </button>
        </form>
        {data === null ?
          <></> :
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
        }
      </section>
      <div className="mapcontainer">
        {data===null?
        <></>:
        <Map  lat={lat} log={log}/>
        }
      </div>
    </div>
  )
}

export default App
