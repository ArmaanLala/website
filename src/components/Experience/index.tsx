import React from 'react';
import {
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceRow,
  Col1,
  Col2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from '../Experience/ExperienceElements';

function Experience(props: {
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
    <ExperienceContainer lightBg={props.lightBg} id={props.id}>
      <ExperienceWrapper>
        <ExperienceRow imgStart={props.imgStart}>
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
        </ExperienceRow>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
}

export default Experience;
