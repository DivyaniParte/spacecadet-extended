import Markdown from "react-markdown";
import Button from "../Button";
import Content from "./Content";

function GetStarted({ content }: { content: any }) {
  return (
    <div className="text-center relative border-t border-violet-500 py-48 overflow-hidden bg-gradient-radial to-transparent via-black/75 from-black/75 px-10 lg:px-24">
      <div
        className="blur-lg bg-gradient-to-b from-lime-700/50 to-transparent w-48 lg:w-96 h-72 absolute top-0 left-1/2 -ml-24 lg:-ml-48 z-10 -mt-20 "
        style={{ transform: `perspective(10px) rotateX(2deg)` }}
      ></div>
      <div
        className="blur-lg bg-gradient-to-b from-lime-500/50 to-transparent w-24 lg:w-48 h-64 absolute top-0 left-1/2 -ml-12 lg:-ml-24 z-10 -mt-20"
        style={{ transform: `perspective(10px) rotateX(3deg) ` }}
      ></div>

      <Content
        content={content}
        className="flex flex-col items-center "
      ></Content>
      <div className="mt-16">
        <Button link="/planner" label={content.plan} type="primary"></Button>
      </div>
    </div>
  );
}

export default GetStarted;
