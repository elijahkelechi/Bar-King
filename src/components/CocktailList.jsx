import React from "react";
import ErrorContainer from "../assets/StyledComponents/ErrorPage";
import { CocktailCard } from "../Pages";
import CocktailListContainer from "../assets/StyledComponents/CocktailList";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <div>
        <ErrorContainer>
          <h3>No Match Found</h3>
        </ErrorContainer>
      </div>
    );
  } else {
    const drinkValues = drinks.map((property) => {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strGlass,
        strAlcoholic,
        strInstructions,
      } = property;

      return {
        drinkId: idDrink,
        drinkName: strDrink,
        drinkImage: strDrinkThumb,
        glassType: strGlass,
        description: strAlcoholic,
        instruction: strInstructions,
      };
    });

    return (
      <CocktailListContainer>
        {drinkValues.map((property) => {
          return <CocktailCard key={property.drinkId} {...property} />;
        })}
      </CocktailListContainer>
    );
  }
};

export default CocktailList;
