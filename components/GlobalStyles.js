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
  // padding: 10x;
  margin: 10px 40px;
  align-items: center;
}

span {
  padding: 10px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
 }



img {
  width: 100%;
  max-width: 100%;
}

ul {
  width: 100%;
  list-style: none;
  display: flex;
}

//@media (max-width: )
`
export default GlobalStyles; 