import styled from "styled-components";
import { mobile } from "../Responsive";
const FooterText = styled.footer`
  grid-column: 1 / 4;
  padding: 2rem;
`;
const Text = styled.p`
  font-size: 1.25rem;
  ${mobile({ "font-size": ".75rem", "text-align": "center" })}
`;

const Footer = () => {
  return (
    <FooterText>
      <Text>&copy; Donavin Martin 2022 | All Right Reserved</Text>
    </FooterText>
  );
};

export default Footer;
