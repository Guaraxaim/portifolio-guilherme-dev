import styled from 'styled-components';

export const StyledHero = styled.section`
    margin: 0 auto;
    max-width: 1040px;
    box-sizing: content-box;
    //position: relative;
    grid-template-columns: 1fr 1fr;
    font-family: 'Montserrat', sans-serif;
    color: #38e8d6;
    
    img {
        width: 20rem;
        flex: 1 ;
        margin: 10px;
        display : inline
    }

    h3 {
        font-size: large;
        padding-left: 1rem;
    }
`

