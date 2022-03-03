import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const NavItem = styled(NavLink)`
  color: white;
  font-size: 2rem;
  &:hover {
    color: #bc9359;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Nav>
  );
};

export default Navigation;
