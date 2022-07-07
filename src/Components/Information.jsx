import React from "react";
import MobileNav from "./MobileNav";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import Resume from "../Images/donavinMartinResume.pdf";

const InformationSection = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0" })};
`;
const Top = styled.div`
  ${mobile({
    width: "100%",
    display: "flex",
    "justify-content": "space-between",
  })};
`;
const Center = styled.div`
  ${mobile({ display: "none" })};
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ display: "none" })};
`;
const Name = styled(Link)`
  color: white;
  font-size: 3.5rem;
  line-height: 100%;
  font-family: "Reenie Beanie", cursive;
  ${mobile({ "font-size": "2.25rem" })};
  &:hover {
    color: #bc9359;
    cursor: pointer;
  }
`;
const Title = styled.p`
  font-size: 2rem;
  ${mobile({ display: "none" })};
`;
const Group = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ "justify-content": "center" })};
`;
const Label = styled.div`
  font-size: 1.5rem;
  ${mobile({ "font-size": "1.25rem" })};
`;
const Dash = styled.span`
  margin: 0 0.5rem;
`;
const Email = styled.a`
  color: white;
  font-size: 1.5rem;
  ${mobile({ "font-size": "1.25rem" })};
  &:hover {
    color: #bc9359;
  }
`;
const Download = styled.a`
  color: white;
  font-size: 1.5rem;
  ${mobile({ "font-size": "1.25rem" })};
  &:hover {
    color: #bc9359;
    cursor: pointer;
  }
`;
const WebLink = styled.a`
  color: white;
  font-size: 1.5rem;
  ${mobile({ "font-size": "1.25rem" })};
  &:hover {
    color: #bc9359;
  }
`;
const Information = () => {
  return (
    <InformationSection>
      <Top>
        <Name to="/">Donavin Martin</Name>
        <Title>QA Engineer</Title>
        <MobileNav />
      </Top>
      <Center>
        <Group>
          <Label>Email</Label>
          <Dash>-</Dash>
          <Email href="mailto:Donavin@donavinmartin.com">
            Donavin@donavinmartin.com
          </Email>
        </Group>
        <Group>
          <Label>Resume</Label>
          <Dash>-</Dash>
          <Download download href={Resume}>
            Download
          </Download>
        </Group>
      </Center>
      <Bottom>
        <WebLink
          href="https://www.linkedin.com/in/donavinmartin/"
          target="_blank"
        >
          Linkedin
        </WebLink>
        <WebLink href="https://github.com/whosdonavin" target="_blank">
          Github
        </WebLink>
      </Bottom>
    </InformationSection>
  );
};

export default Information;
