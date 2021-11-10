import Head from 'next/head';
import Header from '../components/Header/Header';
import GlobalStyles  from '../components/GlobalStyles';
import Sobre from '../components/Sobre/Sobre';

export default function Home() {
  return (
    <div>
      <GlobalStyles/>  
        <Head>
          <title>Portifólio Guilherme</title>
          <meta charSet="utf-8" />
          <meta name='robots' content='index/folow' />
          <meta name="description" content="Site portifólio Guilherme" />
          <meta name="autor" content=" Guilherme Santos" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
        <Header />
        <Sobre />

    </div>
  )
}

// <Projetos /> 
// <Footer />
