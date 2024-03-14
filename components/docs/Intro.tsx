import Content from "./Content";

async function Intro({ content }: { content: any }) {
  return (
    <div className=" text-center border-b border-violet-900 relative">
      <div className="bg-gradient-to-tr from-pink-950 via-violet-950 to-transparent absolute bottom-0 left-0 w-full h-full"></div>
      <div className="bg-gradient-to-tl from-pink-950 via-violet-950 to-transparent absolute bottom-0 right-0 w-full h-full"></div>
      <div className="bg-gradient-to-b from-black via-black to-transprent w-full h-full absolute "></div>
      <div className=" relative pt-48 lg:pt-72 2xl:pt-96 2xl:pb-72 pb-48 px-10 lg:px-24 bg-gradient-to-r from-transparent via-black to-transparent z-30 ">
        <Content
          titleTag="h1"
          content={content}
          className="flex flex-col justify-center items-center"
        />
      </div>
    </div>
  );
}

export default Intro;
