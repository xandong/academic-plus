import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { options } from "../db/itensAluno";

import CardItem from "../components/CardItem";

export default function PageIndex() {
  const name = "Alexandre";
  return (
    <>
      <Head>
        <title>Academic Plus</title>
      </Head>
      <Header />
      <Main title={`Bem vindo de volta, ${name}!`}>
        <section>
          <ul className="flex sm:gap-10 gap-6 flex-wrap justify-center p-1">
            {options.map((e) => (
              <CardItem
                key={e.title}
                title={e.title}
                img={e.img}
                rote={e.rote}
                alt={e.alt}
              />
            ))}
          </ul>
        </section>
      </Main>
      <Footer />
    </>
  );
}
