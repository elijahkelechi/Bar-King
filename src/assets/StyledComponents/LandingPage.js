import styled from "styled-components";

const LandingPageContainer = styled.div`
  box-sizing: border-box;
  padding: auto;
  margin: 50px;

  /* Centering the content on mobile devices */
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-wrap: wrap;
    marnig: auto;
  }
`;

export default LandingPageContainer;
