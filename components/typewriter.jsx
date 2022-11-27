import Typewriter from "typewriter-effect";

function TypewriterReact() {
  return (
    <div className="text-gold normal-case text-sm text-center">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Fullstack Developer")
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
  );
}

export default TypewriterReact;
