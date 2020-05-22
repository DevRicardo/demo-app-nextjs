import Search from '../ui/Search';
import Navigation from "./Navigation";
import Link from 'next/link';


import SectionAuth, 
{
    SectionSearch,
    DisplayNameUserLogged,
    HeaderStyle,
    ContenedorHeader,
    Logo
} 
from '../ui/styled/General';
import Button from '../ui/styled/Button';



export default function Header() {

    const user = true;

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
                            <DisplayNameUserLogged>Hi: Jose</DisplayNameUserLogged>
                            <Button bgColor="true" >Logout</Button>
                        </>
                    ):(
                        <>
                            <Link href="/">
                                <Button 
                                bgColor='true'
                                >Login</Button>
                            </Link>
                            <Link href="/">
                                <Button>Account create</Button>
                            </Link>
                        </>
                    )}  

                </SectionAuth>

            </ContenedorHeader>
        </HeaderStyle>
    )
}
