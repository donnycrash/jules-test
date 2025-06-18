import './App.css';
import styled from 'styled-components';
import Header from './Header';
import VideoBackground from './VideoBackground';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <>
      <Header />
      <VideoBackground />
      <ContentWrapper>
        <HeroSection />
        <AboutSection />
      </ContentWrapper>
    </>
  )
}

export default App
