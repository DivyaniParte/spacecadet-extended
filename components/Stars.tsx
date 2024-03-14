function Stars() {
  return (
    <div className="fixed w-[95%] h-[95%] overflow-hidden top-0 -z-20">
      <div className="w-full h-full bg-gradient-radial from-transparent to-black absolute z-20"></div>
      <div className="text-slate-500 text-2xl">
        {[...Array(300)].map((s) => {
          const rotation = Math.random() * 45;
          const scale = Math.random() + 0.1;
          const delay = Math.random() * 2000;
          const duration = Math.random() * 2000 + 2000;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const style = {
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            animationDelay: `${delay}ms`,
            animationDuration: `${duration}ms`,
            left: `${x}%`,
            top: `${y}%`,
          };
          return (
            <span style={style} className="block animate-pulse absolute z-30">
              *
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Stars;
