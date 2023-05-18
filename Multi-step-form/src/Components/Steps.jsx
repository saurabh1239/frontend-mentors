import { NavLink } from "react-router-dom"
import "../App.css"
import { StepsData } from "../Constants/StepsData"

const form_steps = [
    {
        id: 1,
        title: "Step 1",
        title_text: "YOUR INFO"
    },
    {
        id: 2,
        title: "Step 2",
        title_text: "SELECT PLAN"
    },
    {
        id: 3,
        title: "Step 3",
        title_text: "ADD-ONS"
    },
    {
        id: 4,
        title: "Step 4",
        title_text: "SUMMARY"
    }
]
// onClick={() => setstep(id)}
const Steps = ({ step, setstep }) => {
    return (
        <div className="form-steps">
            {StepsData.map((item, id) => (
                <div className="step" key={id} >
                    <div className={step === id ? "number-chosen" : "number"}>
                        <NavLink
                            to={item.linkTo}>
                            {item.id}
                        </NavLink>
                    </div>
                    <div className="step-info">
                        <p>{item.title}</p>
                        <h5>{item.title_text}</h5>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default Steps