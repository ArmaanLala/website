import React from 'react';
import {
  SkillsContainer,
  SkillsH1,
  SkillsCard,
  SkillsH2,
  SkillsImage,
  SkillsP,
  SkillsWrapper,
  ExtraWrapper,
  TinyCard,
  TinyImage,
} from './SkillsElements';
import ReactSVG from '../../resources/react/react-original.svg';
import PythonSVG from '../../resources/python/python-original.svg';
import CppSVG from '../../resources/cplusplus/cplusplus-original.svg';
import JavaSVG from '../../resources/java/java-original.svg';
import TypeSVG from '../../resources/typescript/typescript-original.svg';
import DockerSVG from '../../resources/docker/docker-original.svg';
import FlutterSVG from '../../resources/flutter/flutter-original.svg';
import HerokuSVG from '../../resources/heroku/heroku-original.svg';
import JupyterSVG from '../../resources/jupyter/jupyter-original.svg';
import RustSVG from '../../resources/rust/rust-plain.svg';
import SwiftSVG from '../../resources/swift/swift-original.svg';
import VueJsSVG from '../../resources/vuejs/vuejs-original.svg';
function Skills() {
  return (
    <SkillsContainer>
      <SkillsH1>Proficient Languages</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsImage src={ReactSVG} />
          <SkillsH2>React.js</SkillsH2>
          <SkillsP>I am pretty poggers at React</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsImage src={PythonSVG} />
          <SkillsH2>Python</SkillsH2>
          <SkillsP>Sick ML(G) Python Scripts</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsImage src={CppSVG} />
          <SkillsH2>C++</SkillsH2>
          <SkillsP>C++ is the joke</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsImage src={JavaSVG} />
          <SkillsH2>Java</SkillsH2>
          <SkillsP>Man do I need coffee</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsImage src={TypeSVG} />
          <SkillsH2>TypeScript</SkillsH2>
          <SkillsP>Typescript {'>>'} Javascript</SkillsP>
        </SkillsCard>
      </SkillsWrapper>
      <SkillsH1>Familiar Technologies</SkillsH1>
      <ExtraWrapper>
        <TinyCard>
          <TinyImage src={DockerSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={FlutterSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={HerokuSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={JupyterSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={RustSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={SwiftSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={VueJsSVG} />
        </TinyCard>
      </ExtraWrapper>
    </SkillsContainer>
  );
}

export default Skills;
