import { Link } from "react-router-dom";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";

function Footer() {
  return (
    <div>
      <div className="container-fluid footer__bg">
        <div className="">
          <h1>sunnyside</h1>
        </div>
        <div className="footer__navbar">
          <Link to="/about" className="footerNavlinks">
            About
          </Link>
          <Link to="/services" className="footerNavlinks">
            Services
          </Link>
          <Link to="/project" className="footerNavlinks">
            Projects
          </Link>
        </div>
        <div className="social">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="fb" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.pinterest.com">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
