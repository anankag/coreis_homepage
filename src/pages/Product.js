import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
// import "../../components/product.css"


function Product() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products?limit=10");
    setProducts(data.products);
  };
  useEffect(() => {
    getData();
  }, []);
const showResult = products.map((el) => {
return (
<Link to={`/product/${el.id}`} key={el.id} style={{margin: "100px 100px"}}> {el.title}
<div style={{marginTop: "50px"}}><img style={{width:"200px", marginLeft:"100px"}} alt="product-img" src={el.thumbnail}/>
</div></Link>)
})
  return (
    <>
      <Header />
    <div> 
      {showResult}
    </div>

      <Footer />
    </>
  );
}
export default Product;
