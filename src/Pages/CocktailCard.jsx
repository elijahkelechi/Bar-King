import React from "react";
import CocktailCardWrapper from "../assets/StyledComponents/CocktailCard";
import { Link } from "react-router-dom";
const CocktailCard = ({
  drinkId,
  drinkImage,
  drinkName,
  glassType,
  description,
}) => {
  return (
    <CocktailCardWrapper>
      <div className="img-container">
        <img src={drinkImage} alt={drinkName} className="img" />
      </div>
      <div className="footer">
        <h4>{drinkName}</h4>
        <h5>{glassType}</h5>
        <p>{description}</p>
        <Link
          style={{ backgroundColor: "#000080" }}
          to={`./cocktail/${drinkId}`}
          className="btn"
        >
          More Info
        </Link>
      </div>
    </CocktailCardWrapper>
  );
};

export default CocktailCard;
