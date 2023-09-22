import Nav from "../components/Nav";
import star from "../assets/star.png";
import vector4 from "../assets/Vector 4.svg";
import creative1 from "../assets/Creative 1.png";
import chain from "../assets/chain-9365116-7621444.png";
import heroGlobeImage from "../assets/Image 1.png";

import "../App.css";
const Home = () => {
  return (
    <div className="App">
      <Nav />
      <div className="font-bold mx-auto text-white lg:pl-20 lg:mx:0 lg:w-auto">
        <h2 className="text-[16px] text-center lg:w-auto lg:pt-4 lg:text-[25px] lg:pr-14 lg:text-right hero-h2">
          igniting a Revolution in HR Innovation
        </h2>
        <div className="pr:0 w-[90vw] m-auto lg:w-auto flex justify-between lg:pr-14 ">
          <img className="star" src={star} alt="star" />
          <img src={vector4} alt="curve line"></img>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-[85vw] lg:w-auto m-auto lg:m-0 text-center lg:text-left">
            <div className="relative">
              <h1 className="mt-6 font-bold relative text-[2.5rem] lg:text-[3.7rem] leading-none hero-h1">
                getlinked Te<span className="hero-c-text">c</span>h <br />{" "}
                Hackathon <span className="hero-span">1.0</span>{" "}
              </h1>
            </div>

            <p className="text-[13px lg:text-sm">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="nav-text btn my-8 w-min  cursor-pointer">
              Register
            </button>
            <div className="text-center m-auto lg:m-0 flex justify-between text-[48px] w-[214px] h-[64px] lg:text-[2rem] lg:w-[200px] lg:h-[85px]">
              <h1>
                00<span className="text-sm">H</span>
              </h1>
              <h1>
                00<span className="text-sm">M</span>
              </h1>
              <h1>
                00<span className="text-sm">S</span>
              </h1>
            </div>
          </div>
          <div className="w-[95vw] m-auto lg:m-0 hero-man lg:pr-2.5">
            <img
              className="w-[100%] h-[auto] lg:m-auto lg:w-[65%] lg:h-[90%]"
              src={heroGlobeImage}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
