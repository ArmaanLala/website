import styled from 'styled-components';

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 50vh;
  color: #fff;
  background: #f9f9f9;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ResumeRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.p`
  color: #01bf71;
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

export const Subtitle = styled.a`
  max-width: 600px;
  padding-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
  white-space: pre-line;
  margin: 0 auto;
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
