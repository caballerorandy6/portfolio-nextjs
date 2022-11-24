import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";
import Footer from "./footer";
import TypewriterReact from "./typewriter";

function Header() {
  const router = useRouter();
  //console.log(router);

  return (
    <>
      <nav className="flex flex-col justify items-center h-screen w-2/12 bg-neutral-800">
        <div className="flex flex-col items-center mt-28">
          <Link href="/">
            <Image
              className="rounded-full"
              src="/img/logo.png"
              width={135}
              height={135}
              alt="logo image"
            />
          </Link>

          <TypewriterReact />
        </div>
        <div className="flex flex-col w-full items-end">
          <Link
            href="/"
            className={`${
              router.pathname === "/" ? "text-white bg-black" : "text-gray-300"
            } w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              router.pathname === "/about"
                ? "text-white bg-black"
                : "text-gray-300"
            } w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            About Me
          </Link>
          <Link
            href="/resume"
            className={`${
              router.pathname === "/resume"
                ? "text-white bg-black"
                : "text-gray-300"
            } w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            Resume
          </Link>
          <Link
            href="/portfolio"
            className={`${
              router.pathname === "/portfolio"
                ? "text-white bg-black"
                : "text-gray-300"
            } w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`${
              router.pathname === "/contact"
                ? "text-white bg-black"
                : "text-gray-300"
            } w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            Contact
          </Link>
          <Link
            href="/appointments"
            className={`${
              router.pathname === "/appointments"
                ? "text-white bg-black"
                : "text-gray-300"
            } w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            Appointments
          </Link>
        </div>
        <Footer />
      </nav>
    </>
  );
}

export default Header;
