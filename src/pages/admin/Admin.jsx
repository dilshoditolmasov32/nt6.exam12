import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";
import home from "../../assets/images/home.svg";
import next from "../../assets/images/next-icon.svg";
import map from "../../assets/images/map.svg";
import women from "../../assets/images/women.svg";
import Wrapper from "../../components/shopSection/Wrapper";

const Admin = () => {
  const lists = [
    {
      id: 1,
      title: "Office",
      text: "205 North Michigan Avenue, Suite 810   Chicago, 60601, USA Phone: (123) 456-7890 Email: contact@Evara.com",
      btn: "View map",
    },
    {
      id: 2,
      title: "Studio",
      text: "205 North Michigan Avenue, Suite 810   Chicago, 60601, USA Phone: (123) 456-7890 Email: contact@Evara.com",
      btn: "View map",
    },
    {
      id: 3,
      title: "Shop",
      text: "205 North Michigan Avenue, Suite 810   Chicago, 60601, USA Phone: (123) 456-7890 Email: contact@Evara.com",
      btn: "View map",
    },
  ];

  const list = lists?.map((value) => (
    <li key={value.id} id="boxCard">
      <h4>{value.title}</h4>
      <p>{value.text}</p>
      <button className="btn_map">
        <img src={map} alt="map" />
        {value.btn}
      </button>
    </li>
  ));
  return (
    <div className="admin__page">
      <div className="container">
        <h1>
          <p>
            <img src={home} alt="home" id="home" />
            <NavLink to={"/"}>Home</NavLink>
          </p>
          <p>
            <img src={next} alt="next" />
            <NavLink to={"/admin"}>Admin</NavLink>
          </p>
        </h1>

        <div className="admin_panel_about">
          <div id="box">
            <h5 id="help">How can help you ?</h5>
            <h2>Admin panel</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="box-2">
            <h5>01. Visit Feedback</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h5>03. Billing Inquiries</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="box-3">
            <h5>02. Employer Services</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h5>04.General Inquiries</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="xarita"></div>

        <ul>{list}</ul>

        <form className="forma">
          <div>
            <h6>Contact form</h6>
            <h3 id="dropLine">Drop Us a Line</h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="forma_input_area">
              <div id="input_text">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="First Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div id="input_text">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  id="call2"
                  required
                />
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div>
              <textarea name="text" id="textarea"></textarea>
            </div>

            <button type="submit" id="btn_submit">
              Send message
            </button>
          </div>
          <div>
            <img src={women} alt="women" id="women_img" />
          </div>
        </form>
      </div>

      <Wrapper />
    </div>
  );
};

export default memo(Admin);
