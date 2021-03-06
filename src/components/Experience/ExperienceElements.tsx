import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 50vh;
  height: fit-content;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ExperienceWrapper = styled.div`
  height: fit-content;
  display: grid;
  z-index: 1;
  /* min-height: 50vh; */
  width: 100%;
  max-width: 10000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ExperienceRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col2' 'col1';
  }
`;

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

export const TopLine = styled.p`
  color: #183ed3;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #010606;
  @media screen and (max-width: 768px) {
    fontsize: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 600px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
  white-space: pre-line;
`;

export const Location = styled.p`
  font-weight: 700;
  max-width: 600px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
  white-space: pre-line;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
