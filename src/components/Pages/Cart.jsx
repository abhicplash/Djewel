import React from "react";
import Layout from "../Layout/Layout";
import pro from "../../utils/data/prod.json";

function Cart() {
  return (
    <Layout>
      {pro.map((list) => (
        // <h1>{list.name}</h1>
        <img src={list.image} alt="" />
      ))}
    </Layout>
  );
}

export default Cart;
