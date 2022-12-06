import Layout from "../components/layout";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.8 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const firstContentVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
  exit: {
    x: "100vw",
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
};

const secondVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: 0.5,
      duration: 1.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      delay: 0.3,
      duration: 0.3,
    },
  },
};

function About() {
  return (
    <Layout
      title={"About"}
      description={"RC - Web, Randy Caballero, Portfolio, About"}
    >
      <div className="w-10/12 h-screen overflow-y-scroll">
        <div className="flex flex-col ">
          <motion.div
            className="w-full"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          >
            <div className="flex flex-col ">
              <h1 className="text-white text-center text-3xl font-bold uppercase mb-2 pt-20">
                About Me
              </h1>
              <p className="text-opacity-50 text-white text-center text-md mb-4 uppercase">
                Relevant personal information
              </p>
              <div className="w-16 content-none mx-auto h-2 bg-blue-300"></div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center"
            variants={firstContentVariants}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          >
            <div className="flex flex-col w-8/12 ml-16 mt-20 ">
              <h2 className="text-white text-xl font-bold p-2">
                Randy Caballero
              </h2>
              <div className="flex">
                <Image
                  src="/icons/location.png"
                  width={20}
                  height={20}
                  alt="location image"
                  priority
                />
                <p className="text-opacity-50 text-white text-sm ml-1">
                  United States, America
                </p>
              </div>
              <p className="w-10/12 text-opacity-50 text-white p-2">
                Hello, my name is Randy Caballero and I am a Web Developer. I am
                a professional committed to my profession and a lover of
                technology, specifically programming. My passion for the study
                and research of new technologies, enhance my growth and feed my
                range of new skills.
              </p>
              <div className="flex gap-28 mt-14">
                <div className="flex gap-2">
                  <Image
                    src="/icons/briefcase.png"
                    width={50}
                    height={50}
                    alt="coffee image"
                    priority
                  />
                  <div>
                    <p className="text-white font-bold">5 Year+ Job</p>
                    <p className="text-opacity-50 text-white text-sm">
                      Experience
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/icons/projects.png"
                    width={50}
                    height={50}
                    alt="coffee image"
                    priority
                  />
                  <div>
                    <p className="text-white font-bold">20+ Projects</p>
                    <p className="text-opacity-50 text-white text-sm">
                      Completed
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/icons/coffee.png"
                    width={50}
                    height={50}
                    alt="coffee image"
                    priority
                  />
                  <div>
                    <p className="text-white font-bold">50+ Meetings</p>
                    <p className="text-opacity-50 text-white text-sm">
                      Successful
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="w-11/12 mt-20 bg-neutral-900 p-10 shadow-md mx-auto mb-8 bg-opacity-70"
          variants={secondVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className=" text-center">
            <h1 className="text-3xl text-white mb-4">My Skills</h1>
            <div className="w-16 content-none mx-auto h-2 bg-blue-300"></div>
            <div className="flex gap-4 justify-center mt-10">
              <Image
                src="/skills/html.png"
                width={50}
                height={50}
                alt="html image"
                priority
              />
              <Image
                src="/skills/css.png"
                width={50}
                height={50}
                alt="css image"
                priority
              />
              <Image
                src="/skills/sass.png"
                width={50}
                height={50}
                alt="sass image"
                priority
              />
              <Image
                src="/skills/tailwind.png"
                width={50}
                height={50}
                alt="tailwind image"
                priority
              />
              <Image
                src="/skills/javascript.png"
                width={50}
                height={50}
                alt="javascript image"
                priority
              />
              <Image
                src="/skills/react.png"
                width={50}
                height={50}
                alt="react image"
                priority
              />
              <Image
                src="/skills/sql.png"
                width={50}
                height={50}
                alt="sql image"
                priority
              />
              <Image
                src="/skills/mysql.png"
                width={50}
                height={50}
                alt="mysql image"
                priority
              />
              <Image
                src="/skills/postgre.png"
                width={50}
                height={50}
                alt="postgre image"
                priority
              />
              <Image
                src="/skills/mongo.png"
                width={50}
                height={50}
                alt="mongo image"
                priority
              />
              <Image
                src="/skills/html.png"
                width={50}
                height={50}
                alt="html image"
                priority
              />
              <Image
                src="/skills/java.png"
                width={50}
                height={50}
                alt="java image"
                priority
              />
              <Image
                src="/skills/docker.png"
                width={50}
                height={50}
                alt="docker image"
                priority
              />
              <Image
                src="/skills/aws.png"
                width={50}
                height={50}
                alt="aws image"
                priority
              />
            </div>
          </div>
          <div className="mt-14">
            <p className="text-3xl text-opacity-80 text-white  mb-2">
              What actually I Do
            </p>
            <p className="text-3xl text-white">My Services</p>
            <div className="flex gap-2">
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/img/code-laptop.png"
                  width={130}
                  height={130}
                  alt="laptop image"
                  priority
                />
                <div>
                  <h1 className="text-opacity-80 text-white text-lg font-bold">
                    Web Development
                  </h1>
                  <p className="text-opacity-50 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ullamcorper tortor ac neque placerat, vel vestibulum
                    ligula suscipit. Donec pharetra sollicitudin ultrices.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/img/web-design.png"
                  width={130}
                  height={130}
                  alt="laptop image"
                  priority
                />
                <div>
                  <h1 className="text-opacity-80 text-white text-lg font-bold">
                    Web Design
                  </h1>
                  <p className="text-opacity-50 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ullamcorper tortor ac neque placerat, vel vestibulum
                    ligula suscipit. Donec pharetra sollicitudin ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export default About;
