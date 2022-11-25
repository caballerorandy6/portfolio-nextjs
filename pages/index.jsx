import Layout from "../components/layout";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  console.log(router);

  return (
    <Layout>
      <div className="flex flex-col place-content-center mx-auto">
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
        <div className="flex text-center mt-14 ">
          <button
            onClick={() => {
              router.push("/contact");
            }}
            className="flex w-3/12 justify-center gap-2 mx-auto border-2 p-3 text-sm bg-gray-800 text-slate-400 font-bold rounded-full border-none shadow-md hover:bg-black hover-gold active:bg-gray-800 transition-colors "
            type="button"
          >
            <Image
              src="/icons/contact.png"
              width={20}
              height={20}
              alt="contact img"
            />
            Contact Me
          </button>

          <button
            onClick={() => {
              router.push("/resume");
            }}
            className="flex w-3/12 justify-center gap-2 mx-auto border-2 p-3  text-sm bg-gray-800 text-slate-400 font-bold rounded-full border-none shadow-md hover:bg-black hover-gold active:bg-gray-800 transition-colors"
            type="button"
          >
            <Image
              src="/icons/resume.png"
              width={20}
              height={20}
              alt="contact img"
            />
            My Resume
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
