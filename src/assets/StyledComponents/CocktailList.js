import styled from "styled-components";

const CocktailListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 50px;
`;

export default CocktailListContainer;
