import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/product-page/Header';
import StyleAdvice from '../components/style-advice/content-page/StyleAdvice';

export default function ProductPage() {
  return (
    <div>
      <Head>
        <title>Product Page Description</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className="content container">
        <StyleAdvice></StyleAdvice>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}