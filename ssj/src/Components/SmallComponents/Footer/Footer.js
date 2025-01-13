// Footer Component

import "../../../assets/css/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <a
          href="https://www.facebook.com/groups/819820298102783"
          target="_blank"
          rel="noreferrer"
          aria-label="facebook link"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/FCShardlow"
          target="_blank"
          rel="noreferrer"
          aria-label="twitter link"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/shardlowstjamesfc/?hl=pa"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram link"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footerInfo">
        <p>SSJ &copy; 2025</p>
        {/* <p>
          Designed & Built by{" "}
          <a
            href="https://paulgarton.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--light-blue)" }}
          >
            P.Garton
          </a>
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
