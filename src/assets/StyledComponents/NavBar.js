import styled from "styled-components";
const NavBarContainer = styled.nav`
  background: #ffbf00;
  width: 100%;
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
  }
  .logo {
    cursor: pointer;
    font-family: cursive;
    cusor: pointer;
    font-size: clamp(24px, 3vw, 48px);
    font-weigth: 2500;
    color: #000080;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 12px;
  }
  .nav-link {
    color: rgb(250, 249, 246);
    font-weight: 1500;
    padding: 5px 5px 5px 0px;
    transition: var(--transition);
    letter-spacing: 4px;
  }
  .nav-link:hover {
    color: #2828ea;
  }
  .active {
    color: #000080;
  }
  @media (min-width: 768px) {
    .logo {
      cusor: pointer;
      font-size: clamp(32px, 3vw, 48px);
    }
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-link {
      font-weight: 500;
      padding: 5px 5px 5px 0px;
      transition: var(--transition);
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0px;
    }
  }
`;
export default NavBarContainer;
