import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Timeline from "../components/timeline";
import star from "../assets/star.png";
import vector4 from "../assets/Vector 4.svg";
import starpu from "../assets/star pu.png";
import heroGlobeImage from "../assets/Image 1.png";

import Prize from "../components/prize";
import whiteStar from "../assets/star.png";
import purpleStar from "../assets/star pu.png";
import grayStar from "../assets/star-light-grey.png";
import pinkStar from "../assets/sata gra.png";

import libertyLogo from "../assets/Liberty company logo white colour.png";
import libertyPayLogo from "../assets/Liberty company logo white.png";
import winWiseLogo from "../assets/Winwise logo White colour 1.png";
import whisperLogo from "../assets/wisper logo white.png";
import paybox from "../assets/Screenshot__37_-removebg-preview.png";
import vusual from "../assets/Screenshot__38_-removebg-preview.png";
import listCheck from "../assets/list terms.svg";
import padLock from "../assets/08 1.png";
import secured from "../assets/vvect.png";
import { motion } from "framer-motion";
import "../App.css";
import Introduction from "../components/Introduction";
const Home = () => {
  const [sec, setsec] = useState("");
  const [min, setmin] = useState("");
  const [hour, sethour] = useState("");
  const textToType = "Igniting a Revolution in HR Innovation";
  const [text, setText] = useState([]);
  const [index, setIndex] = useState(0);
  const heroMainTextRef = useRef(null);

  useEffect(() => {
    const word = textToType.split("");
    if (index < word.length) {
      const timer = setTimeout(() => {
        setText((prevText) => [...prevText, word[index]]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [text]);

  var countDownDate = new Date("may 10, 2027 15:37:25").getTime();

  const timer = setInterval(() => {
    // get the curent time
    var now = new Date().getTime();
    // get the distance between countdowndate and current date
    var distance = countDownDate - now;
    // time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //  display the result on screen
    setsec(seconds);
    setmin(minutes);
    sethour(hours);

    // if the count down is finished
    if (distance < 0) {
      console.log(days);
      clearInterval(timer);
    }
  }, 1000);

  return (
    <div className="App">
      <Nav />

      <hr className="hr" />
      <div className="relative font-bold mx-auto HERO text-white lg:pl-20 lg:mx:0 lg:w-auto">
        <img
          className="star star3 top-[10%] left-[79%] md:top-[20%] md:left-[60%]"
          src={grayStar}
          alt="gray star"
        />{" "}
        <img
          className="star star5 top-[32%] left-[78%] md:top-[65%] md:left-[50%]"
          src={grayStar}
          alt="gray star"
        />
        <h2
          ref={heroMainTextRef}
          id="typing-text"
          className="text-[16px] text-center lg:w-auto pt-6 lg:pt-4 lg:text-[25px] lg:pr-14 lg:text-right hero-h2"
        >
          {text.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
        </h2>
        <div className="pr:0 w-[75vw] md:w-[40vw] h-[40px] lg:h-[auto] m-auto lg:w-auto flex justify-between lg:pr-14 ">
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
              <h1 className="mt-6 font-bold relative text-[32px] lg:text-[3.7rem] leading-none hero-h1">
                getlinked Te<span className="hero-c-text">c</span>h<br />{" "}
                Hackathon
                <span className="hero-span"> 1.0</span>
              </h1>
            </div>

            <p className="lg:w-[80%] text-[13px] lg:text-sm hero-p">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="nav-text btn my-8 w-min  cursor-pointer">
              Register
            </button>

            <div className="text-center m-auto lg:m-0 flex justify-between text-[38px] w-[214px] h-[64px] lg:text-[2rem] lg:w-[200px] lg:h-[85px]">
              <h1>
                {hour}
                <span className="text-sm">H</span>
              </h1>
              <h1>
                {min}
                <span className="text-sm">M</span>
              </h1>
              <h1>
                {sec}
                <span className="text-sm">S</span>
              </h1>
            </div>
          </div>

          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[95vw] m-auto lg:m-0 hero-man lg:pr-2.5"
          >
            <img
              className="hero-man-globe w-[100%] h-[auto] lg:m-auto lg:w-[70%] lg:h-auto"
              src={heroGlobeImage}
              alt="hero"
            />
          </motion.div>
        </div>
      </div>

      <Introduction />

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
      <div className="LAST">
        <Prize />
        <div className=" text-slate-50 relative flex flex-col gap-3 p-10 md:p-20 py-32 items-center">
          <img
            className="star star2 top-[80%] left-[86%] md:top-[70%] md:left-[50%] "
            src={whiteStar}
            alt="white star"
          />
          <img
            className="star star5 top-[60%] left-[50%] md:top-[30%] md:left-[6%]"
            src={pinkStar}
            alt="pink star"
          />
          <img
            className="star star4 top-[40%] left-[7%] md:top-[40%] md:left-[50%]"
            src={purpleStar}
            alt="purple star"
          />
          <h3 className="font-bold text-[22px] md:text-3xl text-center">
            Partners and Sponsors
          </h3>
          <p className="leading-7 text-center w-[100%] md:w-[45%] pb-10">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
          <div className="sponsors-border w-full h-min m-5 md:m-20 ">
            <div className="grid grid-cols-3 place-content-center place-items-center sm:p-5  md:p-20">
              <div className="w-full p-5 left-line h-full">
                <img
                  className="  m-auto"
                  src={libertyLogo}
                  alt="liberty logo"
                />
              </div>
              <div className="w-full p-5 left-line h-full">
                <img
                  className="  md:ml-auto m-auto p-1 mt-[10%] md:w-full"
                  src={libertyPayLogo}
                  alt="liberty pay  logo"
                />
              </div>

              <div className="w-full p-5  h-full">
                <img
                  className="  m-auto"
                  src={winWiseLogo}
                  alt="win wise logo"
                />
              </div>
              <div className="top-line w-full p-5 left-line h-full">
                <img
                  className="   m-auto"
                  src={whisperLogo}
                  alt="whispersms logo"
                />
              </div>
              <div className="top-line w-full p-5 left-line h-full">
                <img className="m-auto w-min " src={paybox} alt="paybox logo" />
              </div>

              <div className="top-line w-full p-5  h-full">
                <img className="m-auto w-min" src={vusual} alt="vusual logo" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="privacy relative flex flex-col lg:flex-row p-10 md:p-20">
          <img
            className="star star2 top-[78%] left-[87%] md:top-[20%] md:left-[90%] "
            src={whiteStar}
            alt="white star"
          />
          <img
            className="star star5 top-[90%] left-[25%] md:top-[65%] md:left-[60%] "
            src={whiteStar}
            alt="white star"
          />
          <img
            className="star star4 top-[92%] left-[74%] md:top-[8%] md:left-[25%]"
            src={grayStar}
            alt="gray star"
          />
          <img
            className="star star3 top-[1%] left-[80%] md:top-[70%] md:left-[90%]"
            src={grayStar}
            alt="gray star"
          />
          <img
            className="star star1 top-[15%] left-[75%] md:top-[b0%] md:left-[3%]"
            src={pinkStar}
            alt="pink star"
          />
          <img
            className="star star5 top-[58%] left-[5%] md:top-[55%] md:left-[65%]"
            src={pinkStar}
            alt="pink star"
          />

          <img
            className="star star4 top-[75%] left-[17%] md:top-[20%] md:left-[50%]"
            src={purpleStar}
            alt="purple star"
          />
          <div className="text-slate-50 text-center lg:text-left w-full lg:w-[50%]">
            <h3 className="font-semibold text-2xl">
              Privacy Policy and <br /> <span className="pink">Terms</span>
            </h3>
            <p className="text-sm lg:text-[9px] py-3">
              Last updated on September 12, 2023
            </p>
            <p className="py-3 text-sm lg:text-[11px] lg:pr-[20%] mb-10">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <div className="text-sm privacy-box p-10">
              <p className=" pb-3">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <p className="pink text-sm text-left pb-2">Licensing Policy</p>
              <p className="pb-2 text-left">
                Here are terms of our Standard License:
              </p>
              <div className="flex gap-2 items-start pb-3 text-sm">
                <img src={listCheck} alt="checkbox" />
                <p className="text-left">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex gap-2  items-start pb-3 text-sm">
                <img src={listCheck} alt="checkbox" />
                <p className="text-left">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <div className="text-center">
                <button className="btn mx-auto my-3 text-center">
                  Reach More
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-[50%] p-10 mt-[30%] lg:mt-[0px] z-[4]">
            <img
              className="w-full relative z-[4]"
              src={padLock}
              alt="padlock and key"
            />
            <div className="absolute opacity-50 CENTER top-[-20%] sm:top-[-15%]  md:left-[20%]  z-[3]">
              <img
                className="lg:w-[150%] w-[150%] md:w-[120%] max-w-none"
                src={secured}
                alt="secured icon"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="relative  p-8 pt-[80px] lg:h-[390px] text-white">
        <img
          className="star star5 top-[80%] left-[80%] md:top-[65%] md:left-[90%] "
          src={whiteStar}
          alt="white star"
        />
        <img
          className="star star4 top-[50%] left-[50%] md:top-[20%] md:left-[70%]"
          src={grayStar}
          alt="gray star"
        />
        <img
          className="star star3 top-[20%] left-[7%]"
          src={whiteStar}
          alt="white star"
        />
        <img
          className="star star1 top-[89%] left-[25%] md:top-[80%] md:left-[50%]"
          src={pinkStar}
          alt="pink star"
        />

        <div className=" w-[80%]  lg:h-[68%] m-auto lg:flex-row flex-col  flex justify-between lg:items-center text-xs">
          <div className="lg:w-[45%] lg:h-[100%] h-[23vh] mb-[70px] lg:mb-[0] flex flex-col justify-between">
            <div className="">
              <h1 className="heading-text pb-[20px]  cursor-pointer">
                <Link to="/">
                  get<span className="linked">linked</span>
                </Link>
              </h1>
              <p className=" text-xs/5">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>

            <p className="">
              Terms of Use{" "}
              <span className="w-[2px] h-[20px] bg-[#D434FE] mx-[5px]"></span>{" "}
              Privacy Policy
            </p>
          </div>
          <div className="lg:h-[100%] h-[24vh] w-[60vw] lg:w-[25%] mb-[70px] lg:mb-[0]">
            <h4 className=" text-bold pb-[20px] text-[#D434FE] text-sm">
              Useful links
            </h4>
            <ul className="flex flex-col justify-between h-[90%]">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>

              <li className="flex items-center justify-between">
                Follow us{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                    fill="#F8F8F8"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div className="h-[100%] lg:w-[15%] w-[30vw] mb-[70px] lg:mb-[0]">
            <h4 className="text-bold pb-[20px] text-[#D434FE] text-sm">
              Contact Us
            </h4>
            <ul className=" h-[50%] flex flex-col justify-between">
              <li className="flex justify-between">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z"
                    fill="#F8F8F8"
                  />
                </svg>

                <p className="w-[70%]">+234 679 81819</p>
              </li>
              <li className="flex justify-between">
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z"
                    fill="#F8F8F8"
                  />
                </svg>
                <address className="w-[70%]">
                  27,Alara Street Yaba 100012 Lagos State
                </address>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-rights">All rights reserved. © getlinked Ltd.</p>
      </footer>
    </div>
  );
};

export default Home;
