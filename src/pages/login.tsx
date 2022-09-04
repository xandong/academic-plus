import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";
import { LockSimple, User } from "phosphor-react";

import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidInputs, setIsValidInputs] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  let inputEmail, inputPassword, inputsIsValid;
  if (isBrowser()) {
    inputEmail = document
      .querySelector("#email")
      ?.classList.contains("border-success-hover");

    inputPassword = document
      .querySelector("#password")
      ?.classList.contains("border-success-hover");

    let aux = inputEmail || inputPassword ? true : false;

    setIsValidInputs(aux);
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
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
          to-cyan-500 text-zinc-900
          relative"
        >
          <form
            onSubmit={handleSubmit}
            autoComplete="on"
            id="form"
            className="flex-1 flex flex-col gap-6 h-fit sm:p-12 py-12 px-8 w-full 
            bg-white
            sm:w-[420px]
            sm:flex-none
            sm:my-10  
            sm:border-b-8 sm:border-r-4 sm:rounded-2xl sm:shadow-2xl"
          >
            <h1 className="text-5xl font-semibold text-primary-500 text-center">
              Login
            </h1>

            <Input
              key="email"
              id="email"
              type="email"
              label="Email"
              Icon={<User />}
              value={email}
              setValue={setEmail}
            />

            <Input
              key="password"
              id="password"
              type="password"
              label="Senha"
              Icon={<LockSimple />}
              value={password}
              setValue={setPassword}
            />

            <small className="-mt-4 mb-4 text-left text-sm font-medium text-primary-500">
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

            {/* <fieldset className="flex gap-2 justify-end items-center">
              <input type="checkbox" name="" id="checkbox" />
              <label htmlFor="checkbox">Mantenha conectado</label>
            </fieldset> */}

            <Button text="Entrar" type="submit" disabled={inputsIsValid} />
          </form>
        </main>
      </div>
    </>
  );
}
