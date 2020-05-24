import App from "next/app";
import firebase, { FirebaseContext } from "../firebase";
import useAuth from "../hooks/useAuth";

const ProductApp = (props) => {
  const { Component, pageProps } = props;
  const user = useAuth();

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default ProductApp;
