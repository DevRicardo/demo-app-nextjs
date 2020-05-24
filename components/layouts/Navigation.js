import { useContext } from "react";
import Nav from "../ui/styled/Navigation";
import Link from "next/link";
import { FirebaseContext } from "../../firebase";

export default function Navigation() {
  const { user } = useContext(FirebaseContext);
  return (
    <Nav>
      <Link href="/">Home</Link>
      <Link href="/trends">Popular</Link>
      {user && <Link href="/new-product">New Product</Link>}
    </Nav>
  );
}
