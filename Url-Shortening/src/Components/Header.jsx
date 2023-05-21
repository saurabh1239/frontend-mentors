
import "../App.css"
import logo from "../../public/images/logo.svg"

const Header = ({ windowSize }) => {
    const Hamburger = () => {
        return (
            <svg viewBox="0 0 100 80" width="30" height="30" fill="grey">
                <rect width="100" height="10" ></rect>
                <rect y="30" width="100" height="10" ></rect>
                <rect y="60" width="100" height="10" ></rect>
            </svg>
        )
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            {
                windowSize.innerWidth < 900 ?
                    <Hamburger />
                    :
                    <div className="logo">
                        <div className="menu">
                            <ul className="menuItem">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="profile">
                                <li>Login</li>
                                <button className='profile-button'>
                                    Sign Up
                                </button>
                            </ul>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Header