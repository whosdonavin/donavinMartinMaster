import { useState } from "react";
import { mobile } from "../Responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: #0b2545;
`;
const Top = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: flex-end;
`;
const Bottom = styled.div`
  height: 100%;
`;

const Bars = styled(FaBars)`
  display: none;
  font-size: 2rem;
  ${mobile({ display: "block" })};
`;
const Close = styled(FaTimes)`
  font-size: 2rem;
`;
const Menu = styled.div`
  gap: 1.5rem;
  height: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SubMenu = styled.div`
  height: 40%;
  gap: 1.5rem;
  display: flex;
  font-size: 1.25rem;
  align-items: center;
  flex-direction: column;
`;
const Group = styled.div``;
const Label = styled.label``;
const Span = styled.span`
  margin: 0 0.5rem;
`;
const MenuItem = styled(Link)`
  color: white;
  font-size: 2rem;
`;
const WebLink = styled.a`
  color: white;
`;
const MobileNav = () => {
  const [menuStatus, setMenuStatus] = useState("hide");
  function openMenu() {
    setMenuStatus("show");
  }
  function closeMenu() {
    setMenuStatus("hide");
  }
  return (
    <>
      <Nav className={menuStatus}>
        <Top>
          <Close onClick={closeMenu} />
        </Top>
        <Bottom>
          <Menu>
            <MenuItem to="/" onClick={closeMenu}>
              Home
            </MenuItem>
            <MenuItem to="/projects" onClick={closeMenu}>
              Projects
            </MenuItem>
            <MenuItem to="/contact" onClick={closeMenu}>
              Contact
            </MenuItem>
          </Menu>
          <SubMenu>
            <Group>
              <Label>Email</Label>
              <Span>-</Span>
              <WebLink href="mailto:Donavin@donavinmartin.com">
                Donavin@donavinmartin.com
              </WebLink>
            </Group>
            <Group>
              <Label>Resume</Label>
              <Span>-</Span>
              <WebLink download>Download</WebLink>
            </Group>
            <WebLink
              href="https://www.linkedin.com/in/donavinmartin/"
              target="_blank"
            >
              Linkedin
            </WebLink>
            <WebLink href="https://github.com/whosdonavin" target="_blank">
              Github
            </WebLink>
          </SubMenu>
        </Bottom>
      </Nav>
      <Bars onClick={openMenu} />
    </>
  );
};

export default MobileNav;
