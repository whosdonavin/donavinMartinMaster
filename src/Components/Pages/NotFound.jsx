import styled from "styled-components";
import { Link } from "react-router-dom";
const Page = styled.section``;
const Message = styled.p`
  font-size: 1.5rem;
`;
const Home = styled(Link)`
  color: white;
  border-bottom: 1px solid white;
  &:hover {
    color: #bc9359;
  }
`;

const NotFound = () => {
  return (
    <Page>
      <Message>
        Looks like you are lost, let's get you back <Home to="/">home</Home>.
      </Message>
    </Page>
  );
};

export default NotFound;
