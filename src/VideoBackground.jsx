import styled from 'styled-components'

const VideoBackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;

  @media (max-width: 900px) {
    height: 100svh;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%);
  z-index: 1;

  @media (max-width: 900px) {
    height: 100svh;
  }
`;

const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  @media (max-width: 900px) {
    height: 100svh;
  }
`;

export default function VideoBackground() {
  return (
    <VideoBackgroundWrapper>
      <StyledVideo autoPlay loop muted playsInline>
        <source src="/jules-test/0617.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
      <GradientOverlay />
    </VideoBackgroundWrapper>
  )
}
