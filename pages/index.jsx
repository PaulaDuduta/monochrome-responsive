import Head from 'next/head';
import Header from '../components/Header';
import ContentBanner from '../components/homepage/ContentBanner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className="content">
        <header className="content-banner-main d-block d-lg-none">
          <ContentBanner></ContentBanner>
        </header>

        <section className="content-main"></section>
      </main>
    </div>
  );
}
