import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { FaXTwitter, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import "./header.css";

export function Header() {
  return (
    <>
      <div className="header-container">
        <div>
          <div>
            <FaClock className="clock-icon" />
            Sun-Fri: 9am-6pm Saturday Closed
          </div>
          <div>
            <FaLocationDot className="location-icon" />
            15b Sule Abuka Street, Opebi, Ikeja. Lagos
          </div>
          <div>
            <FaHeadset className="headset-icon" />
            support@foodbzz.com
          </div>
          <div>
            <FaXTwitter />
          </div>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaInstagram />
          </div>
          <FaPhone />
        </div>
      </div>
    </>
  );
}
