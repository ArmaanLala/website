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
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="projects">Projects</SidebarLink>
          <SidebarLink to="classes">Classes</SidebarLink>
          <SidebarLink to="resume">Resume</SidebarLink>
        </SidebarContent>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
