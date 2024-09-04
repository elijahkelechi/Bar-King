import React from "react";
import img from "../assets/not-found.svg";
import ErrorContainer from "../assets/StyledComponents/ErrorPage";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <ErrorContainer>
        <img className="img" src={img} />
        <h3>
          {error.status} {error.statusText}
        </h3>
        <Link to="/">Back Home</Link>
      </ErrorContainer>
    );
  } else {
    return (
      <ErrorContainer>
        <h3>something went wrong</h3>
      </ErrorContainer>
    );
  }
};

export default Error;
