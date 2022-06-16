import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header text-info">
        HELLO AMIGOS
        <i className="fa-solid fa-phone"></i>
        <img src="/images/banners/banner.png" alt="" />
      </header>
    </div>
  );
}
