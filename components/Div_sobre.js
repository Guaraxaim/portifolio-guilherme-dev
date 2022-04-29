import styled  from "styled-components";

export const Div_sobre = styled.body`
  font-family: 'Montserrat', sans-serif;
  background: #11172b;
  @media(max-width: 700px) {
    margin: 5px;
  }
  @media(max-width: 1000px){
   margin: 5px;
  }
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  margin: 0 auto; 
  }

  a {
  color: #38e8d6;
  text-decoration: none; 
  padding: 10x;
  margin: 10px 40px;
  align-items: center;
}
  h1 {
  font-size: 3rem;
  color: #38e8d6;
}

h2 { 
    color: #38e8d6;
    font-size: xx-large;
    font-family: 'Montserrat', sans-serif;
    max-width: 1040px;
}
p {
  display: inline;
  color: #c1f2eb;
} 


 `