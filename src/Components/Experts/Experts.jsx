import laptop from "../../assets/laptop.jpg";

const Experts = () => {
  return (
    <div className="max-w-[1240px]  mx-auto md:grid grid-cols-2 my-10">
      <div className="  col-span-1 md:w-[80%]">
        <img src={laptop} alt="" />
      </div>
      <div className=" col-span-1 flex flex-col p-2 justify-center">
        <h1 className="text-[#00df9a] text-xl font-bold my-8 md:my-4 uppercase">
          Learn From Experts
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
          libero assumenda optio cumque tempore nemo ipsum illum rem nostrum.
          Eos?
        </p>
        <button className=" p-3  md:w-[30%] bg-black text-white rounded text-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
