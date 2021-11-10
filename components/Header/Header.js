import Link from 'next/link';
import { StyledHeader, Div1, Div2 }  from './StyledHeader';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsLayersFill } from "react-icons/bs";

const Header = () => (

    <StyledHeader>

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
    </StyledHeader>


)

export default Header;