import styled from 'styled-components'

const AboutSectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: rgba(0,0,0,0.8);
  border-top: 5px solid #1b1b1b;
  color: #fff;
  scroll-margin-top: 100px;
  width: 100%;
  flex-direction: column;
`;

const AboutImage = styled.img`
  width: 260px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
`;

const AboutContent = styled.div`
  max-width: 500px;
  text-align: left;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
`;

const AboutSubtitle = styled.div`
  font-size: 0.8rem;
  color: #e0e0e0;
  margin-top: 0.7rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4rem;
`;

const AboutFounderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CorePrincipalsSection = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const CorePrincipalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  max-width: 1280px;
  width: 100%;
`;

const PrincipalCard = styled.div`
  background: rgba(38,38,38,1);
  border-radius: 12px;
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.2);
  color: #fff;
`;

const PrincipalIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PrincipalTitle = styled.h3`
  font-size: 1.15rem;
  margin-bottom: 0.7rem;
  font-weight: 600;
`;

const PrincipalText = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
`;

export default function AboutSection() {
  return (
    <>
      <AboutSectionWrapper id="about">
        <AboutFounderWrapper>
          <AboutImageWrapper>
            <AboutImage src="/jules-test/founder.png" alt="About" />
            <AboutSubtitle>Founder: DonnyCrash aka The Dassie</AboutSubtitle>
          </AboutImageWrapper>
          <AboutContent>
            <AboutTitle>About Us</AboutTitle>
            <AboutText>
              At DASSIE, we’re more than just a chain wax brand — we’re part of the ride. From the grit of long climbs to the calm after the chaos! DASSIE, represents resilience and adaptability—qualities we value in everything we do. Learn more about our journey and what drives us.
            </AboutText>
          </AboutContent>
        </AboutFounderWrapper>
        <CorePrincipalsSection>
          <CorePrincipalsGrid>
            <PrincipalCard>
              <PrincipalIcon>🌄</PrincipalIcon>
              <PrincipalTitle>Resilience</PrincipalTitle>
              <PrincipalText>Inspired by the dassie — small but tough — we believe performance thrives when conditions get rough. Our wax is engineered to endure what gravel throws at you: dust, distance, and the unexpected. We build for longevity, just like the rides that test your limits.</PrincipalText>
            </PrincipalCard>
            <PrincipalCard>
              <PrincipalIcon>🤝</PrincipalIcon>
              <PrincipalTitle>Community</PrincipalTitle>
              <PrincipalText>We ride better together. Whether it’s a sunrise solo spin or a dusty group grind, DASSIE is rooted in the shared love of adventure. We’re building a brand that grows with its riders — from seasoned racers to weekend wanderers.</PrincipalText>
            </PrincipalCard>
            <PrincipalCard>
              <PrincipalIcon>💡</PrincipalIcon>
              <PrincipalTitle>Innovation</PrincipalTitle>
              <PrincipalText>Chain wax isn’t just chemistry — it’s craft. We blend high-performance science with on-trail testing to create formulas that stay clean, fast, and resilient. We're always tinkering, tweaking, and testing — because marginal gains are made in the details.</PrincipalText>
            </PrincipalCard>
            <PrincipalCard>
              <PrincipalIcon>🌱</PrincipalIcon>
              <PrincipalTitle>Growth</PrincipalTitle>
              <PrincipalText>Like every ride that starts with a single pedal stroke, DASSIE is a journey. We’re here to evolve — with better products, deeper connections, and a bigger vision for what gravel riding can be.</PrincipalText>
            </PrincipalCard>
          </CorePrincipalsGrid>
        </CorePrincipalsSection>
      </AboutSectionWrapper>

    </>
  )
}
