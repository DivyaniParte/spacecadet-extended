import { ElementType, FC, HTMLAttributes } from "react";
import Markdown from "react-markdown";

interface ContentProps extends HTMLAttributes<HTMLElement> {
  titleTag?: ElementType;
  content?: any;
  className?: string;
}

const Content: FC<ContentProps> = ({
  titleTag: Tag = "h2",
  content,
  className,
}) => {
  return (
    <div className={className}>
      <Tag className={`text-3xl lg:text-6xl lg:w-3/5 2xl:w-1/3`}>
        <span className="text-xl lg:text-2xl block uppercase font-bold text-lime-500 tracking-widest mb-5 ">
          {content.subtitle}
        </span>
        {content.title}
      </Tag>
      <div className="mt-10 lg:w-3/5 2xl:w-1/3 leading-relaxed 2xl:leading-loose content">
        <Markdown>{content.content}</Markdown>
      </div>
    </div>
  );
};

export default Content;
