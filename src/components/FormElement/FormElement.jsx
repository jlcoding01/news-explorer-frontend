import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import "./FormElement.css";

function FormElement({ name, type, isOpen, onFormValidity }) {
  const nameLowerCase = name.toLowerCase();

  const { values, setValues, handleValueChange } = useForm({});

  const handleReset = () => {
    setValues({});
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  // console.log(typeof onFormValidity);

  useEffect(() => {
    const isValid =
      values[nameLowerCase]?.trim() !== "" &&
      values[nameLowerCase] !== undefined;

    if (typeof onFormValidity === "function") {
      onFormValidity(isValid);
    }
  }, [isOpen, values, nameLowerCase, onFormValidity]);

  return (
    <>
      <div className="form__element">
        <label
          htmlFor={`${nameLowerCase}-${type}`}
          className="form__element_label"
        >
          {name}
        </label>
        <input
          type="text"
          className="form__element_input"
          placeholder={`Enter ${nameLowerCase}`}
          name={nameLowerCase}
          id={`${nameLowerCase}-${type}`}
          value={values[nameLowerCase] || ""}
          onChange={handleValueChange}
          required
        />
      </div>
    </>
  );
}

export default FormElement;
