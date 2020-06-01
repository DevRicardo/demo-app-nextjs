import React, { useState, useContext } from "react";
import Router, { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";
import Layout from "../components/layouts/Layout";
import { Form, Field, Submit, Error } from "../components/ui/styled/Form";
import { TitleCenter } from "../components/ui/styled/General";

import { FirebaseContext } from "../firebase";

//validations
import useValidation from "../hooks/useValidation";
import productValidate from "../ValidationRules/createProduct";

const INITIAL_STATE = {
  name: "",
  business: "",
  image: "",
  url: "",
  description: "",
};

const NewProduct = () => {
  const [error, setError] = useState(false);
  const [imageName, setImageName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const { values, errors, handleSubmit, handleChange } = useValidation(
    INITIAL_STATE,
    productValidate,
    createProduct
  );
  const { user, firebase } = useContext(FirebaseContext);
  const { name, business, image, url, description } = values;
  const router = useRouter();

  function createProduct() {
    if (!user) {
      return router.push("/login");
    }

    const product = {
      name,
      business,
      imageUrl,
      url,
      description,
      rating: 0,
      comments: [],
      createdAt: Date.now(),
      createdBy: {
        id: user.uid,
        name: user.displayName,
      },
    };

    firebase.db.collection("products").add(product);

    return router.push("/");
  }

  const handleUploadStart = () => {
    setProgress(0);
    setUploading(true);
  };
  const handleProgress = (progress) => setProgress({ progress });
  const handleUploadError = (error) => {
    setUploading(error);
    console.log(error);
  };
  const handleUploadSuccess = (filename) => {
    setProgress(100);
    setUploading(false);
    setImageName(filename);
    firebase.storage
      .ref("products")
      .child(filename)
      .getDownloadURL()
      .then((url) => setImageUrl(url));
  };

  return (
    <div>
      <Layout>
        <>
          <TitleCenter>New Product</TitleCenter>
          <Form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>General</legend>

              <Field>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Field>

              {errors.name && <Error>{errors.name}</Error>}

              <Field>
                <label htmlFor="business">Business</label>
                <input
                  type="text"
                  id="business"
                  placeholder="Your business"
                  name="business"
                  value={business}
                  onChange={handleChange}
                />
              </Field>
              {errors.business && <Error>{errors.business}</Error>}

              <Field>
                <label htmlFor="image">Image</label>
                <FileUploader
                  accept="image/*"
                  id="image"
                  name="image"
                  randomizeFilename
                  storageRef={firebase.storage.ref("products")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress={handleProgress}
                />
              </Field>

              <Field>
                <label htmlFor="url">url</label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={url}
                  onChange={handleChange}
                />
              </Field>
              {errors.url && <Error>{errors.url}</Error>}
            </fieldset>

            <fieldset>
              <legend>About your product</legend>

              <Field>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                ></textarea>
              </Field>
              {errors.description && <Error>{errors.description}</Error>}
            </fieldset>

            {error && <Error>{error}</Error>}

            <Submit type="submit" value="Create acouunt" />
          </Form>
        </>
      </Layout>
    </div>
  );
};

export default NewProduct;
