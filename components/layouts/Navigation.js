import Nav from "../ui/styled/Navigation";
import Link from "next/link";

export default function Navigation() {
  return (
    <Nav>
      <Link href="/">Home</Link>
      <Link href="/">Popular</Link>
      <Link href="/">New Product</Link>
    </Nav>
  );
}
