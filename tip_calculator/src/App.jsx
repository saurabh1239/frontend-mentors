import Dollar from "./icon-dollar.svg";
import Person from "./icon-person.svg";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [Totalbill, setTotalBill] = useState(0)
  const [Totalsplit, setTotalsplit] = useState(0)
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [custom, setCustom] = useState("");

  const TotalBill = () => {
    const tipamount = (bill * tip) / 100
    const final_amount = tipamount + parseInt(bill);
    setTotalBill(final_amount)
    const split = final_amount / parseInt(people);
    setTotalsplit(split)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setBill(0)
    setTotalsplit(0)
    setTotalBill(0)
    setCustom("")
    setTotalsplit(0)
    setTip(0)
    setPeople(0)
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
            {/* <div className="handling error">
              <span id="sub-title">Select Tip %</span>
              <p>Tip is Required</p>
            </div>
            <div className="tip-sections">
              <div className="tip-amount">
                <input type="radio" />
                <label htmlFor="" className="tip-btn">5%</label>
              </div>
              <div className="tip-amount">
                <input type="radio" />
                <label htmlFor="" className="tip-btn">10%</label>
              </div>
              <div className="tip-amount">
                <input type="radio" />
                <label htmlFor="" className="tip-btn">15%</label>
              </div>
              <div className="tip-amount">
                <input type="radio" />
                <label htmlFor="" className="tip-btn">25%</label>
              </div>
              <div className="tip-amount">
                <input type="radio" />
                <label htmlFor="" className="tip-btn">50%</label>
              </div>
              <input type="text" placeholder="CUSTOM" />
            </div> */}
            <ul>
              <li onClick={(e) => setTip(5)}>5%</li>
              <li onClick={(e) => setTip(10)}>10%</li>
              <li onClick={(e) => setTip(15)}>15%</li>
            </ul>
            <ul>
              <li onClick={(e) => setTip(50)}>50%</li>
              <li onClick={(e) => setTip(25)}>25%</li>
              <input type="text" placeholder="Custom" value={custom} onChange={(e) => setCustom(e.target.value)} className="input_tip" />
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
        <form className="right" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}

export default App; 
