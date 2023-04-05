import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/card'
function App() {
  // const data = {
  //   cardname: null,
  //   cardnumber: null,
  //   mm: null,
  //   yy: null,
  //   Cvc: null,
  // }
  const [cardData, setCardData ] = useState({
    cardName: null,
    cardnumber: null,
    mm: null,
    yy: null,
    Cvc: null,
  });
  useEffect(()=>{

  },[cardData ])
  return (
    <div className="App">
      <div className="left" >
        <Card cardData={cardData} />
      </div>
      <div className="right">
        <Form cardData={cardData} setCardData={setCardData} />
      </div>
    </div>
  )
}

export default App
