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
import Picture from '../../resources/image.jpg';

function About() {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutRow>
          <Col1>
            <TextWrapper>
              <TopLine>Sick Website Skills</TopLine>
              <Heading>About Me</Heading>
              <Subtitle>
                I am currently a third year student at the Georgia Instutite of
                Technology, studying for a Bachelor's degree in Mathematics,
                along with Computer Science, with a concentration on Systems and
                Architecture, as well as Intelligence.\n\nI plan on pursing a
                Master's Degree in Computer Science, with a specialization in
                either Machine Learning, or Computer Architecture.
              </Subtitle>
            </TextWrapper>
          </Col1>
          <Col2>
            <ImgWrap>
              <Img src={Picture} />
            </ImgWrap>
          </Col2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
