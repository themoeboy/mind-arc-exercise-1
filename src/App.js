import styled from 'styled-components';
import UpperContainer from './components/UpperContainer';
import LowerContainer from './components/LowerContainer';
import { useMediaQuery } from "react-responsive";


const Wrapper = styled.div``;
 
const MainContainer = styled.div`
  display:flex;
  height:100vh;
  width: 100vw;
  flex-direction: column;
`;


const App = () => {
 const isDesktop = useMediaQuery({
  query: "(min-width: 1224px)"
 })

 const renderDesktopView = () => {
  return (
    <MainContainer>
      <UpperContainer/>
      <LowerContainer/>
    </MainContainer>
  );
 }

 const renderMobileView = () => {
  return (
    <MainContainer>
      <UpperContainer view={"mobile"} />
      <LowerContainer view={"mobile"} />
    </MainContainer>
  );
 }
  return (
   <Wrapper>
      {isDesktop ? renderDesktopView() : renderMobileView()}
   </Wrapper>
  );
}

export default App;
