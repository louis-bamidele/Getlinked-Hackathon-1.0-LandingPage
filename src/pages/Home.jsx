import Nav from "../components/Nav";
import star from "../assets/star.png";
import vector4 from "../assets/Vector 4.svg";
import creative1 from "../assets/Creative 1.png";
import chain from "../assets/chain-9365116-7621444.png";
import heroGlobeImage from "../assets/Image 1.png";
import theBigIdea from "../assets/the big idea 1.png";
import arrow from "../assets/arrow.png";

import purpleStar from "../assets/star pu.png";
import pinkStar from "../assets/sata gra.png";
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
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 ">
        <img
          className="star star3 top-[20%] left-[10%] md:top-[40%] md:left-[10%]"
          src={pinkStar}
          alt="pink star"
        />
        <img
          className="star star1 top-[40%] left-[80%] md:top-[40%] md:left-[90%]"
          src={purpleStar}
          alt="purple star"
        />
        <div className="w-[60%] md:w-[50%] lg:w-[40%] relative">
          <img
            className="w-full"
            src={theBigIdea}
            alt="a big light bulb indicating a big idea "
          />
          <img
            className="absolute  w-[20%] md:bottom-0 -bottom-10 right-[40%] md:right-[-10%]"
            src={arrow}
            alt="arrow"
          />
          <p className="text-slate-50 absolute w-[20%] h-[10%] text-center left-[40%] top-[50%] translate-x[-50%] translate-y[-50%]">
            The big idea
          </p>
        </div>
        <div className="w-[60%] lg:w-[50%] text-slate-50 text-center md:text-left">
          <h3 className="pb-1 font-black text-lg md:text-2xl">
            Introduction to getlinked
          </h3>
          <h3 className="pb-3 pink font-black text-lg md:text-2xl">
            tech Hackathon 1.0
          </h3>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
