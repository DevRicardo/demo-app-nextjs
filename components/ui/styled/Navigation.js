import styled from "@emotion/styled";

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--grey2);
    font-family: "Nunito", serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default Nav;
