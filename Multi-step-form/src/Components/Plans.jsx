import "../App.css"
import arcade from "../../public/assets/images/icon-arcade.svg"

const Plans = () => {
    return (
        <div className="plans">
            <div className="upper">
                <div className="title">
                    <h1>Select your plan</h1>
                    <p>you have the option of monthly or yearly billing.</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={arcade} alt="" className="icon" />
                        <div>
                            <span>Arcade</span>
                            <p>$9/mo</p>
                        </div>
                    </div>
                </div>
                <div className="toggle">
                    <label >Monthly</label>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <label >Yearly</label>
                </div>
            </div>
            <div className="buttons">
                <button></button>
            </div>
        </div>
    )
}

export default Plans