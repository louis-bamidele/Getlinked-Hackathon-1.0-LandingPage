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
    <div className='App'>
      <Nav />
      <div className='text-white pl-20'>
        <h2 className='pt-6 text-4xl pr-14 text-left'>
          igniting a Revolution in HR Innovation
        </h2>
        <div className='flex justify-between pr-14'>
          <img src={star} alt='star' />
          <img src={vector4} alt='curve line'></img>
        </div>
        <div className='flex pt-4'>
          <div className='w-6/12'>
            <div>
              <h1 className='text-80px leading-normal'>
                getlinked Tech Hackathon <span>1.0</span>{" "}
                <img className='inline' src={chain} alt='chain' />
              </h1>
              <img src={creative1} alt='creative' />
            </div>

            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button>Register</button>
            <div className='flex'>
              <h1>
                00<span>H</span>
              </h1>
              <h1>
                00<span>M</span>
              </h1>
              <h1>
                00<span>S</span>
              </h1>
            </div>
          </div>
          <div className='hero-man'>
            <img src={heroGlobeImage} alt='hero' />
          </div>
        </div>
      </div>
      <div className='relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 '>
        <img
          className='star star3 top-[20%] left-[10%] md:top-[40%] md:left-[10%]'
          src={pinkStar}
          alt='pink star'
        />
        <img
          className='star star1 top-[40%] left-[80%] md:top-[40%] md:left-[90%]'
          src={purpleStar}
          alt='purple star'
        />
        <div className='w-[60%] md:w-[50%] lg:w-[40%] relative'>
          <img
            className='w-full'
            src={theBigIdea}
            alt='a big light bulb indicating a big idea '
          />
          <img
            className='absolute  w-[20%] md:bottom-0 -bottom-10 right-[40%] md:right-[-10%]'
            src={arrow}
            alt='arrow'
          />
          <p className='text-slate-50 absolute w-[20%] h-[10%] text-center left-[40%] top-[50%] translate-x[-50%] translate-y[-50%]'>
            The big idea
          </p>
        </div>
        <div className='w-[60%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className='pb-1 font-black text-lg md:text-2xl'>
            Introduction to getlinked
          </h3>
          <h3 className='pb-3 pink font-black text-lg md:text-2xl'>
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
