import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { FirebaseContext } from "../firebase";
import ItemProduct from "../components/layouts/products/ItemProduct";

const Heading = styled.h1`
  color: red;
`;
const Home = () => {
  const [products, setProducts] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getProducts = () => {
      firebase.db
        .collection("products")
        .orderBy("createdAt", "desc")
        .onSnapshot(handlerSnapshot);
    };

    getProducts();
  }, []);

  function handlerSnapshot(snapshot) {
    const listProducts = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setProducts(listProducts);
  }

  return (
    <div>
      <Layout>
        <div className="product-list">
          <div className="container">
            <ul className="bg-white">
              {products.map((product) => (
                <ItemProduct key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
