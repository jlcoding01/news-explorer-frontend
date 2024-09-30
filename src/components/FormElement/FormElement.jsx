import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import "./FormElement.css";

function FormElement({ name, type, isOpen }) {
  const nameLowerCase = name.toLowerCase();

  const { values, setValues, handleValueChange } = useForm({});

  const handleReset = () => {
    setValues({});
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

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
