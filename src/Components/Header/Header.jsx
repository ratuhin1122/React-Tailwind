import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-blue-400 p-4">
      <div className="max-w-[1240px] py-5  mx-auto flex items-center justify-between px-2 ">
        <div className="text-3xl font-bold text-white cursor-pointer hover:text-black duration-500">
          WsCube TEch
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:hidden block"
          />
        )}
        {/* <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className="text-white text-3xl md:hidden block"
        /> */}
        {/* <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          className="text-white text-3xl md:hidden block"
        /> */}
        <ul className=" hidden md:flex gap-10 text-white">
          <li>
            <a href="" className="hover:text-black duration-500">
              Home{" "}
            </a>
          </li>
          <li>
            <a href="" className="hover:text-black duration-500">
              About{" "}
            </a>
          </li>
          <li>
            <a href="" className="hover:text-black duration-500">
              Contact{" "}
            </a>
          </li>
          <li>
            <a href="" className="hover:text-black duration-500">
              News{" "}
            </a>
          </li>
          <li>
            <a href="" className="hover:text-black duration-500">
              Blogs{" "}
            </a>
          </li>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={` px-2 duration-300 md:hidden fixed right-[-100%] top-[108px] bg-black/80 backdrop-blur-md text-white w-full h-fit ${
            toggle ? "right-[0]" : "right-[100%] "
          } `}
        >
          <li className="p-5 ">
            <a href="" className="hover:text-black duration-500">
              Home{" "}
            </a>
          </li>
          <li className="p-5">
            <a href="" className="hover:text-black duration-500">
              About{" "}
            </a>
          </li>
          <li className="p-5">
            <a href="" className="hover:text-black duration-500">
              Contact{" "}
            </a>
          </li>
          <li className="p-5">
            <a href="" className="hover:text-black duration-500">
              News{" "}
            </a>
          </li>
          <li className="p-5">
            <a href="" className="hover:text-black duration-500">
              Blogs{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
