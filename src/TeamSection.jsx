import styled from 'styled-components';
import { gravelCyclists } from './gravelCyclists';

const TeamSectionWrapper = styled.section`
  width: 100%;
  background: rgba(0,0,0,0.92);
  color: #fff;
  padding: 5rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamTitle = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 0.7rem;
`;

const TeamBlurb = styled.p`
  font-size: 1.15rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const MemberCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  background: rgba(38,38,38,1);
  border-radius: 18px;
  margin-bottom: 2.5rem;
  padding: 2.5rem 2rem;
  width: 90vw;
  max-width: 1200px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.18);
  text-align: left;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0.5rem;
  }
`;

const MemberAvatar = styled.img`
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 16px;
  background: #222;
  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
  }
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.3rem;
`;

const MemberMeta = styled.div`
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 0.7rem;
`;

const MemberFocus = styled.div`
  font-size: 1.05rem;
  color: #fcc400;
  margin-bottom: 0.7rem;
`;

const MemberBio = styled.p`
  font-size: 1.05rem;
  color: #e0e0e0;
`;

export default function TeamSection() {
  return (
    <TeamSectionWrapper id="team">
      <TeamTitle>Our Team</TeamTitle>
      <TeamBlurb>
        Meet the passionate cyclists and community builders who inspire and shape our journey. Each member brings a unique story, skillset, and spirit to our team—united by a love for gravel and adventure.
      </TeamBlurb>
      {gravelCyclists.map((member) => (
        <MemberCard key={member.name}>
          <MemberAvatar src={member.avatar} alt={member.name} />
          <MemberInfo>
            <MemberName>{member.name}</MemberName>
            <MemberMeta>{member.nationality} &mdash; {member.focus}</MemberMeta>
            <MemberFocus>{member.focus}</MemberFocus>
            <MemberBio>{member.bio}</MemberBio>
          </MemberInfo>
        </MemberCard>
      ))}
    </TeamSectionWrapper>
  );
}
