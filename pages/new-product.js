import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";

const Heading = styled.h1`
  color: red;
`;
export default function NewProduct() {
  return (
    <div>
      <Layout>
        <Heading>New Product</Heading>
      </Layout>
    </div>
  );
}
