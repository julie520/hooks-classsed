import { useState } from "react";

export const useForm = (callback, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({});
  };

  const onSubmit = event => {
    event.preventDefault();

    let error = validate(values);

    if (Object.keys(error).length === 0) {
      callback();
      setValues(initialState);
      setErrors({});
    } else {
      setErrors(error);
    }
  };

  return {
    onChange,
    onSubmit,
    errors,
    values
  };
};
