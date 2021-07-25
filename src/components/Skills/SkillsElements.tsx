import styled from 'styled-components';

export const SkillsContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 50vh;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #020a1d;

  @media screen and (max-width: 1300px) {
    height: max-content;
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;

export const SkillsWrapper = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  padding-bottom: 30px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 320px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillsImage = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const SkillsH1 = styled.h1`
  padding-top: 30px;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const SkillsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ExtraWrapper = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 20px;
  width: 80%;
`;

export const TinyCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 120px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TinyImage = styled.img`
  height: 100px;
  width: 100px;
`;
