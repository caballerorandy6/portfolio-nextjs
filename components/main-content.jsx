import Image from "next/legacy/image";

function MainContent() {
  return (
    <div className="fixed -z-10 w-full  h-full bg-img">
      <Image
        className="w-full h-full object-cover mix-blend-overlay"
        src="/img/background.JPG"
        alt="backgrund img"
        layout="fill"
        priority
      />
    </div>
  );
}

export default MainContent;
