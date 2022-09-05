import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function PageIndex() {
  const name = "Alexandre";
  return (
    <>
      <Head>
        <title>Academic Plus</title>
      </Head>
      <Header />
      <Main title={name}>
        <section>
          <ul>
            <li>Ola</li>
            <li>Ola</li>
            <li>Ola</li>
          </ul>
        </section>
      </Main>
      <Footer />
    </>
  );
}
