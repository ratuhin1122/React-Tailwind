import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-blue-400  w-full py-[50px] ">
      <div className="max-w-[1240px] w-full py-[100px] text-center mx-auto font-bold">
        <div className="text-xl md:text-5xl md:p[24px] mb-4  md:mb-10">
          Learn With This
        </div>
        <h2 className="text-white text-3xl md:text-[80px] md:p-[24px] mb-4 md:mb-10">
          {" "}
          Grow With Us .
        </h2>
        <div className="md:p-[24px] text-[20px] md:text-[50px] text-white my-8 md:mb-10">
          Learn{" "}
          <ReactTyped
            strings={["Web Development", "Ethical Hacking", "App Development"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          ></ReactTyped>
        </div>
        <button className="shadow-[0_9px_0_rgb(0,0,0)] bg-white text-black px-4  hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all rounded text-2xl py-2 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
