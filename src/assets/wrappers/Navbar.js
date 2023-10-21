import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: var(--grey-300);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem;
    transition: var(--transition);
    letter-spacing: 2px;
    font-weight: 600;
    text-align: center;
  }

  .nav-link:hover {
    color: var(--primary-500);
  }

  .nav-link.active {
    color: var(--primary-500);
    border-bottom: 3px var(--primary-500) solid;
  }

  /* active */

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;
