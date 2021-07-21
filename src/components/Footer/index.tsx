import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrapper,
  SocialMedia,
  Logo,
  Icons,
  IconLink,
  MediaWrapper,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo to="" onClick={toggleHome}>
          Armaan Lala
        </Logo>
        <p style={{ color: 'white' }}>Made Using TypeScript + React.js</p>

        <SocialMedia>
          <MediaWrapper>
            <Icons>
              <IconLink
                href="https://www.linkedin.com/in/armaan-lala"
                target="_blank"
              >
                <FaLinkedin />
              </IconLink>
              <IconLink href="mailto:armaanlala@gmail.com?subject=Hello%20Armaan!">
                <FaEnvelope />
              </IconLink>
              <IconLink href="https://github.com/armaanlala" target="_blank">
                <FaGithub />
              </IconLink>
            </Icons>
          </MediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
