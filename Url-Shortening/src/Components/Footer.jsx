
import logo from "../../public/images/logo.svg"
import "../App.css"
import faceBook from "../../public/images/icon-facebook.svg"
import insta from "../../public/images/icon-instagram.svg"
import pin from "../../public/images/icon-pinterest.svg"
import tweet from "../../public/images/icon-twitter.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt="" />
      <div className="footer-menu">
        <span className='menu-footer'>
          Features
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </span>
        <span className='menu-footer'>
          Resources
          <ul>
            <li>Blog</li>
            <li>Devlopment</li>
            <li>Suppot</li>
          </ul>
        </span>
        <span className='menu-footer'>
          Company
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Carrers</li>
            <li>Contact</li>
          </ul>
        </span>
      </div>
      <div className="social">
        <img src={faceBook} alt="" />
        <img src={tweet} alt="" />
        <img src={pin} alt="" />
        <img src={insta} alt="" />
      </div>
    </div>
  )
}

export default Footer