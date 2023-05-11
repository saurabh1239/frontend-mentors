import "./Thank.css"
import thanksicon from "../../public/assets/images/icon-thank-you.svg"
const Thank = () => {
    return (
        <div className="thank_screen">
            <div>
                <img src={thanksicon} alt="" />
            </div>
            <h3>Thank you!</h3>
            <p>
                Thanks for confirming your subscription!we hope you
                have fun using our platform.
                if you ever need support,
                please feel free to email us at
                support@loregaming.com
            </p>
        </div>
    )
}

export default Thank