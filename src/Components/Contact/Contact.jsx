const Contact = () => {
  return (
    <div className="bg-blue-400 ">
      <div className="max-w-[1240px] md:grid grid-cols-2 mx-auto p-4">
        <div className=" col-span-1 pt-20">
          <h1 className="text-4xl text-white font-bold mb-4 ">
            Want To Learn Latest I.T Skills ?
          </h1>
          <p className="text-white font-normal ">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="col-span-1 pt-20">
          <input
            type="text"
            placeholder="Email"
            className="p-3 mr-2 w-[60%] mb-4  rounded"
          />
          <button className=" p-3  md:w-[30%] bg-black text-white rounded text-xl">
            Get Started
          </button>
          <br />
          <p
            className="text-white my-2
          "
          >
            We Care Bout The Protection of Data. Read Our <br />
            <a href="" className="text-black">
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
