import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mobile } from "./Responsive";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import Information from "./Components/Information";
import Footer from "./Components/Footer";
import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import NotFound from "./Components/Pages/NotFound";

const Outline = styled.div`
  display: grid;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  grid-row-gap: 2rem;
  grid-template: auto 1fr auto / auto 1fr auto;
  ${mobile({ display: "flex", "flex-direction": "column", padding: "1rem" })};
`;
const Top = styled.div`
  padding: 1rem;
  grid-column: 1 / 4;
  border-radius: 5px;
`;

const Left = styled.div`
  padding: 1rem;
  grid-column: 1 / 2;
  margin-right: 2rem;
  border-radius: 5px;
  ${mobile({ display: "none" })};
`;
const Right = styled.div`
  padding: 2rem;
  grid-column: 2 / 3;
  border-radius: 5px;
  ${mobile({ padding: "1rem" })};
`;

function Layout() {
  return (
    <BrowserRouter>
      <Outline>
        <Top>
          <Information />
        </Top>
        <Left>
          <Navigation />
        </Left>
        <Right>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Right>
        <Footer />
      </Outline>
    </BrowserRouter>
  );
}

export default Layout;
