import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import LandingPageContainer from "../assets/StyledComponents/LandingPage";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const drinkSearch = url.searchParams.get("search") || "";
  const response = await axios.get(`${drinkUrl}${drinkSearch}`);
  return { drinks: response.data.drinks, drinkSearch };
};

const LandingPage = () => {
  // const data = useLoaderData();
  const { drinks, drinkSearch } = useLoaderData();
  return (
    <LandingPageContainer>
      <SearchForm searchTerm={drinkSearch} />
      <CocktailList drinks={drinks} />;
    </LandingPageContainer>
  );
};
export default LandingPage;
