import React, { useContext } from "react";
import Search from "../ui/Search";
import Navigation from "./Navigation";
import Link from "next/link";
import { FirebaseContext } from "../../firebase";

import SectionAuth, {
  SectionSearch,
  DisplayNameUserLogged,
  HeaderStyle,
  ContenedorHeader,
  Logo,
} from "../ui/styled/General";
import Button from "../ui/styled/Button";

export default function Header() {
  const { user, firebase } = useContext(FirebaseContext);

  return (
    <HeaderStyle>
      <ContenedorHeader>
        <SectionSearch>
          <Link href="/">
            <Logo>P</Logo>
          </Link>

          <Search />
          <Navigation />
        </SectionSearch>

        <SectionAuth>
          {user ? (
            <>
              <DisplayNameUserLogged>
                Hi: {user.displayName}
              </DisplayNameUserLogged>
              <Button bgColor="true" onClick={() => firebase.logout()}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button bgColor="true">Login</Button>
              </Link>
              <Link href="/account">
                <Button>Account create</Button>
              </Link>
            </>
          )}
        </SectionAuth>
      </ContenedorHeader>
    </HeaderStyle>
  );
}
