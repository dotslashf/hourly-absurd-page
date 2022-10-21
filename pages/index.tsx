import type { NextPage } from "next";
import Head from "next/head";
import Cards from "../components/Cards";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hourly Absurd</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto my-8 px-4 md:px-8">
        <Cards />
      </div>
    </>
  );
};

export default Home;
