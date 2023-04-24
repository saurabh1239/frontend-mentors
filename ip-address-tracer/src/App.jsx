import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './App.css'
import Map from './Map';
import arrow from "../public/images/icon-arrow.svg"
import d from './tittles';
// const api = `https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&ipAddress=192.168.0.1`
function App() {
  const [ip, setIp] = useState("192.212.174.101");
  const [location, setlocation] = useState("brooklyn");
  const [timezone, setTimezone] = useState("UTC-5:00");
  const [isp, setIsp] = useState("StarLink");
  const [country, setCountry] = useState("america");
  const [data, setData] = useState("")
  const [type,setType] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    setIp(type)
    // preventDefault();

  }
  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&ipAddress=${ip}`)
        const info = await res.json();
        setData(info)
        setIp(info.ip);
        setlocation(info.location.city)
        setIsp(info.isp);
        setTimezone(info.location.timezone)
        setCountry(info.location.country)
        console.log("data", data);
      }
      getInitialData();
    } catch (error) {
      console.log(error);
    }
  }, [ip])
  return (
    <div className="App">
      <section className="head">
        <h1>IP Address Tracker</h1>
        <form className="searchbox" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='Search any ip address or Domain-name' onChange={(e)=>setType(e.target.value)} />
          <button>
            <img src={arrow} alt="" />
          </button>
        </form>
        <div className="ip-container">
          <div className="container-item">
            <p>IP ADDRESS</p>
            {
              ip && <h3>{ip}</h3>
            }
          </div>
          <div className="container-item">
            <p>LOCATION</p>
            {
              location &&
              <h3>{location}, {country}</h3>
            }
          </div>
          <div className="container-item">
            <p>TIMEZONE</p>
            {
              timezone &&
              <h3>{timezone}</h3>
            }
          </div>
          <div className="container-item">
            <p>ISP</p>
            {
              isp &&
              <h3>{isp}</h3>
            }

          </div>
          {/* {
            d.map((item, id) =>
              <>
                <div key={item.id} className='container-item'>
                  <p>{item.Tittle}</p>
                  {ip &&
                    <h3>{ip}</h3>}
                </div>
                <hr />
              </>
            )
          } */}
        </div>
      </section>
      <div className="mapcontainer">
        <Map />
      </div>
    </div>
  )
}

export default App
