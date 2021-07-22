import React from 'react';
import {
  ProjectContainer,
  ProjectH1,
  ProjectCard,
  ProjectH2,
  ProjectImage,
  ProjectP,
  ProjectWrapper,
  IconLink,
} from './ProjectElements';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import ReactSVG from '../../resources/react/react-original.svg';
import LatexSVG from '../../resources/latex.svg';

import CppSVG from '../../resources/cplusplus/cplusplus-original.svg';
import Picsel from '../../resources/Picsel.png';
import invEZ from '../../resources/invEZ.png';
import eagle from '../../resources/eagle.png';
import VueJsSVG from '../../resources/vuejs/vuejs-original.svg';
import CSVG from '../../resources/c/c-original.svg';

function Projects() {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectImage src={Picsel} />
          <ProjectH2>PicselAR</ProjectH2>
          <ProjectP style={{ margin: '1rem 0 0 0', height: 'fit-content' }}>
            HackGT 7 Facebook Spark AR Winner
          </ProjectP>
          <ProjectP>
            PicselAR gives users a way to pixelate their background through
            various means (e.g., hand gesture/slider, distance to a virtual
            object, and audio level). Built using SparkAR.
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink
            href="https://github.com/armaanlala/PicselAR"
            target="_blank"
          >
            <FaGithub />
          </IconLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={CppSVG} />
          <ProjectH2>LAsh</ProjectH2>
          <ProjectP>
            LAsh, the Lala Armaan Shell, is a minimalist C++ shell that can be
            run on any Unix System. It incorporates standard shell features such
            as: PATH searching, Exit Status, exec Builtin, Subshell Processing,
            and Multiline inputs.
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink href="https://github.com/armaanlala/lash" target="_blank">
            <FaGithub />
          </IconLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={invEZ} />
          <ProjectH2>invEZ</ProjectH2>
          <ProjectP style={{ margin: '1rem 0 0 0', height: 'fit-content' }}>
            UGA Hacks 5 Runner-Up
          </ProjectP>
          <ProjectP>
            invEZ takes the stressful parts out of investing and helps to curate
            a tailored list of possible stocks specifically for the user. Built
            using Vue.js and Express.js
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink href="https://github.com/armaanlala/invEZ" target="_blank">
            <FaGithub />
          </IconLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={ReactSVG} />
          <ProjectH2>This Website!</ProjectH2>
          <ProjectP>
            My portfolio website designed in React.js. I used this project as a
            chance to learn TypeScript along with Styled Components. To further
            challenge myself, I took it upon myself to use no CSS libraries
            throughout the project.
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink
            href="https://github.com/armaanlala/website"
            target="_blank"
          >
            <FaGithub />
          </IconLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={CSVG} />
          <ProjectH2>FireEmblem2110-GBA</ProjectH2>
          <ProjectP>
            A fully functional Gameboy Advance game developed in C. Made as
            project for CS2110 and can be run inside a Docker Container or be
            played on real GameBoy Advance hardware.
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink
            href="https://github.com/armaanlala/FireEmblem2110-GBA"
            target="_blank"
          >
            <FaGithub />
          </IconLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={eagle} />
          <ProjectH2>LED KeyChain</ProjectH2>
          <ProjectP>
            An EAGLE PCB project designed as a simple device to be attached to a
            keychain. Pressing a standard mechanical keyswitch lights up the SMD
            LEDs on the board. The device is powered by a coin cell battery.
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink
            href="https://github.com/ArmaanLala/LED_Keychain"
            target="_blank"
          >
            <FaGithub />
          </IconLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={LatexSVG} />
          <ProjectH2>Math 2106 Portfolio</ProjectH2>
          <ProjectP>
            My final project for Math 2106. The file is written in LaTeX and
            consists of my best proofs from throughout the semester.
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink
            href="https://github.com/ArmaanLala/Math-2106-Portfolio/blob/main/Math_2106_Portfolio.pdf"
            target="_blank"
          >
            <FaGithub />
          </IconLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={VueJsSVG} />
          <ProjectH2>1554 Project</ProjectH2>
          <ProjectP>
            This is my project for Math 1554 during Summer 2020. The project is
            all about calculating the number of possible linear dialing paths
            using topics learned in linear algebra.
          </ProjectP>
          <ProjectH2>Check it out here:</ProjectH2>
          <IconLink
            href="https://github.com/ArmaanLala/1554Project"
            target="_blank"
          >
            <FaGithub />
          </IconLink>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
}

export default Projects;
