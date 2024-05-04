import React, { memo } from "react";
import "./Footer.css";
import logo from "../../assets/images/footerLogo.svg";
import addres from "../../assets/images/lokatsiya.svg";
import call from "../../assets/images/call.svg";
import telegram from "../../assets/images/telegram.svg";
import soat from "../../assets/images/soat.svg";
import ishVaqti from "../../assets/images/ishVaqti.svg";
import follow from "../../assets/images/follow.svg";
import appStorage from "../../assets/images/appStorage.svg";
import playMarket from "../../assets/images/playMarket.svg";
import payme from "../../assets/images/payme.svg";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      category: "Account",
      category_liks: [
        "Sign In",
        "View Cart",
        "My Wishlist",
        "Help Ticket",
        "Track My Order",
        "Shipping Details",
        "Compare products",
      ],
    },

    {
      id: 2,
      category: "Corporate",
      category_liks: [
        "Become a Vendor",
        "Affiliate Program",
        "Farm Business",
        "Farm Careers",
        "Our Suppliers",
        "Accessibility",
      ],
    },
    {
      id: 3,
      category: "Popular",
      category_liks: [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Eggs Substitutes",
        "Marmalades",
        "Sour Cream and Dips",
        "Tea & Kombucha",
      ],
    },
  ];

  let link = footerData?.map((ele, index) => (
    <div className="page__footer__link" key={ele.id}>
      <h4>{ele.category}</h4>
      {ele.category_liks?.map((value, index) => (
        <div key={index}>
          <a href="#link">{value}</a>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-page">
          <div className="footer-page-group1">
            <img src={logo} alt="logo" id="footer__logo" />
            <p className="group-text">Awesome grocery store website template</p>
            <div className="addres">
              <img src={addres} alt="adress" id="addres" />
              Address: 5171 W Campbell Ave <br />
              undefined Kent, Utah 53127 United States
            </div>
            <div className="email">
              <img src={call} alt="call" id="call" />
              Call Us:(+91) - 540-025-124553
            </div>
            <div className="phone">
              <img src={telegram} alt="telegram" />
              Email:sale@Nest.com
            </div>
            <div className="phone">
              <img src={soat} alt="soat" />
              Hours:10:00 - 18:00, Mon - Sat
            </div>
          </div>

          <div className="page__footer">{link}</div>
          <div className="footer-page-group2">
            <h6>Install App</h6>
            <p className="paragraph_text">From App Store or Google Play</p>
            <img src={appStorage} alt="appStorage" />
            <img src={playMarket} alt="playMarket" />
            <h6 className="gateway">Secured Payment Gateways</h6>
            <img src={payme} alt="" />
          </div>
        </div>
        <div className="row__line"></div>
        <div className="footer_page_about">
          <h6>© 2022, Nest - HTML Ecommerce Template All rights reserved</h6>
          <div>
            <img id="ishVaqti" src={ishVaqti} alt="ishVaqti" />
          </div>
          <div>
            <img id="follow" src={follow} alt="follow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
