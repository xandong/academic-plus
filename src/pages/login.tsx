import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";

import digital from "../../public/DigitalAndPerson.png";
import Image from "next/image";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isMinScreen = false;

  function handleSubmit() {
    return console.log("Enviado");
  }

  return (
    <>
      <Head>
        <title>Entre no A+ 📘</title>
      </Head>
      <Header />
      <main className="py-10 md:px-40 sm:px-8 flex justify-center sm:justify-end sm:flex-row flex-col items-center gap-10 bg-white relative">
        {isMinScreen ? (
          <div className="">
            <Image
              className="bg-cover"
              src={digital}
              height="400px"
              layout="intrinsic"
              alt="Uma digital e uma pessoa"
            />
          </div>
        ) : (
          ""
        )}

        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          id="form"
          className="max-w-full flex flex-col gap-6 h-fit sm:p-12 py-12 px-8 flex-1 sm:flex-initial  bg-white sm:border-b-4 sm:border-r-4 border-primary-500 sm:rounded-2xl sm:shadow-xl"
        >
          <h1 className="text-5xl font-semibold text-primary-500 text-center">
            Login
          </h1>

          <Input
            key="email"
            type="email"
            label="Email"
            value={email}
            setValue={setEmail}
          />
          <Input
            key="password"
            type="password"
            label="Senha"
            value={password}
            setValue={setPassword}
          />

          <Button text="Entrar" type="submit" />

          <small className="text-right text-sm font-medium text-primary-500">
            Esqueceu a senha?
            <Link href="/">
              <a
                className="hover:text-primary-600 focus:outline-none
              focus:text-primary-600  transition    
              focus:border-b-2
              focus:border-b-primary-600"
              >
                {" "}
                Clique aqui
              </a>
            </Link>
          </small>
        </form>
      </main>
    </>
  );
}
