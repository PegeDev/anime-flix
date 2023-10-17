import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mb-8 p-4">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center  justify-center md:divide-x-2">
          <div className="flex items-center justify-center gap-2 text-white px-4 ">
            <p className="whitespace-nowrap">Powered by</p>
            <a className="text-semibold underline" href={"https://jikan.moe/"}>
              JikanAPI
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white px-4 ">
            <p className="whitespace-nowrap">Designed by</p>
            <a className="text-semibold underline" href={"https://jikan.moe/"}>
              Pega
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
