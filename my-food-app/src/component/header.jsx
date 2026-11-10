import "./header.css";
import { FaXTwitter, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";

export function Header() {
  return (
    <>
      <div className="header-section">
        <div className="header-top">
          <div className="time-con-info">
            <div className="clock-container">
              <FaClock className="clock-icon" />
            </div>
            Sun-Fri: 9am-6pm Saturday Closed
          </div>
          <div>
            <FaLocationDot className="location-icon" />
            15b Sule Abuka Street, Opebi, Ikeja. Lagos.
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
          <div>
            <FaPhone />
          </div>
        </div>
      </div>
    </>
  );
}
