import styled from 'styled-components';

export const ContactContainer = styled.section`
    width: 95%;
    max-width: 1200px; 
    padding-top: 6rem;
    margin: 5em auto;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 90%;
   }
}
`;

export const ContactContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactFormContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ContactTitle = styled.h2`
  position: relative;
  color: var(--darkGreenClr);
  font-size: 3.5rem;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    border-bottom: 3px solid var(--orangeClr);
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ContactSubtitle = styled.h3`
  position: relative;
  color: var(--darkGreenClr);
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ContactSocial = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;
  .social__link {
    margin-left: 2rem;
    color: var(--darkGreenClr);
    font-size: 2rem;
    &:hover {
      color: var(--orangeClr);
      transform: scale(1.15);
    }
  }
`;

export const ContactFormC = styled.div`
  width: 100%;
  display: Flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  form {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    div {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      label {
        display: inline-block;
        width: 65px;
      }
      input,
      textarea {
        flex: 1;
        padding: 0.3rem 0.5rem;
        outline: none;
        border: 4px solid transparent;
        border-radius: 0.5rem;
        background-color: var(--lightClr);

        transition: all 0.5s ease-in-out;

        &:focus {
          border-bottom-color: var(--darkGreenClr);
        }
      }
    }
    p {
      margin-bottom: 1rem;
      padding-top: 0;
      padding-left: 70px;

      font-size: 0.75rem;
      color: red;
    }

    button {
      display: block;
      padding: 0.5rem 1.5rem;
      margin-left: auto;
      margin-right: auto;
      border: 2px solid var(--lightGreenClr);
      background-color: var(--darkGreenClr);
      color: var(--lightClr);
      cursor: pointer;
      border-radius: 0.5rem;

      &:hover {
        background-color: var(--lightGreenClr);
        border-color: var(--darkGreenClr);
        color: var(--darkGreenClr);
      }
    }
  }
`;
