import Typewriter from "typewriter-effect";

function TypewriterReact() {
  return (
    <h1 className="text-white text-md font-semibold uppercase p-4 mb-4">
      Randy Caballero
      <span className="text-gold normal-case text-sm text-center">
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
      </span>
    </h1>
  );
}

export default TypewriterReact;
