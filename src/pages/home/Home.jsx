import React, { memo, useState, useEffect } from "react";
// import axios from "axios";
import "./Home.css";
import Card from "../../components/cards/Card";
import Product from "../../components/products/Product";
import Categoreis from "../../components/categories/Categoreis";
import Wrapper from "../../components/shopSection/Wrapper";
import Swipper from "../../components/swiper/Swipper";
import axios from "../../components/api";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products`)
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home__page">
      <div className="container">
        <Swipper />
        <Categoreis />
        <Card />
        <Product loading={loading} data={data}/>
      </div>
      <Wrapper />
    </div>
  );
};

export default memo(Home);
