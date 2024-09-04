import styled from "styled-components";

const LandingPageContainer = styled.div`
  box-sizing: border-box;
  padding: 50px;
  margin: auto;

  /* Centering the content on mobile devices */
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-wrap: wrap;
  }
`;

export default LandingPageContainer;
