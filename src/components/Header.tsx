import Logo from "./Logo";
import { MoonStars, Sun, User } from "phosphor-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [themeDark, setThemeDark] = useState(false);
  const [user, setUser] = useState("Alexandre");
  const [toggleMenuUser, setToggleMenuUser] = useState(false);

  function Disconnected() {
    setUser("");
    console.log("Desconectado");
  }

  return (
    <header className="flex justify-center items-center relative p-6 shadow">
      <Logo />
      <div className="absolute right-8 flex items-center gap-8 text-[#007FFE]">
        <button
          onClick={() => setThemeDark(!themeDark)}
          className="p-1 bg-zinc-100 rounded-full hover:scale-[1.2] transition-all shadow hover:shadow-md"
        >
          {themeDark ? <Sun size={24} /> : <MoonStars size={24} />}
        </button>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setToggleMenuUser(!toggleMenuUser)}
              className="p-1 bg-zinc-100 rounded-full shadow hover:shadow-md"
            >
              <div className="hover:scale-[1.2] transition-all">
                {/*{ user.photo ? <img src={user.photo}> :  }*/}
                <User size={28} />
              </div>
            </button>
            {toggleMenuUser ? (
              <ul className="absolute top-12 right-0 flex flex-col gap-4 items-center rounded p-4 bg-zinc-50 border border-zinc-200 scale-100">
                <li className="px-4 flex-1 hover:shadow-[#007FFE]">
                  <Link href="/">
                    <a>Perfil</a>
                  </Link>
                </li>
                <li className="flex-1 border">
                  <Link href="/">
                    <a>Configurações</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <button onClick={() => Disconnected()}>Sair</button>
                    </a>
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Link href="/login">
            <a>Entrar</a>
          </Link>
        )}
      </div>
    </header>
  );
}
