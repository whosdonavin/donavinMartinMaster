import styled from "styled-components";
import { mobile } from "../../Responsive";
import GR from "../../Images/theGreeneRoom.png";
import MC from "../../Images/martinezCutz.png";
import AI from "../../Images/theInsuranceStore.png";

const ProjectsPage = styled.section`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  ${mobile({ width: "100%", "text-align": "center", margin: "0 auto" })};
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  ${mobile({ "font-size": "2rem " })}
`;
const Project = styled.div`
  margin-bottom: 10%;
`;
const ProjectTitle = styled.h1`
  margin: 1rem 0;
  font-size: 1.5rem;
`;
const ProjectImage = styled.div`
  width: 80%;
  ${mobile({ width: "100%" })};
`;
const Image = styled.img`
  width: 100%;
`;
const ProjectDescription = styled.div``;
const ProjectText = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
`;
const ProjectLink = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
  border-bottom: 1px solid #bc9359;
  &:hover {
    color: #bc9359;
    cursor: pointer;
  }
`;

const Projects = () => {
  return (
    <ProjectsPage>
      <Title>Projects</Title>
      <Project>
        <ProjectTitle>The Greene Room</ProjectTitle>
        <ProjectImage>
          <ProjectLink href="https://tgrokc.com/" target="_blank">
            <Image src={GR} />
          </ProjectLink>
        </ProjectImage>
        <ProjectDescription>
          <ProjectText>
            A fullstack e-commerce application that was previously using Wix for
            an Oklahoma City caterer. The original website has been redesigned
            and rebuilt with React, Styled Components and Redux. It features its
            own API to facilitate any request outside of payment processing,
            which is executed with Stripe.
          </ProjectText>
          <ProjectLink href="https://tgrokc.com/" target="_blank">
            View Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/whosdonavin/theGreeneRoomMaster "
            target="_blank"
          >
            View Code
          </ProjectLink>
        </ProjectDescription>
      </Project>
      <Project>
        <ProjectTitle>Martinez Cutz</ProjectTitle>
        <ProjectImage>
          <ProjectLink href="https://martinezcutz.com/" target="_blank">
            <Image src={MC} />
          </ProjectLink>
        </ProjectImage>
        <ProjectDescription>
          <ProjectText>
            A fullstack appointment booking application for a barber here in
            Oklahoma City. The "Martinez Cutz" front-end is comprised of React,
            Styled Components and Redux. In addition, it features its own API
            utilizing Node.js and Express paired with a MySql database.
          </ProjectText>
          <ProjectLink href="https://martinezcutz.com/" target="_blank">
            View Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/whosdonavin/martinezCutzMaster"
            target="_blank"
          >
            View Code
          </ProjectLink>
        </ProjectDescription>
      </Project>
      <Project>
        <ProjectTitle>Auto Insurance OK</ProjectTitle>
        <ProjectImage>
          <ProjectLink href="https://autoinsuranceok.co/" target="_blank">
            <Image src={AI} />
          </ProjectLink>
        </ProjectImage>
        <ProjectDescription>
          <ProjectText>
            A single page application intended for lead generation. To transfer
            the data generated, this application implements Netlify forms which
            was the ideal solution for the client "The Insurance Store" here in
            Oklahoma City.
          </ProjectText>
          <ProjectLink href="https://autoinsuranceok.co/" target="_blank">
            View Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/whosdonavin/autoInsuranceOkMaster"
            target="_blank"
          >
            View Code
          </ProjectLink>
        </ProjectDescription>
      </Project>
    </ProjectsPage>
  );
};

export default Projects;
