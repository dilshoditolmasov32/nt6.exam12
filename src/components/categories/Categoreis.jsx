import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./Categoreis.css";
import xotdog from "../../assets/images/xotdog.svg";
import asal from "../../assets/images/asal.svg";
import choy from "../../assets/images/choy.svg";
import karam from "../../assets/images/karam.svg";
import kivi from "../../assets/images/kivi.svg";
import meva from "../../assets/images/meva.svg";
import olma from "../../assets/images/olma.svg";
import qorauzum from "../../assets/images/qora-uzum.svg";
import qulupnay from "../../assets/images/qulupnay.svg";
import xurmo from "../../assets/images/xurmo.svg";

const Categoreis = () => {
  const boxsData = [
    {
      id: 1,
      image: xotdog,
      title: "Cake & Milk",
      text: "26 items",
    },
    {
      id: 2,
      image: kivi,
      title: "Oganic Kiwi",
      text: "28 items",
    },
    {
      id: 3,
      image: xurmo,
      title: "Peach",
      text: "14 items",
    },
    {
      id: 4,
      image: olma,
      title: "Red Apple",
      text: "54 items",
    },
    {
      id: 5,
      image: asal,
      title: "Snack",
      text: "56 items",
    },
    {
      id: 6,
      image: karam,
      title: "Vegetables",
      text: "76 items",
    },
    {
      id: 7,
      image: qulupnay,
      title: "Strawberry",
      text: "36 items",
    },
    {
      id: 8,
      image: qorauzum,
      title: "Black plum",
      text: "123 items",
    },
    {
      id: 9,
      image: meva,
      title: "Custard apple",
      text: "34 items",
    },

    {
      id: 10,
      image: choy,
      title: "Coffe & Tea",
      text: "89 items",
    },
  ];

  const boxData = boxsData?.map((value) => (
    <div className="box" key={value.id}>
      <div className="box_img">
        <img src={value.image} alt="" />
      </div>
      <h5 className="title">{value.title}</h5>
      <div className="box_desc">{value.text}</div>
    </div>
  ));
  return (
    <div className="categories__page">
      <div className="categories__links">
        <h2>Featured Categories</h2>
        <ul>
          <li>
            <NavLink>Cake & Milk</NavLink>
          </li>
          <li>
            <NavLink>Coffes & Teas</NavLink>
          </li>
          <li>
            <NavLink>Pet Foods</NavLink>
          </li>
          <li>
            <NavLink>Vegetables</NavLink>
          </li>
        </ul>
      </div>

      <div className="boxs">{boxData}</div>
    </div>
  );
};

export default memo(Categoreis);
