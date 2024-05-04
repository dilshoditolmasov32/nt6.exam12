import React, { memo, useState, useEffect } from "react";
import "./SingleRoute.css";
import { NavLink } from "react-router-dom";
import savatcha from "../../assets/images/savatcha.svg";
import like from "../../assets/images/like.svg";
import refresh from "../../assets/images/refresh.svg";
import product from "../../assets/images/product_img.svg";
import mahsulotlar from "../../assets/images/mahsulotlar.svg";
import text from "../../assets/images/text.svg";
import category from "../../assets/images/category.svg";
import price from "../../assets/images/price.svg";
import products from "../../assets/images/products.svg";
import Wrapper from "../../components/shopSection/Wrapper";
import { useParams } from "react-router-dom";
import axios from "../../components/api/";

const SingleRoute = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios
      .get(`products/${id}`)
      .then((res) => setProductData(res.data.products))
      .catch((res) => console.log(res));
  }, []);
  return (
    <div className="singlePage">
      <div className="container productAbout">
        <div className="more_about_the_product">
          <div id="product__about">
            <div className="product_img">
              {/* <img src={product} alt="" /> */}
              <img src={productData?.image} alt="" />
            </div>
            <div className="product_desc">
              <button className="smallBtn">Sale Off</button>
              <h2 className="productName">
                Seeds of Change Organic Quinoa, Brown
              </h2>
              <div className="comment">(32 reviews)</div>
              <h4>
                <span>$38</span>
                <div className="chegirma">
                  26% Off
                  <p>$52</p>
                </div>
              </h4>
              <p className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi, odio minus dolore impedit fuga eum eligendi.
              </p>
              <div className="product_div">
                <div className="product_size">Size / Weight:</div>
                <div className="singlePage_links">
                  <NavLink>50g</NavLink>
                  <NavLink className="activ">60g</NavLink>
                  <NavLink>80g</NavLink>
                  <NavLink>100g</NavLink>
                  <NavLink>150g</NavLink>
                </div>
              </div>

              <div className="product_about_more">
                <input type="number" name="number" id="number" value={1} />
                <button className="card_add_btn">
                  <img src={savatcha} alt="savtcha" className="savatcha" />
                  Add to cart
                </button>
                <button className="like_btn">
                  <img src={like} alt="like" />
                </button>
                <button className="refresh_btn">
                  <img src={refresh} alt="refresh" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h5>
              <img src={mahsulotlar} alt="products" id="mahsulotlar" />
            </h5>
          </div>
          <div className="card_text">
            <img src={text} alt="desc" id="product_desc_text" />
          </div>
        </div>
        <div>
          <h4>
            <img src={category} alt="category" id="category" />
          </h4>
          <h4>
            <img src={price} alt="price" id="price" />
          </h4>
          <h4>
            <img src={products} alt="products" id="product" />
          </h4>
        </div>
      </div>

      <Wrapper />
    </div>
  );
};

export default memo(SingleRoute);
