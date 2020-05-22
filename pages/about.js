import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';

const Heading = styled.h1`
    color: red;
`
export default function About() {
    return (
        <div>
            <Layout>
                <Heading>Acerca de nosotros</Heading>
            </Layout>

        </div>
    )
}
