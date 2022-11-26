import Layout from "../components/layout";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

function Index() {
  const router = useRouter();
  //console.log(router);

  return (
    <Layout
      title={"Home"}
      description={"RC - Web, Randy Caballero, Portfolio, Home"}
    >
      <div className="flex flex-col place-content-center text-center mx-auto">
        <p className="text-white text-opacity-40 text-7xl">
          {"Hello, I'm Randy Caballero"}
        </p>
        <div className="text-center text-3xl text-gold  font-light mt-2">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("FullStack Developer")
                .changeDelay(150)
                .deleteAll()
                .typeString("HTML | CSS")
                .changeDelay(150)
                .deleteAll()
                .typeString("Javascript | React")
                .changeDelay(150)
                .deleteAll()
                .typeString("Postgres | Mongo")
                .changeDelay(150)
                .deleteAll()
                .typeString("Docker | AWS")
                .changeDelay(150)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-400 text-center font-semibold uppercase text-sm mt-10">
            Download my resume
          </label>
          <Link
            target="_blank"
            href="randycaballero.pdf"
            download="randycaballero.pdf"
            className="text-center p-2"
          >
            <Image
              src="/img/download.png"
              width={25}
              height={25}
              alt="download image"
              priority
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
