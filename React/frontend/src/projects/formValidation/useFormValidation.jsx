import { useState } from "react";

const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!values.email?.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    if (!values.password || values.password < 6) {
      newErrors.password = "Password must be atleast 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, errors, validate, handleChange };
};

export default useFormValidation;
