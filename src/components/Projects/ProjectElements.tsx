import styled from 'styled-components';

export const ProjectContainer = styled.div`
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

export const ProjectWrapper = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  padding: 0 50px;
  padding-bottom: 30px;
`;

export const ProjectCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  height: 500px;
  width: 370px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    height: fit-content;
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  min-height: 160px;
  min-width: 160px;
  height: 160px;
  width: 160px;
  max-height: 160px;
  max-width: fit-content;
  margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
  padding-top: 30px;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 1rem;
  width: 100%;
  height: 50%;
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
export const IconLink = styled.a`
  color: #000;
  font-size: 24px;
`;
