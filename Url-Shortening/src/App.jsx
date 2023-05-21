import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/header'
import Footer from './Components/footer'
import bgWork from '../public/images/illustration-working.svg'
import SearchBar from './Components/SearchBar'
import Banner from './Components/Banner'
import Statistics from './Components/Statistics'

function App() {
  //window dimensions
  const [windowSize, setWindowSize] = useState(getWindowSize());
  //states
  const [link, setLink] = useState("https://www.w3schools.com/default");
  const [short, setShorts] = useState("")
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setLink(e.target.value)
    // alert()
  }
  const handleSubmit = () => {
    link.length === 0 ? setError(true) : setError(false); getData();
    // error === false ? setError(false) : setError(true)
  }
  const handleCopy = () => {
    console.log("short", short.full_short_link);
    navigator.clipboard.writeText(short.full_short_link);//to copy the text
  }

  const getData = async () => {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const data = await response.json();
      setShorts(data.result)
      // console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])
  // console.log(windowSize);
  return (
    <div className="App">
      <div className="body">
        <Header windowSize={windowSize} />
        <div className='hero'>
          <div className="left">
            <div className='left-div'>
              <h1 className='left-h1'>More than just shorter links</h1>
              <p className='hero-p'>Build your brand's recognition and get detailed insights on how your links are performing</p>
            </div>
            <button>Get Started</button>
          </div>
          <div className="right">
            <img src={bgWork} alt="" />
          </div>
        </div>
        <SearchBar link={link} handleChange={handleChange} error={error} handleSubmit={handleSubmit} />
      </div>
      <Statistics short={short} link={link} handleCopy={handleCopy} />
      <Banner />
      <Footer />
    </div>
  )
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default App;
