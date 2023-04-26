import logo from './logo.svg';
import Dollar from "./icon-dollar.svg";
import Person from "./icon-person.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className="card">
        <div className="left">
          <div className='input-sample'>
            <span id="sub-title">BILL</span>
            <input type="number" placeholder='142.55' />
            <img src={Person} alt="" style={{width:"0.8em", position:"absolute" ,top:"28px",left:"8px"}}/>
            {/* <p></p> */}
          </div>
          <div className="tip">
            <span id="sub-title">Select Tip %</span>
            <ul>
              <li>5%</li>
              <li>10%</li>
              <li>15%</li>
            </ul>
            <ul>
              <li>50%</li>
              <li>25%</li>
              <li>Custom</li>
            </ul>
          </div>
          <div className="input-sample">
            <span id="sub-title">Number of Peoples</span>
            <input type="number" placeholder='5' />
            <img src={Dollar} alt="" style={{width:"0.8em", position:"absolute" ,top:"28px",left:"8px"}}/>
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
                  $1.27
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
                  $12.79
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
