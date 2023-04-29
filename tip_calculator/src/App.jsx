import Dollar from "./icon-dollar.svg";
import Person from "./icon-person.svg";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [Totalbill, setTotalBill] = useState(0)
  const [Totalsplit, setTotalsplit] = useState(1)
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState("5%");
  const [people, setPeople] = useState(0);

  const TotalBill = () => {
    const tipamount = (bill * tip) / 100
    const final_amount =  tipamount+parseInt(bill);
    setTotalBill(final_amount)
    const split = final_amount/parseInt(people);
    setTotalsplit(split)
  }
  useEffect(() => {
    TotalBill()
  }, [bill, tip, people])
  return (
    <div className="App">
      <div className="heading">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className="card">
        <div className="left">
          <div className='input-sample'>
            <div className="error">
              <span id="sub-title">Bill</span>
              <p>Cannot be Empty</p>
            </div>
            <input type="text" placeholder='142.55' onChange={(e) => setBill(e.target.value)} required value={bill} />
            <img src={Person} alt="" style={{ width: "0.8em", position: "absolute", top: "28px", left: "8px" }} />
          </div>
          <div className="tip">
            <div className="handling error">
              <span id="sub-title">Select Tip %</span>
              <p>Tip is Required</p>
            </div>
            <ul>
              <li onClick={(e) => setTip(5)}>5%</li>
              <li onClick={(e) => setTip(10)}>10%</li>
              <li onClick={(e) => setTip(15)}>15%</li>
            </ul>
            <ul>
              <li onClick={(e) => setTip(50)}>50%</li>
              <li onClick={(e) => setTip(25)}>25%</li>
              <li onClick={(e) => setTip(80)}>Custom</li>
            </ul>
          </div>
          <div className="input-sample">
            <div className="handling error">
              <span id="sub-title">Number of Peoples</span>
              <p>Cannot be zero</p>
            </div>
            <input type="text" placeholder='5' required onChange={(e) => setPeople(e.target.value)} value={people} />
            <img src={Dollar} alt="" style={{ width: "0.8em", position: "absolute", top: "28px", left: "8px" }} />
          </div>
        </div>
        <div className="right">
          <div>
            <div className="tip_amount">
              <div className="list-left">
                <span>Tip Amount</span>
                <p>/ person</p>
              </div>
              <div className="list-right">
                <h3>
                  {Totalbill}
                </h3>
              </div>
            </div>
            <div className="tip_amount">
              <div className="list-left">
                <span>Total</span>
                <p>/ person</p>
              </div>
              <div className="list-right">
                <h3>
                {Totalsplit}
                </h3>
              </div>
            </div>
          </div>
          <button>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
