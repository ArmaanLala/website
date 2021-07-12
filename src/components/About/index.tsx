import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Col1,
  Col2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from '../About/AboutElements';

function About(props: {
  lightBg: boolean;
  lightText: boolean;
  darkText: boolean;
  headline: string;
  description: string;
  topLine: string;
  src: string;
  imgStart: boolean;
  id: string;
}) {
  return (
    <AboutContainer lightBg={props.lightBg} id={props.id}>
      <AboutWrapper>
        <AboutRow imgStart={props.imgStart}>
          <Col1>
            <TextWrapper>
              <TopLine>{props.topLine}</TopLine>
              <Heading lightText={props.lightText}>{props.headline}</Heading>
              <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
            </TextWrapper>
          </Col1>
          <Col2>
            <ImgWrap>
              <Img src={props.src} />
            </ImgWrap>
          </Col2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
