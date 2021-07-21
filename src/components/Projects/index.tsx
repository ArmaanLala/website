import React from 'react';
import {
  ProjectContainer,
  ProjectH1,
  ProjectCard,
  ProjectH2,
  ProjectImage,
  ProjectP,
  ProjectWrapper,
} from './ProjectElements';
function Projects() {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectImage />
          <ProjectH2>Test Project</ProjectH2>
          <ProjectP>I Totally made this project</ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
}

export default Projects;
