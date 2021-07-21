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

import picture from '../../resources/IT.jpg';

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <ExperienceWrapper>
        <ExperienceRow>
          <Col1>
            <TextWrapper>
              <TopLine>No more Generics</TopLine>
              <Heading>Experience</Heading>
              <Subtitle>
                ARCS Student IT Worker (2020 - 2021): Diagnose hardware,
                software, and network problems, configuring, installing and
                maintaining laptops, workstations, and servers. Perform
                maintenance on all different operating systems used at Georgia
                Tech from, RedHat Linux, Windows, to MacOS. The Coder School
                (2018-19): Instructed kids between the ages of 8–16 in 1–on–1
                lesson on various aspects of programming with either Scratch or
                Python. Led summer classes in programming with class sizes up to
                20 students.
              </Subtitle>
            </TextWrapper>
          </Col1>
          <Col2>
            <ImgWrap>
              <Img src={picture} />
            </ImgWrap>
          </Col2>
        </ExperienceRow>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
}

export default Experience;
