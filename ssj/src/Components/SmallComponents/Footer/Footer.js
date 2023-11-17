// Footer Component

import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <a
          href="https://www.facebook.com/groups/819820298102783"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/FCShardlow"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="footerInfo">
        <p>SSJ &copy; 2023</p>
        <p>Designed & Built by P.Garton</p>
      </div>
    </footer>
  );
}

export default Footer;
