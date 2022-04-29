import Head from 'next/head';
import Header from '../components/1_Header/Header';
import GlobalStyles from '../components/GlobalStyles';
import Sobre from '../components/2_Sobre/Sobre';
import Projetos from '../components/3_Projetos/Projetos';
import Tecnologias from '../components/4_Tecnologias/Tecnologias';
import Footer from '../components/5_Footer/Footer';

export default function sobre() {
    return (
        <Div_sobre>
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
                <h1>Sobre mim</h1>
                <p>Sou desenvolvedor web apaixonado por tecnologias
                    front-end e backend.
                    Tenho experiência na construção de sites Wordpress,
                    aplicação de técnicas de SEO, analise de dados no
                    Google Analitics e campanhas no Google Ads.
                </p>


        </Div_sobre>
    )
}