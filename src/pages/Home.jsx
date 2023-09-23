import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Timeline from "../components/timeline";
import star from "../assets/star.png";
import vector4 from "../assets/Vector 4.svg";
import starpu from "../assets/star pu.png";
import heroGlobeImage from "../assets/Image 1.png";
import theBigIdea from "../assets/the big idea 1.png";
import arrow from "../assets/arrow.png";

import whiteStar from "../assets/star.png";
import purpleStar from "../assets/star pu.png";
import grayStar from "../assets/star-light-grey.png";
import pinkStar from "../assets/sata gra.png";
import womanSitting from "../assets/7450159 1.png";
import manStanding from "../assets/8046554 1.png";
import circle from "../assets/Ellipse 2.svg";
import manSittingCloud from "../assets/cwok_casual_21 1.png";
import "../App.css";
const Home = () => {
  const [text, setText] = useState([]);
  const [index, setIndex] = useState(0);
  const heroMainTextRef = useRef(null);

  useEffect(() => {
    const word = [
      "g",
      "e",
      "t",
      "l",
      "i",
      "n",
      "k",
      "e",
      "d",
      "T",
      "e",
      <span className="hero-c-text">c</span>,
      "h",
      <br />,
      "H",
      "a",
      "c",
      "k",
      "a",
      "t",
      "h",
      "o",
      "n",
      <span className="hero-span">1.0</span>,
    ];
    if (index < word.length) {
      const timer = setTimeout(() => {
        setText((prevText) => [...prevText, word[index]]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <div className="App">
      <Nav />
      <hr className="hr" />
      <div className="font-bold mx-auto text-white lg:pl-20 lg:mx:0 lg:w-auto">
        <h2 className="text-[16px] text-center lg:w-auto pt-6 lg:pt-4 lg:text-[25px] lg:pr-14 lg:text-right hero-h2">
          igniting a Revolution in HR Innovation
        </h2>
        <div className="pr:0 w-[75vw] h-[40px] lg:h-[auto] m-auto lg:w-auto flex justify-between lg:pr-14 ">
          <img
            className="lg:self-auto m-[auto] lg:m-[0] star hero-star self-end"
            src={star}
            alt="star"
          />
          <img
            className="lg:self-auto self-start"
            src={vector4}
            alt="curve line self-end"
          ></img>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="first-hero-div w-[75vw] lg:w-auto m-auto lg:m-0 text-center lg:text-left">
            <div className="relative">
              <h1
                ref={heroMainTextRef}
                className="mt-6 font-bold relative text-[32px] lg:text-[3.7rem] leading-none hero-h1"
              >
                {text.map((element, index) => (
                  <React.Fragment key={index}>{element}</React.Fragment>
                ))}
              </h1>
            </div>

            <p className="text-[13px] lg:text-sm">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="nav-text btn my-8 w-min  cursor-pointer">
              Register
            </button>
            <div className="text-center m-auto lg:m-0 flex justify-between text-[38px] w-[214px] h-[64px] lg:text-[2rem] lg:w-[200px] lg:h-[85px]">
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
              className="hero-man-globe w-[100%] h-[auto] lg:m-auto lg:w-[70%] lg:h-[90%]"
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

        <div className="w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left">
          <h3 className="pb-1 font-black text-2xl md:text-3xl">
            Introduction to getlinked
          </h3>
          <h3 className="pb-3 pink font-black text-2xl md:text-3xl">
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
      <div className="relative rules-reg text-slate-50 flex flex-col-reverse md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 ">
        <img
          className="star star3 top-[20%] left-[10%] md:top-[20%] md:left-[25%]"
          src={grayStar}
          alt="gray star"
        />
        <img
          className="star star1 top-[49%] left-[80%] md:top-[60%] md:left-[47%]"
          src={whiteStar}
          alt="white star"
        />
        <div className="w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left">
          <h3 className=" font-black text-2xl md:text-3xl">Rules and</h3>
          <h3 className="pb-3 pink font-black text-2xl md:text-3xl">
            Guidelines
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
        <div className="w-[80%] md:w-[60%]  relative">
          <img
            className="relative z-10"
            src={womanSitting}
            alt="woman sitting on a chair"
          />
          <img
            className="absolute top-[12%] right-[15%] z-0 hidden md:block"
            src={circle}
            alt="circle filled with purple and blue gradient "
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 z-10">
        <img
          className="star star1 top-[90%] left-[80%] md:top-[83%] md:left-[47%]"
          src={whiteStar}
          alt="white star"
        />
        <img
          className="star star5 top-[15%] left-[50%] md:top-[42%] md:left-[33%]"
          src={grayStar}
          alt="gray star"
        />
        <img
          className="star star3 top-[1%] left-[50%] md:top-0 md:left-[20%]"
          src={purpleStar}
          alt="purple star"
        />
        <div className="w-[60%]  relative ">
          <img
            className="z-[2] relative"
            src={manStanding}
            alt="a man holding a file and standing beside a woman "
          />
          <img
            className="absolute -top-8 left-10 z-[0] hidden md:block"
            src={circle}
            alt="circle filled with purple and blue gradient "
          />
        </div>
        <div className="w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left">
          <h3 className="pb-1 font-black text-2xl md:text-3xl">
            Judging Criteria
          </h3>
          <h3 className="pb-3 pink font-black text-2xl md:text-3xl">
            Key attributes
          </h3>
          <p className="pb-5 text-xs">
            <span className="light-purple">Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features
          </p>
          <p className="pb-5 text-xs">
            <span className="light-purple">Functionality: </span>Assess how well
            the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className="pb-5 text-xs">
            <span className="light-purple">Impact and Relevance: </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="pb-5 text-xs">
            <span className="light-purple">Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="pb-5 text-xs">
            <span className="light-purple">Adherence to Hackathon Rules: </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-20 z-10">
        <img
          className="star star4 top-[5%] left-[27%] md:top-[13%] md:left-[10%]"
          src={purpleStar}
          alt="purple star"
        />
        <div className="w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left">
          <h3 className="pb-1 font-black text-2xl md:text-3xl">
            Frequently Ask
          </h3>
          <h3 className="pb-3 pink font-black text-2xl md:text-3xl">
            Question
          </h3>
          <p className="pb-5 text-sm">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div>
            <div className="flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1">
              <p className="text-sm">
                Can I work on a project I started before the hackathon?
              </p>
              <p className="text-[#D434FE] text-3xl">+</p>
            </div>
            <div className="flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1">
              <p className="text-sm">
                What happens if I need help during the hackathon?
              </p>
              <p className="text-[#D434FE] text-3xl">+</p>
            </div>
            <div className="flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1">
              <p className="text-sm">
                What happens if I don't have an idea for a project?
              </p>
              <p className="text-[#D434FE] text-3xl">+</p>
            </div>
            <div className="flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1">
              <p className="text-sm">
                Can I join a team or do I have to come with one?
              </p>
              <p className="text-[#D434FE] text-3xl">+</p>
            </div>
            <div className="flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1">
              <p className="text-sm">What happens after the hackathon ends</p>
              <p className="text-[#D434FE] text-3xl">+</p>
            </div>
            <div className="flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1">
              <p className="text-sm">
                Can I work on a project I started before the hackathon?
              </p>
              <p className="text-[#D434FE] text-3xl">+</p>
            </div>
          </div>
        </div>
        <div className="w-[60%]  relative md:mt-0 mt-20 pt-5">
          <img
            className="star star3  top-[55%] left-[2%]"
            src={grayStar}
            alt="gray star"
          />
          <img
            className="star star1 top-[94%] left-[93%]"
            src={whiteStar}
            alt="white star"
          />
          <img
            className="star star5 top-[15%] left-[17%]"
            src={pinkStar}
            alt="pink star"
          />
          <img
            className="star star2 top-[2%] left-[47%]"
            src={pinkStar}
            alt="pink star"
          />

          <img
            className="z-[2] relative"
            src={manSittingCloud}
            alt="a man holding a file and standing beside a woman "
          />
          <p className="question-mark question-mark-smaller absolute top-[3%] left-[8%]">
            ?
          </p>
          <p className="question-mark absolute top-[-10%] left-[30%]">?</p>
          <p className="question-mark question-mark-smaller absolute top-[-2%] left-[55%]">
            ?
          </p>
        </div>
      </div>
      <hr />
      <div className="timeline py-[50px]">
        <div className="lg:w-[27%] w-[80%] m-auto pb-[60px] lg:pb-[80px] text-center text-white">
          <h3 className="text-bold text-xl lg:text-3xl ">Timeline</h3>
          <p className="text-sm lg:text-initial">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="timeline-box text-xs/6 lg:text-base lg:mt-[50px] md:mt-[30px] relative lg:w-[80%] md:w-[80%] w-[78%] m-auto flex flex-col lg:flex-row md:flex-row justify-between lg:items-center md:items-center">
          <div className="timeline-events relative text-left md:text-right lg:text-right">
            <img
              className="star star1 absolute top-[-40%] left-[2%] md:top-[-100%] md:left-[2%]"
              src={starpu}
              alt="purple star"
            />
            <h3>Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <Timeline date="1" />
          <h3 className="timeline-events text-left">November 18, 2023</h3>
        </div>
        <div className="timeline-box text-xs/6 lg:text-base lg:mt-[50px] md:mt-[30px] relative lg:w-[80%] md:w-[80%] w-[78%] m-auto flex flex-col-reverse lg:flex-row md:flex-row justify-between lg:items-center md:items-center">
          <h3 className="timeline-events text-left md:text-right lg:text-right">
            November 18, 2023
          </h3>
          <Timeline date="2" />
          <div className="timeline-events text-left">
            <h3>Teams Registration begins</h3>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </div>
        <div className="timeline-box relative text-xs/6 lg:text-base lg:mt-[50px] md:mt-[30px] relative lg:w-[80%] md:w-[80%] w-[78%] m-auto flex flex-col lg:flex-row md:flex-row justify-between lg:items-center md:items-center">
          <div className="timeline-events text-left md:text-right lg:text-right">
            <h3>Teams Registration ends</h3>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
          <Timeline date="3" />
          <h3 className="timeline-events text-left">November 18, 2023</h3>
          <img
            className="star star6 absolute top-[80%] right-[25%] md:top-[-50%] md:right-[10%] "
            src={star}
            alt="purple star"
          />
        </div>
        <div className="timeline-box text-xs/6 lg:text-base lg:mt-[50px] md:mt-[30px] relative lg:w-[80%] md:w-[80%] w-[78%] m-auto flex flex-col-reverse lg:flex-row md:flex-row justify-between lg:items-center md:items-center">
          <h3 className="timeline-events text-left md:text-right lg:text-right">
            November 18, 2023
          </h3>
          <Timeline date="4" />
          <div className="timeline-events text-left">
            <h3>Announcement of the accepted teams and ideas</h3>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>
        <div className="timeline-box text-xs/6 lg:text-base lg:mt-[50px] md:mt-[30px] relative lg:w-[80%] md:w-[80%] w-[78%] m-auto flex flex-col lg:flex-row md:flex-row justify-between lg:items-center md:items-center">
          <div className="timeline-events text-left md:text-right lg:text-right">
            <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <Timeline date="5" />
          <h3 className="timeline-events text-left">November 18, 2023</h3>
        </div>
        <div className="timeline-box text-xs/6 lg:text-base lg:mt-[50px] md:mt-[30px] relative lg:w-[80%] md:w-[80%] w-[78%] m-auto flex flex-col-reverse lg:flex-row md:flex-row justify-between lg:items-center md:items-center">
          <h3 className="timeline-events text-left md:text-right lg:text-right">
            November 18, 2023
          </h3>
          <Timeline date="6" />
          <div className="timeline-events text-left">
            <h3>Demo Day</h3>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
