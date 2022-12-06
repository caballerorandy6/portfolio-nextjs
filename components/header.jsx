import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";
import Footer from "./footer";
import TypewriterReact from "./typewriter";
import { motion } from "framer-motion";

const logoVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
};

const shadowVariants = {
  shadow: {
    textShadow: "0px 0px 5px rgb(220, 220, 0)",
  },
};

function Header() {
  const router = useRouter();
  //console.log(router);

  return (
    <nav className="flex flex-col justify items-center h-screen overflow-y-scroll w-2/12 bg-neutral-800">
      <div className="flex flex-col items-center mt-28">
        <Link href="/">
          <motion.div variants={logoVariants} whileHover="hover">
            <Image
              className="rounded-full"
              src="/img/logo.png"
              width={120}
              height={120}
              alt="logo image"
            />
          </motion.div>
        </Link>
        <motion.h1
          className="p-1 text-white text-2xl uppercase"
          variants={shadowVariants}
          initial="shadow"
        >
          Randy Caballero
        </motion.h1>
        <div className="mb-8">
          <TypewriterReact />
        </div>
      </div>

      <div className="flex flex-col w-full items-end">
        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className={`${
            router.pathname === "/" ? "text-white bg-black" : "text-slate-400"
          } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black p-3 rounded-l-full transition-colors  mb-3 duration-500`}
        >
          <Image
            src="/icons/home.png"
            width={20}
            height={20}
            alt="home image"
            priority
          />
          <Link href="/">Home</Link>
        </motion.div>

        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className={`${
            router.pathname === "/about"
              ? "text-white bg-black"
              : "text-slate-400"
          } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors duration-500 mb-3 `}
        >
          <Image
            src="/icons/about.png"
            width={20}
            height={20}
            alt="home image"
            priority
          />
          <Link href="/about">About Me</Link>
        </motion.div>

        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className={`${
            router.pathname === "/resume"
              ? "text-white bg-black"
              : "text-slate-400"
          } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors duration-500 mb-3 `}
        >
          <Image
            src="/icons/resume.png"
            width={20}
            height={20}
            alt="home image"
            priority
          />
          <Link href="/resume">Resume</Link>
        </motion.div>

        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className={`${
            router.pathname === "/portfolio"
              ? "text-white bg-black"
              : "text-slate-400"
          } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors duration-500 mb-3 `}
        >
          <Image
            src="/icons/portfolio.png"
            width={20}
            height={20}
            alt="home image"
            priority
          />
          <Link href="/portfolio">Portfolio</Link>
        </motion.div>

        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className={`${
            router.pathname === "/contact"
              ? "text-white bg-black"
              : "text-slate-400"
          } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors duration-500 mb-3 `}
        >
          <Image
            src="/icons/contact.png"
            width={20}
            height={20}
            alt="home image"
            priority
          />
          <Link href="/contact">Contact</Link>
        </motion.div>

        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className={`${
            router.pathname === "/appointments"
              ? "text-white bg-black"
              : "text-slate-400"
          } flex items-center gap-2 w-10/12 font-bold hover:text-white hover:bg-black  p-3 rounded-l-full transition-colors duration-500 mb-3 `}
        >
          <Image
            src="/icons/appointments.png"
            width={20}
            height={20}
            alt="home image"
            priority
          />
          <Link href="/appointments">Appointments</Link>
        </motion.div>
      </div>

      <Footer />
    </nav>
  );
}

export default Header;
