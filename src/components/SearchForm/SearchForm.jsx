import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./SearchForm.css";

function SearchForm({ handleSearchBtn, setItemCount }) {
  const { values, setValues, handleValueChange } = useForm({});
  const [isValid, setIsValid] = useState(false);

  const handleSearch = () => {
    if (isValid) {
      handleSearchBtn(values["search"]);
      setValues({});
      setItemCount(3);
    }
  };

  useEffect(() => {
    if (values["search"] !== undefined && values["search"].trim() !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [values]);

  return (
    <div className="search">
      <div className="search-form">
        <h2 className="search-form__title">What's going on in the world?</h2>
        <p className="seach-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-form__container">
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter Topic"
            name="search"
            value={values["search"] || ""}
            onChange={handleValueChange}
          />
          <button
            className="search-form__btn"
            type="button"
            onClick={handleSearch}
            disabled={!isValid}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
