import styled from 'styled-components';

interface ContainerProps {
  lightBg: boolean;
  id: string;
}

interface RowProps {
  imgStart: boolean;
}

interface HeadingProps {
  lightText: boolean;
}

interface SubProps {
  darkText: boolean;
}

// interface AllProps {
//   lightBg: boolean;
//   lightText: boolean;
//   darkText: boolean;
//   headline: string;
//   subtitle: string;
//   src: string;
//   imgStart: boolean;
//   id: string;
// }

export const AboutContainer = styled.div<ContainerProps>`
  color: #fff;
  background: ${(props) => (props.lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 10000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div<RowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
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
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  @media screen and (max-width: 768px) {
    fontsize: 32px;
  }
`;

export const Subtitle = styled.p<SubProps>`
  max-width: 600px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
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
