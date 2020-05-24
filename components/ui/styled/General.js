import styled from "@emotion/styled";

const SectionAuth = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const DisplayNameUserLogged = styled.p`
  margin-right: 2rem;
`;

export const HeaderStyle = styled.header`
  padding: 1rem 0;
  border-bottom: 2px solid var(--grey3);
`;
export const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.p`
  color: var(--orange);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Nunito", serif;
  margin-right: 2rem;
`;

export const TitleCenter = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
`;

export default SectionAuth;
