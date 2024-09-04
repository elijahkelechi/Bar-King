import React from "react";
import SearchFormContainer from "../assets/StyledComponents/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <SearchFormContainer>
      <Form className="form">
        <input
          defaultValue={searchTerm}
          name="search"
          type="search"
          className="form-input"
        />
        <button
          style={{ backgroundColor: " #000080" }}
          className="btn"
          type="submit"
        >
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </SearchFormContainer>
  );
};

export default SearchForm;
