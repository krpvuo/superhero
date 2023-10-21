import styled from "styled-components";

export const Wrapper = styled.main`
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  .ladning__content {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .landing__content-description {
    flex: 1 1 50%;
    text-align: center;
  }

  .landing__content-description h2 {
    margin-bottom: 10px;
    font-weight: 600;
  }

  .landing__content-description p {
    font-weight: 600;
  }

  .swiper {
    flex: 1 1 50%;
    margin: 0;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 550px;
    object-fit: cover;
    border-radius: 10px;
    border: 5px var(--primary-400) solid;
    box-shadow: var(--shadow-4);
  }

  .swiper-pagination-bullets {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 20px;
    display: grid;
    place-items: center;
    font-size: 12px;
    color:var(--white);
    opacity: 0.7;
    font-weight: 600;
    background: var(--grey-500);
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    color: #fff;
    font-weight: 900;
    background: var(--primary-700);
  }
  .slide-info {
    padding: 40px 0;
    margin-bottom: 10px;
  }
  .slide-info p {
    margin-bottom: 10px;
    font-weight: 600;
  }

  .landing__content-info {
    margin: 200px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }

  .landing__content-info-img img {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    border: 5px var(--primary-900) solid;
    box-shadow: var(--shadow-4);
  }

  .landing__content-info-img {
    flex: 1 1 45%;
  }

  .landing__content-info-img .landing__content-description {
    flex: 1 1 55%;
  }
`;
