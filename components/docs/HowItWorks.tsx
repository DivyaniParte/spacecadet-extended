import Content from "./Content";

function HowItWorks({ content }: { content: any }) {
  return (
    <div className="text-white relative overflow-hidden w-full px-10 lg:px-24 z-30  bg-black py-48 ">
      <Content content={content} />
      <div className="grid lg:grid-cols-3 relative z-20 leading-relaxed gap-20 text-base pt-10 lg:pt-20">
        <div className="">
          <h3 className="text-2xl block uppercase font-bold text-lime-500 tracking-widest ">
            {content.step} 1
          </h3>
          <p className="lg:mt-5">{content.steps[0]}</p>
        </div>
        <div className="">
          <h3 className="text-2xl block uppercase font-bold text-lime-500 tracking-widest ">
            {content.step} 2
          </h3>
          <p className="lg:mt-5">{content.steps[1]}</p>
        </div>
        <div className="">
          <h3 className="text-2xl block uppercase font-bold text-lime-500 tracking-widest ">
            {content.step} 3
          </h3>
          <p className="lg:mt-5">{content.steps[2]}</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
