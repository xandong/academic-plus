import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Profile() {
  return (
    <>
      <Head>
        <title>A+: Perfil 💁</title>
      </Head>
      <Header />
      <Main title="Alexandre Gurgel">
        <div className="container">
          <p>
            The
            <abbr title="Web Hypertext Application Technology Working Group">
              WHATWG
            </abbr>
            started working on HTML5 in 2004.
          </p>
        </div>
        <div className="container"></div>
      </Main>
      <Footer />
    </>
  );
}
