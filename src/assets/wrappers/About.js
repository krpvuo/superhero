import styled from "styled-components";
import backgroundImage from "../images/superheroes.jpg";

export const Wrapper = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImage});
  background-size: cover;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  color: var(--white);
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .about-title {
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 900;
  }
  .about-subtitle {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 20px 0;
  }
  .about-links {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 2rem;
    margin-top: 20px;
  }
  .about-link {
    cursor: pointer;
    color: var(--white);
    transition: var(--transition);
  }
  .about-link:hover {
    color: var(--primary-200);
  }
`;
