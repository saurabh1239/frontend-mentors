
import LightIcon from '../../public/images/icon-sun.svg'
import DarkIcon from '../../public/images/icon-moon.svg'
const Header = () => {
    return (
        <div className="navbar">
            <h1>TODO</h1>
            <button style={{ background: "transparent" }}>
                <img src={LightIcon} alt="" />
            </button>
        </div>
    )
}

export default Header