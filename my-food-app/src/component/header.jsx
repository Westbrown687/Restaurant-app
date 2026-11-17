import "./header.css";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaClock,
  FaWifi,
  FaMagnifyingGlass,
  FaCartShopping,
} from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";

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
          <div className="location-container">
            <FaLocationDot className="location-icon" />
            15b Sule Abuka Street, Opebi, Ikeja. Lagos.
          </div>
          <div className="headset-container">
            <FaHeadset className="headset-icon" />
            support@foodbuzz.com
          </div>
          <div className="twitter-container">
            <FaXTwitter />
          </div>
          <div className="facebook-container">
            <FaFacebookF />
          </div>
          <div className="insta-container">
            <FaInstagram />
          </div>
          <div className="wifi-container">
            <FaWifi />
          </div>
        </div>

        <div className="header-buttom-section">
          <div className="logo-container">
            <img src="logo.png" className="logo-img" />
          </div>
          <div className="header-buttom-component">
            <div className="Home-section">Home</div>
            <div className="pages-section">
              Pages
              <ChevronDown className="chevron-down" />
            </div>
            <div className="menu-section">
              Food Menu
              <ChevronDown className="chevron-down" />
            </div>
            <div className="reservation-section">Reservation</div>
            <div className="blog-section">
              Blog
              <ChevronDown className="chevron-down" />
            </div>
            <div className="shop-section">
              Shop
              <ChevronDown className="chevron-down" />
            </div>
            <div className="contact-section">Contact</div>
            <div className="header-buttom-right">
              <div className="search-section">
                <FaMagnifyingGlass className="search-icon" />
              </div>
              <div className="cart-section">
                <FaCartShopping />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
