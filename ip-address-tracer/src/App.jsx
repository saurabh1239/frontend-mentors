import { useEffect, useState } from 'react'

import './App.css'
import Map from './Map';
import arrow from "../public/images/icon-arrow.svg"

function App() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState(null);
  const [type, setType] = useState("");
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/


  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&ipAddress=8.8.8.8")
        const info = await res.json();
        setData(info);
        // console.log("data", data);
      }
      getInitialData();
    } catch (error) {
      console.log(error);
    }
  }, [ip])
  const getEnteredData = async () => {
    console.log(ip,"ip");
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_cJVdJdP5hJUVBVoCOO4z9vx0jDyeK&${checkIpAddress.test(ip)
      ? `ipAddress=${ip}`
      : checkDomain.test(ip)
        ? `domain=${ip}`
        : ""
      }`);
    const lastData = await res.json();
    setData(lastData)
  }
  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    setIp(type)
    getEnteredData()
    console.log(data);

  }
  return (
    <div className="App">
      <section className="head">
        <h1>IP Address Tracker</h1>
        <form className="searchbox" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='Search any IP address or Domain-name' name="ipaddress" value={type} onChange={(e) => setType(e.target.value)} />
          <button>
            <img src={arrow} alt="" />
          </button>
        </form>
        {data && (
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
