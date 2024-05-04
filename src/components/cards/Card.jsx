import React, { memo } from "react";
import "./Card.css";

import banner1 from "../../assets/images/banner-1.svg";
import banner2 from "../../assets/images/banner-2.svg";
import banner3 from "../../assets/images/banner-3.svg";

const Card = () => {
  const data = [
    {
      id: 1,
      title: "Everyday Fresh & Clean with Our Products",
      btnText: "Shop Now",
      bg: banner1,
    },
    {
      id: 2,
      title: "Make your Breakfast Healthy and Easy",
      btnText: "Shop Now",
      bg: banner2,
    },
    {
      id: 3,
      title: "The best Organic Products Online",
      btnText: "Shop Now",
      bg: banner3,
    },
  ];

  const ListData = data?.map((value, index) => (
    <div className="card" key={value.id} style={{ background: "#f4f6fa" }}>
      <h4 className="title">{value.title}</h4>
      <button className="card-btn">{value.btnText}</button>
    </div>
  ));
  return (
    <div className="container">
      <div className="cards">{ListData}</div>
    </div>
  );
};

export default memo(Card);
