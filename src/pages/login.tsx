import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";

import digital from "../../public/DigitalAndPerson.png";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    return console.log("Enviado");
  }

  return (
    <>
      <Head>
        <title>Entre no A+ 📘</title>
      </Head>
      <Header />
      <main className="py-10 md:px-40 sm:px-8 flex justify-center sm:justify-end items-center gap-10 bg-white relative">
        <div className="">
          <Image src={digital} alt="Uma digital e uma pessoa" />
        </div>

        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          id="form"
          className="max-w-full flex flex-col gap-6 h-fit sm:p-12 py-12 px-8 flex-1 sm:flex-initial  bg-white sm:border-b-4 sm:border-r-4 border-primary-500 sm:rounded-2xl sm:shadow-xl"
        >
          <h1 className="text-5xl font-semibold text-primary-500 text-center">
            Login
          </h1>

          <fieldset className="flex flex-col">
            <label htmlFor="email" className="font-medium">
              Email
            </label>

            <input
              className="p-2 rounded bg-zinc-50 border-b-2 border-zinc-200 max-w-full"
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="email@mail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <span className="text-cancel-hover text-sm font-medium">Error</span>
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="password" className="font-medium">
              Senha
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded bg-zinc-50 border-b-2 border-zinc-200"
            />

            <span className="text-cancel-hover text-sm font-medium">Error</span>
          </fieldset>

          <button
            onClick={() => handleSubmit}
            className="px-6 py-2 bg-success-default hover:bg-success-hover text-white font-medium rounded transition-colors"
          >
            Entrar
          </button>
          <small className="text-right text-sm font-medium text-primary-500">
            Esqueceu a senha?
            <Link href="/">
              <a className="hover:text-primary-600"> Clique aqui</a>
            </Link>
          </small>
        </form>
      </main>
    </>
  );
}
