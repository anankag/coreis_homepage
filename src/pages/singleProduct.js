import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  const { id } = params;
  const [singleProduct, setSingleProduct] = useState([]);
  const getSingleProductInfo = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setSingleProduct(data);
  };

  useEffect(() => {
    getSingleProductInfo();
  }, []);

  console.log()
  return (
    <>
      <Header />
      <div>{singleProduct.description}</div>
      <Footer />
    </>
  );
}
export default SingleProduct;
