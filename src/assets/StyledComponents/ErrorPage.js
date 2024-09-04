import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height of the viewport */
  text-align: center;
  img {
    margin: 0 auto;
    max-width: 500px;
  }

  h3 {
    color: #000080;
    font-size: 2rem;
    animation: shake 0.5s ease-in-out infinite alternate, fadeIn 2s ease-in-out;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default ErrorContainer;
