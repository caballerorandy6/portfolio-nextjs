import Link from "next/link";
import Image from "next/legacy/image";

function Footer() {
  return (
    <>
      <nav className="flex relative gap-4  mt-4 mb-8">
        <Link href="https://github.com/caballerorandy6" target="_blank">
          <Image
            src="/social/github.png"
            width={25}
            height={25}
            alt="github image"
            priority
          />
        </Link>
        <Link href="https://linkedin.com/in/caballerorandy" target="_blank">
          <Image
            src="/social/linkedin.png"
            width={25}
            height={25}
            alt="github image"
            priority
          />
        </Link>
        <Link href="https://twitter.com/caballerorandy6" target="_blank">
          <Image
            src="/social/twitter.png"
            width={25}
            height={25}
            alt="github image"
            priority
          />
        </Link>
      </nav>
      <p className=" text-slate-400 text-center text-xs font-semibold">
        {`© ${new Date().getFullYear()}  All rights reserved.`}
      </p>
    </>
  );
}

export default Footer;
