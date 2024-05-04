import React, { useState, useEffect, memo } from "react";
import { NavLink } from "react-router-dom";

import "./Product.css";
import savatcha from "../../assets/images/card.svg";
import Loading from "../loading/Loading";
import Category from "../category/Category";

const Product = ({ data, loading }) => {
  let cards = data?.map((element) => (
    <div className="product" key={element.id}>
      <div className="product-img">
        <NavLink to={`/product/${element.id}`}>
          <img
            src={element.images[0]}
            alt={element.title}
            className="card-image"
          />
        </NavLink>
      </div>
      <h4 className="product-name">{element.title}</h4>
      <div className="product-desc">{element.description}</div>
      <div className="product-rating">{element.rating}</div>
      <div className="product-category">{element.category}</div>
      <div className="product-more-div">
        <div className="product-price">${element.price}</div>
        <div className="product-count">{element.stock} ta</div>
        <button className="product-btn">
          <img src={savatcha} alt="savatcha" className="btn-savatcha" /> Add
        </button>
      </div>
      <div className="product-item">New</div>
    </div>
  ));

  return (
    <div className="products-section">
      <Category />
      {loading ? <Loading count={30} /> : <></>}
      <div className="products"> {cards} </div>
    </div>
  );
};

export default memo(Product);
