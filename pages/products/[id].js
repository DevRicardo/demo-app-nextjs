import React, { useEffect, useContext, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layouts/404";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { enUS } from "date-fns/locale";
import { Field, Submit } from "../../components/ui/styled/Form";
import Button from "../../components/ui/styled/Button";

const Product = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [comments, setComments] = useState({});

  const router = useRouter();
  const { firebase, user } = useContext(FirebaseContext);

  const {
    query: { id },
  } = router;

  useEffect(() => {
    if (id) {
      const getProducts = async () => {
        const productQuery = await firebase.db.collection("products").doc(id);
        const infoProduct = await productQuery.get();
        if (infoProduct.exists) {
          setProduct(infoProduct.data());
        } else {
          setError(true);
        }
      };
      getProducts();
    }
  }, [id]);

  if (Object.keys(product).length === 0) return "Loading info product";

  const {
    name,
    business,
    imageUrl,
    url,
    description,
    rating,
    comments,
    createdAt,
    createdBy,
  } = product;

  const qualify = () => {
    if (!user) {
      return router.push("/");
    }

    const newTotal = rating + 1;

    firebase.db.collection("products").doc(id).update({
      rating: newTotal,
    });

    setProduct({ ...product, rating: newTotal });
  };

  return (
    <Layout>
      <>
        {error && <Error404 />}

        <div className="container">
          <ProductName>{name}</ProductName>
          <ProductContent>
            <div>
              <p>Publish {formatDistanceToNow(new Date(createdAt))}</p>
              <p>
                Publish by: {createdBy.name} of {business}
              </p>
              <img src={imageUrl} />
              <p>{description}</p>

              {user && (
                <>
                  <h2>Add comments</h2>
                  <form>
                    <Field>
                      <input type="text" name="message" />
                    </Field>
                    <Submit type="submit" value="Add" />
                  </form>
                </>
              )}

              <h2>Comments</h2>
              {comments.map((comment) => {
                <li>
                  <p>{comment.name}</p>
                  <p>Writer by: {comment.user.name}</p>
                </li>;
              })}
            </div>
            <aside>
              <Button target="_blanck" bgColor="true" href={url}>
                Visit Url
              </Button>
              <Rating>
                <p>{rating} Rating</p>
              </Rating>

              {user && <Button onClick={() => qualify()}>Qualify</Button>}
            </aside>
          </ProductContent>
        </div>
      </>
    </Layout>
  );
};

const ProductName = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const ProductContent = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;

const Rating = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

export default Product;
