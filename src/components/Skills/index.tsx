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
import ArduinoSVG from '../../resources/arduino/arduino-original.svg';
import BashSVG from '../../resources/bash/bash-original.svg';
import BootstrapSVG from '../../resources/bootstrap/bootstrap-plain.svg';
import BulmaSVG from '../../resources/bulma/bulma-plain.svg';
import CSVG from '../../resources/c/c-original.svg';
import CSharpSVG from '../../resources/csharp/csharp-original.svg';
import CppSVG from '../../resources/cplusplus/cplusplus-original.svg';
import CssSVG from '../../resources/css3/css3-original.svg';
import DockerSVG from '../../resources/docker/docker-original.svg';
import ElectronSVG from '../../resources/electron/electron-original.svg';
import FirebaseSVG from '../../resources/firebase/firebase-plain.svg';
import FlutterSVG from '../../resources/flutter/flutter-original.svg';
import GitSVG from '../../resources/git/git-original.svg';
import HerokuSVG from '../../resources/heroku/heroku-original.svg';
import HtmlSVG from '../../resources/html5/html5-original.svg';
import JavaSVG from '../../resources/java/java-original.svg';
import JavascriptSVG from '../../resources/javascript/javascript-original.svg';
import JupyterSVG from '../../resources/jupyter/jupyter-original.svg';
import KubernetesSVG from '../../resources/kubernetes/kubernetes-plain.svg';
import MongoDBSVG from '../../resources/mongodb/mongodb-original.svg';
import NodeSVG from '../../resources/nodejs/nodejs-original.svg';
import PythonSVG from '../../resources/python/python-original.svg';
import RaspberryPiSVG from '../../resources/raspberrypi/raspberrypi-original.svg';
import ReactSVG from '../../resources/react/react-original.svg';
import RustSVG from '../../resources/rust/rust-plain.svg';
import SwiftSVG from '../../resources/swift/swift-original.svg';
import TensorFlowSVG from '../../resources/tensorflow/tensorflow-original.svg';
import TypeSVG from '../../resources/typescript/typescript-original.svg';
import UbuntuSVG from '../../resources/ubuntu/ubuntu-plain.svg';
import VimSVG from '../../resources/vim/vim-original.svg';
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
      {/* import ArduinoSVG from '../../resources/arduino/arduino-original.svg';
import BashSVG from '../../resources/bash/bash-original.svg';
import BootstrapSVG from '../../resources/bootstrap/bootstrap-original.svg';
import BulmaSVG from '../../resources/bulma/bulma-original.svg';
import CSVG from '../../resources/c-original.svg';
import CSharpSVG from '../../resources/csharp/csharp-original.svg';
import CppSVG from '../../resources/cplusplus/cplusplus-original.svg';
import CssSVG from '../../resources/css3/css3-original.svg';
import DockerSVG from '../../resources/docker/docker-original.svg';
import ElectronSVG from '../../resources/electron/electron-original.svg';
import FirebaseSVG from '../../resources/firebase/firebase-original.svg';
import FlutterSVG from '../../resources/flutter/flutter-original.svg';
import GitSVG from '../../resources/git/git-original.svg';
import HerokuSVG from '../../resources/heroku/heroku-original.svg';
import HtmlSVG from '../../resources/html5/html5-original.svg';
import JavaSVG from '../../resources/java/java-original.svg';
import JavascriptSVG from '../../resources/javascript/javascript-original.svg';
import JupyterSVG from '../../resources/jupyter/jupyter-original.svg';
import KubernetesSVG from '../../resources/kubernetes/kubernetes-original.svg';
import MongoDBSVG from '../../resources/mongodb/mongodb-original.svg';
import NodeSVG from '../../resources/nodejs/nodejs-original.svg';
import PythonSVG from '../../resources/python/python-original.svg';
import RaspberryPiSVG from '../../resources/raspberrypi/raspberrypi-original.svg';
import ReactSVG from '../../resources/react/react-original.svg';
import RustSVG from '../../resources/rust/rust-plain.svg';
import SwiftSVG from '../../resources/swift/swift-original.svg';
import TensorFlowSVG from '../../resources/tensorflow/tensorflow-original.svg';
import TypeSVG from '../../resources/typescript/typescript-original.svg';
import UbuntuSVG from '../../resources/ubuntu/ubuntu-original.svg';
import VimSVG from '../../resources/vim/vim-original.svg';
import VueJsSVG from '../../resources/vuejs/vuejs-original.svg'; */}
      <ExtraWrapper>
        <TinyCard>
          <TinyImage src={ArduinoSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={BashSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={BootstrapSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={BulmaSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={CSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={CSharpSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={CssSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={DockerSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={ElectronSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={FirebaseSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={FlutterSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={GitSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={HerokuSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={HtmlSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={JavascriptSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={JupyterSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={KubernetesSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={MongoDBSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={NodeSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={RaspberryPiSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={RustSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={SwiftSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={TensorFlowSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={UbuntuSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={VimSVG} />
        </TinyCard>
        <TinyCard>
          <TinyImage src={VueJsSVG} />
        </TinyCard>
      </ExtraWrapper>
    </SkillsContainer>
  );
}

export default Skills;
