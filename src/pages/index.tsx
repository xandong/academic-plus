import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function PageIndex() {
  return (
    <>
      <Head>
        <title>Academic Plus</title>
      </Head>
      <Header />
      <Main>
        <h1>Academic Plus</h1>
      </Main>
      <Footer />
    </>
  );
}
