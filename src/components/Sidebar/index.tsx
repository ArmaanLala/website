import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarContent,
  SidebarLink,
} from './SidebarElements';
function SideBar(props: { isOpen: boolean; toggle: () => void }) {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarContent>
          <SidebarLink to="about" onClick={props.toggle}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={props.toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="resume" onClick={props.toggle}>
            Resume
          </SidebarLink>
          <SidebarLink to="skills" onClick={props.toggle}>
            Skills
          </SidebarLink>
        </SidebarContent>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
