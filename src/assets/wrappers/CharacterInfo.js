import styled from "styled-components";

export const Wrapper = styled.main`
  margin: 50px 0;
  color: var(--white);
  line-height: 130%;
  font-size: 24px;

  .page {
    min-height: auto;
  }

  .character__title {
    margin-bottom: 20px;
  }

  .character__subtitle {
    margin-bottom: 50px;
  }

  .character__about {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    background-color: var(--primary-500);
    box-shadow: var(--shadow-4);
    border-radius: 10px;
  }

  .character__info {
    flex: 1 1 50%;
    padding: 10px;
  }

  .character__info p {
    line-height: 130%;
    margin-bottom: 10px;
  }

  .character__info span {
    display: inline-block;
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px;
    background-color: var(--primary-400);
    border-radius: 10px;
    margin-right: 10px;
  }

  .character__about-img {
  }

  .character__about-img img {
    border: 5px var(--primary-500) solid;
    box-shadow: var(--shadow-3);
    width: 100%;
    max-width: 400px;
    height: 100%;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
  }

  .tab {
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    padding: 10px;
    background: var(--primary-800);
    flex: auto;
  }

  .tab.active {
    background-color: var(--primary-600);
  }
`;
