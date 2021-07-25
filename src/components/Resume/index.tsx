import React from 'react';
import {
  ResumeContainer,
  ResumeWrapper,
  ResumeRow,
  TextWrapper,
  Heading,
  Subtitle,
} from './ResumeElements';
function Resume() {
  return (
    <ResumeContainer id="resume">
      <ResumeWrapper>
        <ResumeRow>
          <TextWrapper>
            <Heading>Résumé</Heading>
          </TextWrapper>
        </ResumeRow>
        <Subtitle href="Resume.pdf" target="blank">
          If the PDF does not load, please click here.
        </Subtitle>
        <iframe
          title="Resume Google Drive"
          src="https://drive.google.com/file/d/1UzKRHB-t2HARi8-15DJuFOFIgZEgFisa/preview"
          style={{ margin: '0 auto', height: '50vh', width: '80%' }}
        ></iframe>
      </ResumeWrapper>
    </ResumeContainer>
  );
}

export default Resume;
