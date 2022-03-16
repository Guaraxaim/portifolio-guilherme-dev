import styled from "styled-components";

export const StyledProjects = styled.section`
    width: 100%;
    display: flex;
    height: 25rem;
    align-items: flex-end;
    position: relative;
    grid-template-columns: 1fr 1fr;
    box-sizing: content-box;

    >section {
        width: 50rem; // 50rem
        height: 100%;
    }

    h2 { 
        color: #38e8d6;
        font-size: xx-large;
        font-family: 'Montserrat', sans-serif;
        max-width: 1040px;
        margin: 0 auto;
        }
`