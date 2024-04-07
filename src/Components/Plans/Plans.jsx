import double from "../../assets/double.png";
import single from "../../assets/single.png";
import triple from "../../assets/triple.png";

const Plans = () => {
  return (
    <div className="py-[100px]">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 md:gap-6  px-2">
        <div className="shadow-xl h-[500px] my-4  hover:scale-105 duration-500  ">
          <img src={single} className="w-20 md:-mt-8 mx-auto" alt="" />
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold my-6  tracking-wide">
              Web Development
            </h1>
            <span className="text-3xl font-bold">$149</span>
            <p className="text-xl font-bold my-6 ">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-xl font-bold my-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="text-xl font-bold my-6">Lorem ipsum dolor sit.</p>
            <button className=" px-8 py-2 bg-green-400 text-black rounded text-xl">
              Get Started
            </button>
          </div>
        </div>
        <div className="shadow-xl h-[500px] my-4  hover:scale-105 duration-500 bg-gray-100  ">
          <img src={double} className="w-20 -mt-8 mx-auto" alt="" />
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold my-6  tracking-wide">
              Digital Marketing
            </h1>
            <span className="text-3xl font-bold">$149</span>
            <p className="text-xl font-bold my-6 ">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-xl font-bold my-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="text-xl font-bold my-6">Lorem ipsum dolor sit.</p>
            <button className=" px-8 py-2 bg-black text-green-400 rounded text-xl">
              Get Started
            </button>
          </div>
        </div>
        <div className="shadow-xl h-[500px] my-4 hover:scale-105 duration-500 ">
          <img src={triple} className="w-20 md:-mt-8 mx-auto" alt="" />
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold my-6  tracking-wide">
              App Development
            </h1>
            <span className="text-3xl font-bold">$149</span>
            <p className="text-xl font-bold my-6 ">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-xl font-bold my-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="text-xl font-bold my-6">Lorem ipsum dolor sit.</p>
            <button className=" px-8 py-2 bg-green-400 text-black rounded text-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
