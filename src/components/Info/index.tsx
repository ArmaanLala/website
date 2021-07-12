import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Col1,
  Col2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from './InfoElements';

function Info(props: {
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
    <InfoContainer lightBg={props.lightBg} id={props.id}>
      <InfoWrapper>
        <InfoRow imgStart={props.imgStart}>
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
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}

export default Info;
