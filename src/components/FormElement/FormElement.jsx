import "./FormElement.css";

function FormElement({ name, type }) {
  const nameLowerCase = name.toLowerCase();
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
          required
        />
      </div>
    </>
  );
}

export default FormElement;
