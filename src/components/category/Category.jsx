import "../products/Product.css";

const Category = () => {
  const productFilter = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];

  let filterData = productFilter?.map((value, ind) => (
    <div className="link" key={ind}>
      {value}
    </div>
  ));

  return (
    <div className="product__title__links">
      <h1 className="product-title">Popular Products</h1>
      <div className="products-filters">{filterData}</div>
    </div>
  );
};

export default Category;
