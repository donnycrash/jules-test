import styled from 'styled-components'

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  flex: 1;
`;

const HeroImage = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 2rem;
`;

const HeroText = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

export default function HeroSection() {
  return (
    <HeroWrapper>
      <HeroImage src="/jules-test/dassie.svg" alt="Dassie" />
      <HeroText>
        From bone-dry dust to surprise creek crossings, our wax keeps your chain smooth, silent, and fast.
        Tested on rugged trails and made for riders who don’t turn back when the path gets rough.
      </HeroText>
    </HeroWrapper>
  )
}
