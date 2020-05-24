import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layouts/Layout";
import { Form, Field, Submit, Error } from "../components/ui/styled/Form";
import { TitleCenter } from "../components/ui/styled/General";

import firebase from "../firebase";

//validations
import useValidation from "../hooks/useValidation";
import accountValidate from "../ValidationRules/createAccount";

export default function Account() {
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange } = useValidation(
    INITIAL_STATE,
    accountValidate,
    createAccount
  );

  const { name, email, password } = values;
  const [error, setError] = useState(false);

  async function createAccount() {
    try {
      await firebase.register(name, email, password);
      Router.push("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <Layout>
        <>
          <TitleCenter>Create account</TitleCenter>
          <Form onSubmit={handleSubmit} noValidate>
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

            <Submit type="submit" value="Create acouunt" />
          </Form>
        </>
      </Layout>
    </div>
  );
}
