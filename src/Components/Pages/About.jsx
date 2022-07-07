import styled from "styled-components";
import { mobile } from "../../Responsive";
import {
  SiExpress,
  SiMysql,
  SiJquery,
  SiJira,
  SiRedux,
  SiCypress,
  SiJest,
  SiJenkins,
  SiDocker,
  SiPhp,
  SiElectron,
} from "react-icons/si";
import {
  FaConfluence,
  FaJsSquare,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaSass,
  FaNpm,
  FaLaravel,
} from "react-icons/fa";

const AboutPage = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  width: 80%;
  margin: 0 auto;
  ${mobile({ width: "100%", margin: 0, "text-align": "center" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  ${mobile({ "font-size": "2rem " })}
`;
const PageSubtitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;
const PageText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const Bottom = styled.div`
  display: none;
  ${mobile({ display: "block" })}
`;
const Skills = styled.div`
  gap: 1rem;
  width: 75%;
  display: flex;
  flex-wrap: wrap;

  ${mobile({
    width: "100%",
    display: "grid",
    "grid-template-columns": "repeat(3,1fr)",
  })}
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ItemTitle = styled.p`
  text-transform: uppercase;
  ${mobile({ "font-size": ".75rem " })}
`;
const HTML = styled(FaHtml5)`
  font-size: 2rem;
  color: #f1502f;
  ${mobile({ "font-size": "2rem " })}
`;
const CSS = styled(FaCss3Alt)`
  font-size: 2rem;
  color: #264de4;
  ${mobile({ "font-size": "2rem " })}
`;
const JS = styled(FaJsSquare)`
  font-size: 2rem;
  color: #f7df1e;
  ${mobile({ "font-size": "2rem " })}
`;
const JQUERY = styled(SiJquery)`
  font-size: 2rem;
  color: #0868ac;
  ${mobile({ "font-size": "2rem " })}
`;
const ELECTRON = styled(SiElectron)`
  font-size: 2rem;
  color: #0868ac;
  ${mobile({ "font-size": "2rem " })}
`;
const SASS = styled(FaSass)`
  font-size: 2rem;
  color: #cd6799;
  ${mobile({ "font-size": "2rem " })}
`;
const REACT = styled(FaReact)`
  font-size: 2rem;
  color: #61dbfb;
  ${mobile({ "font-size": "2rem " })}
`;
const REDUX = styled(SiRedux)`
  font-size: 2rem;
  color: #764abc;
  ${mobile({ "font-size": "2rem " })}
`;
const NODE = styled(FaNodeJs)`
  font-size: 2rem;
  color: #3c873a;
  ${mobile({ "font-size": "2rem " })}
`;
const EXPRESS = styled(SiExpress)`
  font-size: 2rem;
  ${mobile({ "font-size": "2rem " })}
`;
const SQL = styled(SiMysql)`
  font-size: 2rem;
  color: #00758f;
  ${mobile({ "font-size": "2rem " })}
`;
const NPM = styled(FaNpm)`
  font-size: 2rem;
  color: #cc3534;
  ${mobile({ "font-size": "2rem " })}
`;
const GIT = styled(FaGitAlt)`
  font-size: 2rem;
  color: #f34f29;
  ${mobile({ "font-size": "2rem " })}
`;
const JIRA = styled(SiJira)`
  font-size: 2rem;
  color: #0052cc;
  ${mobile({ "font-size": "2rem " })}
`;
const CONFLUENCE = styled(FaConfluence)`
  font-size: 2rem;
  color: #0052cc;
  ${mobile({ "font-size": "2rem " })}
`;
const CYPRESS = styled(SiCypress)`
  font-size: 2rem;
  color: grey;
  ${mobile({ "font-size": "2rem " })}
`;
const JENKINS = styled(SiJenkins)`
  font-size: 2rem;
  color: white;
  ${mobile({ "font-size": "2rem " })}
`;
const DOCKER = styled(SiDocker)`
  font-size: 2rem;
  color: #0db7ed;
  ${mobile({ "font-size": "2rem " })}
`;
const PHP = styled(SiPhp)`
  font-size: 2rem;
  color: #8892bf;
  ${mobile({ "font-size": "2rem " })}
`;
const LARAVEL = styled(FaLaravel)`
  font-size: 2rem;
  color: #f1502f;
  ${mobile({ "font-size": "2rem " })}
`;
const JEST = styled(SiJest)`
  font-size: 2rem;
  color: #c63d14;
  ${mobile({ "font-size": "2rem " })}
`;
const About = () => {
  return (
    <AboutPage>
      <Top>
        <Title>About Me</Title>
        <PageText>
          An Automation Engineer who is continuously striving to achieve
          excellence in all aspects technology.
        </PageText>
        <PageSubtitle>Competencies</PageSubtitle>
        <Skills>
          <Item>
            <HTML />
            <ItemTitle>HTML</ItemTitle>
          </Item>
          <Item>
            <CSS />
            <ItemTitle>CSS</ItemTitle>
          </Item>
          <Item>
            <SASS />
            <ItemTitle>SASS</ItemTitle>
          </Item>
          <Item>
            <JQUERY />
            <ItemTitle>Jquery</ItemTitle>
          </Item>
          <Item>
            <JS />
            <ItemTitle>Javascript</ItemTitle>
          </Item>
          <Item>
            <REACT />
            <ItemTitle>React</ItemTitle>
          </Item>
          <Item>
            <REDUX />
            <ItemTitle>Redux</ItemTitle>
          </Item>
          <Item>
            <ELECTRON />
            <ItemTitle>Electron</ItemTitle>
          </Item>
          <Item>
            <NODE />
            <ItemTitle>Node</ItemTitle>
          </Item>
          <Item>
            <EXPRESS />
            <ItemTitle>Express</ItemTitle>
          </Item>
          <Item>
            <PHP />
            <ItemTitle>PHP</ItemTitle>
          </Item>
          <Item>
            <LARAVEL />
            <ItemTitle>Laravel</ItemTitle>
          </Item>
          <Item>
            <DOCKER />
            <ItemTitle>Docker</ItemTitle>
          </Item>
          <Item>
            <SQL />
            <ItemTitle>MySQL</ItemTitle>
          </Item>
          <Item>
            <JENKINS />
            <ItemTitle>Jenkins</ItemTitle>
          </Item>
          <Item>
            <JEST />
            <ItemTitle>Jest</ItemTitle>
          </Item>
          <Item>
            <CYPRESS />
            <ItemTitle>Cypress</ItemTitle>
          </Item>
          <Item>
            <NPM />
            <ItemTitle>NPM</ItemTitle>
          </Item>
          <Item>
            <GIT />
            <ItemTitle>GIT</ItemTitle>
          </Item>
          <Item>
            <JIRA />
            <ItemTitle>Jira</ItemTitle>
          </Item>
          <Item>
            <CONFLUENCE />
            <ItemTitle>Confluence</ItemTitle>
          </Item>
        </Skills>
      </Top>
      <Bottom></Bottom>
    </AboutPage>
  );
};

export default About;
