import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";
import Footer from "./footer";
import TypewriterReact from "./typewriter";
import { motion } from "framer-motion";

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
              width={100}
              height={100}
              alt="logo image"
            />
          </Link>
          <TypewriterReact />
        </div>

        <div className="flex flex-col w-full items-end">
          <div
            className={`${
              router.pathname === "/" ? "text-white bg-black" : "text-slate-400"
            } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            <Image
              src="/icons/home.png"
              width={20}
              height={20}
              alt="home image"
              priority
            />
            <Link href="/">Home</Link>
          </div>

          <div
            className={`${
              router.pathname === "/about"
                ? "text-white bg-black"
                : "text-slate-400"
            } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            <Image
              src="/icons/about.png"
              width={20}
              height={20}
              alt="home image"
              priority
            />
            <Link href="/about">About</Link>
          </div>

          <div
            className={`${
              router.pathname === "/resume"
                ? "text-white bg-black"
                : "text-slate-400"
            } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            <Image
              src="/icons/resume.png"
              width={20}
              height={20}
              alt="home image"
              priority
            />
            <Link href="/resume">Resume</Link>
          </div>

          <div
            className={`${
              router.pathname === "/portfolio"
                ? "text-white bg-black"
                : "text-slate-400"
            } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            <Image
              src="/icons/portfolio.png"
              width={20}
              height={20}
              alt="home image"
              priority
            />
            <Link href="/portfolio">Portfolio</Link>
          </div>

          <div
            className={`${
              router.pathname === "/contact"
                ? "text-white bg-black"
                : "text-slate-400"
            } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            <Image
              src="/icons/contact.png"
              width={20}
              height={20}
              alt="home image"
              priority
            />
            <Link href="/contact">Contact</Link>
          </div>

          <div
            className={`${
              router.pathname === "/appointments"
                ? "text-white bg-black"
                : "text-slate-400"
            } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors delay-150 mb-3 `}
          >
            <Image
              src="/icons/appointments.png"
              width={20}
              height={20}
              alt="home image"
              priority
            />
            <Link href="/appointments">Appointments</Link>
          </div>
        </div>

        <Footer />
      </nav>
    </>
  );
}

export default Header;
