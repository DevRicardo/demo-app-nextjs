import React, { useState, useEffect } from "react";

const useValidation = (initState, validated, fn) => {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const hasErrors = Object.keys(errors).length === 0;

      if (hasErrors) {
        fn();
      }

      setSubmitForm(false);
    }
  }, [errors]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validated(values);
    setErrors(validationErrors);
    setSubmitForm(true);
  };

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
  };
};

export default useValidation;
