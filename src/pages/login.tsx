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
      <div className="min-w-screen min-h-screen flex flex-col">
        <Header />
        <main
          className="flex-1 md:px-40 flex 
          flex-col
          justify-center items-center
          

          bg-gradient-to-r from-blue-500
          to-cyan-500 
          relative"
        >
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
            className="flex-1 flex flex-col gap-6 h-fit sm:p-12 py-12 px-8 w-full 
            bg-white
            sm:w-[420px]
            sm:flex-none
            sm:my-10  
            sm:border-b-8 sm:border-r-4 sm:rounded-2xl sm:shadow-xl"
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
            <fieldset className="flex gap-1 justify-end items-center">
              <input type="checkbox" name="" id="checkbox" />
              <label htmlFor="checkbox">Mantenha conectado</label>
            </fieldset>
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
      </div>
    </>
  );
}
