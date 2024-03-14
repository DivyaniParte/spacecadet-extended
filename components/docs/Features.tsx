import Content from "./Content";

function Features({ content }: { content: any }) {
  console.log(content);
  return (
    <div className="bg-black px-10 py-24 lg:px-24 lg:py-48 ">
      {content &&
        content.map((feature: any, i: number) => {
          return (
            <Content
              content={feature}
              className={`flex flex-col mb-24 last:mb-0 even:text-right even:items-end`}
            />
          );
        })}
    </div>
  );
}

export default Features;
