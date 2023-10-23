import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: var(--primary-200);
  text-align: center;
  font-weight: 900;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  .git-btn {
    display: block;
    text-align: center;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.4s;
    cursor: pointer;
    position: relative;
    background-color: rgb(31, 31, 31);
    overflow: hidden;
  }

  .svgIcon {
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .text {
    position: absolute;
    color: rgb(255, 255, 255);
    width: 120px;
    font-weight: 600;
    opacity: 0;
    transition-duration: 0.4s;
  }

  .git-btn:hover {
    width: 110px;
    transition-duration: 0.4s;
    border-radius: 30px;
  }

  .git-btn:hover .text {
    opacity: 1;
    transition-duration: 0.4s;
  }

  .git-btn:hover .svgIcon {
    opacity: 0;
    transition-duration: 0.3s;
  }
`;
