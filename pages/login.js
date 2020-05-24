import React, { useState } from "react";
import Router from "next/router";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { Form, Field, Submit, Error } from "../components/ui/styled/Form";
import { TitleCenter } from "../components/ui/styled/General";

import firebase from "../firebase";

//validations
import useValidation from "../hooks/useValidation";
import loginValidate from "../ValidationRules/login";

const Heading = styled.h1`
  color: red;
`;
export default function Login() {
  const INITIAL_STATE = {
    email: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange } = useValidation(
    INITIAL_STATE,
    loginValidate,
    login
  );

  const { email, password } = values;
  const [error, setError] = useState(false);

  async function login() {
    try {
      const user = await firebase.login(email, password);
      console.log(user);

      Router.push("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <Layout>
        <>
          <TitleCenter>Login</TitleCenter>
          <Form onSubmit={handleSubmit} noValidate>
            <Field>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Field>

            {errors.email && <Error>{errors.email}</Error>}

            <Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Field>

            {errors.password && <Error>{errors.password}</Error>}

            {error && <Error>{error}</Error>}

            <Submit type="submit" value="Login" />
          </Form>
        </>
      </Layout>
    </div>
  );
}
