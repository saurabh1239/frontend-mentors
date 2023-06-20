
import LightIcon from '../../public/images/icon-sun.svg'
import DarkIcon from '../../public/images/icon-moon.svg'
const Header = ({ theme, setTheme }) => {
    return (
        <div className="navbar">
            <h1>TODO</h1>
            <button style={{ background: "transparent" }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <img src={theme === "dark" ? `${DarkIcon}` : `${LightIcon}`} alt="" />
            </button>
        </div>
    )
}

export default Header