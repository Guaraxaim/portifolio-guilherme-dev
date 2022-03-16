import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Div1 } from "../1_Header/StyledHeader";
import Link from 'next/link';

const Footer = () => (
     
    <>
     <h2>Vamos trabalhar juntos?</h2>
     <p>Entre em contato comigo, será um grande prazer marcarmos um conversa.</p>
     <div style={{textAlign: "center", margin: "auto"}}> 
     <Link href="https://github.com/Guaraxaim" style={{margin: "10px 40px"}}>
    <a style={{display: "inline-flex", alignItems: "center"}}><AiFillGithub size="1.5rem" color="#38e8d6"/> </a>
    </Link>
    <Link href="https://www.linkedin.com/in/guilherme-souza-santos/">
    <a style={{display: "inline-flex", alignItems: "center"}}><AiFillLinkedin size="1.5rem" color="#38e8d6"/> </a>
    </Link>
    <br/>
    </div>
     </>
 ) 

 export default Footer;

// <div className="">  -  centralizar simbolos