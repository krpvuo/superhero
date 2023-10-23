import styled from "styled-components";
import backgroundImage from "../images/characters-bg.jpg";

export const Wrapper = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImage}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  .page {
    padding: 5rem 2rem;
  }
  .search__form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
  }

  .search__form input {
    color: var(--black);
    font-weight: 600;
    padding: 10px;
    flex: 1 1 70%;
    background-color: var(--primary-100);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
  }

  .search-form-btn {
    cursor: pointer;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    color: #ffffff80;
    text-shadow: none;
    background: transparent;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    transition: 0.5s ease;
    user-select: none;
    flex: 0 1 10%;
  }

  .search-form-btn:hover,
  :focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
      0 0 100px #008cff;
  }

  .page__characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .page__characters img {
    transition: var(--transition);
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .page__character {
    overflow: hidden;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-4);
    flex: 1 1 32%;
    border: 5px var(--primary-700) solid;
    border-radius: var(--borderRadius);
  }

  .page__character-name {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000b3;
    font-weight: 900;
    font-size: 20px;
    opacity: 0;
    color: var(--white);
    transition: var(--transition);
    border-radius: var(--borderRadius);
  }

  .page__character:hover .page__character-name {
    opacity: 1;
  }

  .page__character:hover .page__character::before {
    visibility: visible;
  }

  .not-found {
    color: var(--red-dark);
    font-weight: 900;
    font-size: 20px;
  }
`;
