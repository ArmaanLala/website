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
  Location,
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
              {/* <TopLine>No more Generics</TopLine> */}
              <Heading>Experience</Heading>
              <Location>
                NCR Corporation Software Engineering Intern <br />
                (May 2021 - August 2021):
              </Location>
              <Subtitle>
                ● Designed a React.js web-app to be able to monitor the status
                and health of all Point-Of-Sale systems throughout the country,
                with integration for RabbitMQ metrics to better monitor
                performance.
                <br />
                ● Modified an existing C# REST API to increase performance,
                decreasing load times from 5 minutes to 4 seconds. Overhauled
                server-side performance analytics, decreasing total response
                times from 4.5 minutes to 3.8 milliseconds.
                <br />● Implemented an Android WebView container to display POS
                systems running on Store servers. Established WebSocket
                connections in order to relay barcode data from the Android
                device to the POS.
              </Subtitle>
              <Location>
                ARCS Student IT Worker <br />
                (August 2020 - May 2021):
              </Location>
              <Subtitle>
                ● Diagnosed hardware, software, and network problems,
                configuring, installing and maintaining laptops, workstations,
                and servers.
                <br />● Performed maintenance on all different operating systems
                used at Georgia Tech from, RedHat Linux, Windows, to MacOS.
              </Subtitle>
              <Location>
                The Coder School <br />
                (May 2018 - May 2019):{' '}
              </Location>
              <Subtitle>
                ● Instructed kids between the ages of 8–16 in 1–on–1 lesson in
                various aspects of programming with either Scratch or Python.
                <br />● Led summer classes in programming with class sizes up to
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
