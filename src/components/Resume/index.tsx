import React from 'react';
import {
  ResumeContainer,
  ResumeWrapper,
  ResumeRow,
  Col1,
  Col2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from './ResumeElements';

function Resume() {
  return (
    <ResumeContainer id="resume">
      <ResumeWrapper>
        <ResumeRow>
          <TextWrapper>
            <Heading>Resume Stuff Here</Heading>
          </TextWrapper>
        </ResumeRow>
      </ResumeWrapper>
    </ResumeContainer>
  );
}

export default Resume;
