import Image from "next/legacy/image";

function MainContent() {
  return (
    <div className="w-10/12">
      <Image
        src="/img/background.webp"
        width={500}
        height={500}
        alt="background image"
      />
    </div>
  );
}

export default MainContent;
