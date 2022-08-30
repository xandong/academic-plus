import Head from "next/head";
import Header from "../components/Header";

export default function PageIndex() {
  return (
    <div>
      <Head>
        <title>Academic Plus</title>
      </Head>
      <Header />
      <h1>Academic Plus</h1>
    </div>
  );
}
