import { MoonStars, Sun, TextAlignJustify, User } from "phosphor-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import logoPNG from "../../public/logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const hour = new Date().getHours();

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [user, setUser] = useState("Alexandre");
  const [toggleMenuUser, setToggleMenuUser] = useState(false);

  useEffect(() => {
    function checkHour() {
      if (theme === "system") {
        if (hour >= 18 && hour <= 6) {
          localStorage.setItem("theme", "dark");
          return setTheme("dark");
        } else {
          localStorage.setItem("theme", "light");
          return setTheme("light");
        }
      }
    }
    checkHour();

    setMounted(true);
  }, [setTheme, theme]);

  if (!mounted) return null;

  function isDark() {
    if (theme) return theme === "dark";
  }

  function disconnected() {
    setUser("");
    console.log("Desconectado");
  }

  return (
    <header
      className="flex justify-between sm:justify-center items-center p-4 shadow border-b-2
    bg-white dark:bg-black border-zinc-100 dark:border-zinc-700 z-10 relative"
    >
      <Image src={logoPNG} alt="Academic Plus" />

      <div className="relative sm:absolute right-0 sm:right-8 flex items-center md:gap-8 sm:gap-4 gap-2 sm:pl-0 pl-2 text-primary-500 dark:text-primary-200">
        <button
          onClick={() => setTheme(isDark() ? "light" : "dark")}
          className="p-1 bg-zinc-100 dark:bg-zinc-700 shadow rounded-full hover:scale-110 hover:shadow-md
          focus:scale-110 transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={24} /> : <MoonStars size={24} />}
        </button>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setToggleMenuUser(!toggleMenuUser)}
              className="p-1 bg-zinc-100 dark:bg-zinc-700 shadow rounded-full hover:scale-110 hover:shadow-md
              focus:scale-110 transition-colors"
            >
              <div className="hover:scale-110 transition-all">
                <User size={28} />
              </div>
            </button>
            {toggleMenuUser ? (
              <ul className="absolute top-12 right-0 flex flex-col gap-4 items-center rounded p-4 bg-zinc-50 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 scale-100">
                <li className="hover:border-b hover:-mb-px">
                  <Link href="/">
                    <a>Perfil</a>
                  </Link>
                </li>
                <li className="flex-1">
                  <Link href="/">
                    <a>Configurações</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <button onClick={() => disconnected()}>Sair</button>
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
