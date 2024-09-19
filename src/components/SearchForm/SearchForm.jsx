import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="seach-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search-form__container">
        <input
          type="text"
          className="search-form__input"
          placeholder="Enter Topic"
          name="search"
        />
        <button className="search-form__btn">Search</button>
      </div>
    </div>
  );
}

export default SearchForm;
