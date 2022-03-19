 import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%;       // responsividade 
    //max-width: 980px; // responsividade 
    border-bottom: 1px solid #1a2754;
    height: 3.5rem;
    flex-direction: row;

     a {
        text-transform: uppercase;
    } 

    span {
        //align-items: center;
    }
`
export const Div1 = styled.div`
    display: inline-flex;
    flex-direction: row;
    right: auto;
    @media(max-width: 700px) {
        display: none;
      }

`
export const Div2 = styled.div`
    display: inline-flex;
    flex-direction: row;
    position: absolute;
    left: 50%; // centraliza metade da tela porém somente o lado esquerdo
    transform: translateX(-50%); // para centralizar completamente
    
    
`
