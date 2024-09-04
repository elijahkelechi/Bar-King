import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import CocktailPageContainer from "../assets/StyledComponents/CocktailPage";
const SingleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const loader = async ({ params }) => {
  const { drinkId } = params;
  const { data } = await axios.get(`${SingleCocktailUrl}${drinkId}`);
  return { drinkId, data };
};

const SingleCocktailPage = () => {
  const { drinkId, data } = useLoaderData();
  if (!data) return <div>An Error Occured</div>;
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredientsWithMeasures = [];

  for (let i = 0; i <= 15; i++) {
    const ingredients = singleDrink[`strIngredient${i}`];
    const measurements = singleDrink[`strMeasure${i}`];
    const of = "of";
    if (ingredients) {
      const ingridientPush = measurements
        ? `${measurements || ""} of ${ingredients}`
        : ingredients;
      ingredientsWithMeasures.push(ingridientPush);
    }
  }

  // console.log(singleDrink);
  return (
    <CocktailPageContainer>
      <header>
        <h3>{name}</h3>
        <Link style={{ marginTop: "25px" }} to={`/`} className="btn">
          Home
        </Link>
      </header>
      <div className="drink">
        <img className="img" src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">Type: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">Category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">Glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions: </span>
            {instructions}
          </p>
          <div style={{ fontWeight: "900", lineHeight: "2.5" }}>
            <span className="drink-data">Ingredients: </span>
            <ul>
              {ingredientsWithMeasures.map((items, index) => (
                <li key={index}>{items}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CocktailPageContainer>
  );
};

export default SingleCocktailPage;
