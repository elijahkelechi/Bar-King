import React from "react";
import ErrorContainer from "../assets/StyledComponents/ErrorPage";
import { useRouteError } from "react-router-dom";

const SinglePageErrors = () => {
  const error = useRouteError();
  console.log(error.message);
  return (
    <ErrorContainer>
      <div>Something Went Wrong</div>
    </ErrorContainer>
  );
};

export default SinglePageErrors;
