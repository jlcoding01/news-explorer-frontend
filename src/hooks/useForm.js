import { useState, useCallback } from "react";

export function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleValueChange = (e) => {
    const { value, name, validationMessage } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
    console.log(errors);
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleValueChange, errors, isValid, resetForm };
}
