import Link from 'next/link';
import { StyledHeader, Div1, Div2 }  from './StyledHeader';
import { BsLayersFill } from "react-icons/bs";

const Header = () => (
    <>
    <StyledHeader >
    <main className="container">
        <Div1> 
            
                <Link href="/">
                    <a style={{display: "flex", alignItems: "center"}}><BsLayersFill size="1.5rem" color="#38e8d6"/> <span>Portifólio</span></a>
                </Link>

        </Div1>

        <Div2>
                <Link href="/sobre">
                    <a style={{display: "flex", alignItems: "center"}}><span>Sobre</span></a>
                </Link>


                <Link href="/projetos">
                    <a style={{display: "flex", alignItems: "center"}}>Projetos</a>
                </Link>
            
        </Div2>
        </main>
    </StyledHeader>
    </>

)

export default Header;