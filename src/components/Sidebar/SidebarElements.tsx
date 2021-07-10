import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

interface ShadowedProps {
  readonly isOpen: boolean;
}

export const SidebarContainer = styled.aside<ShadowedProps>`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? '100%' : '0')};
  top: ${(props) => (props.isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100px);
  text-align: center;
  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(4, 100px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: blue;
    transition: 0.3s ease-in-out;
  }
`;
