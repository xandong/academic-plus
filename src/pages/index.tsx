import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PageIndex() {
  return (
    <>
      <Head>
        <title>Academic Plus</title>
      </Head>
      <Header />
      <main className="h-[200vh] bg-zinc-700 text-zinc-50">
        <h1>Academic Plus</h1>
      </main>
      <Footer />
    </>
  );
}
