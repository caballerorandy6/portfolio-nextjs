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
      </div>
    </Layout>
  );
}

export default Index;
