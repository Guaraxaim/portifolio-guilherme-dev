import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
html,
body {
  font-family: 'Montserrat', sans-serif;
  background: #11172b;
  height: 100vh; // resposividade
}

a {
  color: #38e8d6;
  text-decoration: none; 
  padding: 10x;
  margin: 10px 40px;
  align-items: center;
} 
h1 {
  font-size: 4rem;
  color: #38e8d6;
}

h2 { 
    color: #38e8d6;
    font-size: xx-large;
    font-family: 'Montserrat', sans-serif;
    
}

h3 {
  font-size: 2rem;
  color: #c1f2eb;
}
span {
  padding: 10px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  max-width: 1040px;
  margin: 0 auto;     
 }

 
p {
  display: inline;
  color: #c1f2eb;
} 

img {
  max-width: 100%;
  display: inline;
}

button {
  cursor: pointer;
}

.container {
  width: 100%;
  margin: 0 auto;
  max-width: 85rem; // 1rem =16px
  padding: 01 rem;
  @media(max-width: 1450px) {
    max-width: 70rem;
  }
  @media(max-width: 1000px){
    max-width: 50rem;
  }
  @media(max-width: 700px) {
    padding: 0 2rem;
  }
}

`
export default GlobalStyles; 