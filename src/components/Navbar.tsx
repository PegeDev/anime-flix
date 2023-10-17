"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import SearchIcon from "../../public/icons/search.svg";
import MenuIcon from "../../public/icons/menu.svg";
import Button from "./Button";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const searchRef = useRef<any>(null);
  const router = useRouter();

  const handleSearch = (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const value = searchRef.current.value;
      router.push(`/search/${value}`);
    }
  };
  return (
    <>
      <nav className="w-full sticky top-0 backdrop-filter bg-primary/80 backdrop-blur-lg z-50">
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center p-4 justify-between">
            <a href="/">
              <span className="p-4 text-white font-bold text-4xl">
                AnimeFlix
              </span>
            </a>
            <div className="hidden md:flex">
              <ul className="flex justify-center items-center gap-2 ">
                <li
                  className={clsx(
                    "px-2 py-1 text-white",
                    pathname.includes("home") ? "font-semibold underline" : null
                  )}
                >
                  <a href="/">Home</a>
                </li>
                <li
                  className={clsx(
                    "px-2 py-1 text-white",
                    pathname.includes("anime")
                      ? "font-semibold underline"
                      : null
                  )}
                >
                  <a href="/top/anime">Anime</a>
                </li>
                <li
                  className={clsx(
                    "px-2 py-1 text-white",
                    pathname.includes("manga")
                      ? "font-semibold underline"
                      : null
                  )}
                >
                  <a href="/top/manga">Manga</a>
                </li>
              </ul>
            </div>
            <div className="hidden w-full max-w-[180px] rounded-lg md:flex items-center bg-white px-4">
              <span>
                <SearchIcon className="text-gray-400" width="20" height="20" />
              </span>
              <input
                ref={searchRef}
                type="text"
                placeholder="search"
                onKeyDown={handleSearch}
                className="px-2 py-1 text-sm bg-transparent w-full focus:outline-none"
              />
            </div>
            <button onClick={() => setMenu(!menu)} className="md:hidden p-4">
              <MenuIcon className="text-white" height="32" width="32" />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={clsx(
          "md:hidden fixed z-40 w-full  overflow-hidden transition-all ease-linear backdrop-filter bg-primary/80 backdrop-blur-lg",
          !menu ? "-top-56" : "top-24"
        )}
      >
        <div className="flex flex-col p-4 items-center justify-center">
          <ul className="flex flex-col justify-center items-center gap-2 mb-4">
            <li
              className={clsx(
                "px-2 py-1 text-white",
                pathname.includes("home") ? "font-semibold underline" : null
              )}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={clsx(
                "px-2 py-1 text-white",
                pathname.includes("anime") ? "font-semibold underline" : null
              )}
            >
              <a href="/top/anime">Anime</a>
            </li>
            <li
              className={clsx(
                "px-2 py-1 text-white",
                pathname.includes("manga") ? "font-semibold underline" : null
              )}
            >
              <a href="/top/manga">Manga</a>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <div className="w-full rounded-lg flex items-center bg-white px-4">
              <span>
                <SearchIcon className="text-gray-400" width="20" height="20" />
              </span>
              <input
                type="text"
                placeholder="search"
                onKeyDown={handleSearch}
                className="px-2 py-1 text-sm bg-transparent w-full focus:outline-none"
              />
            </div>
            <Button onClick={handleSearch} variant="regular" size="small">
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
