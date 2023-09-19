import React from "react";
import Nav from "../components/Nav";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import backIcon from "../assets/back.svg";
import instagram from "../assets/instagram.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [onMobileScreen, setOnMobileScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the screen width
      if (window.innerWidth <= 640) {
        setOnMobileScreen(true);
      } else {
        setOnMobileScreen(false);
      }
    };
    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  const goBack = () => {
    navigate(-1); //navigate back 1 history
  };

  return (
    <div className='contact'>
      {onMobileScreen ? (
        <div className='px-10 pt-20'>
          <img
            onClick={() => goBack}
            className='cursor-pointer'
            src={backIcon}
            alt='linkedin'
          />
        </div>
      ) : (
        <Nav />
      )}

      <div className='flex flex-col md:flex-row justify-around items-center md:p-20'>
        {!onMobileScreen && (
          <div className='flex text-base text-white capitalize gap-3 flex-col'>
            <h3 className='text-3xl font-semibold purple-blue'>Get in touch</h3>
            <div>
              <p>contact</p>
              <p> information</p>
            </div>
            <div>
              <p>27, Alara Street </p>
              <p>Yaba 100012 </p>
              <p>lagos State</p>
            </div>
            <p>Call Us: 07067981819</p>
            <div>
              <p>we are open from monday-friday</p>
              <p>08:00am - 05:00pm</p>
            </div>
            <div className='flex flex-col'>
              <p className='purple-blue text-base font-normal'>Share on</p>
              <div className='flex gap-2'>
                <img
                  className='cursor-pointer'
                  src={instagram}
                  alt='instagram'
                />
                <img className='cursor-pointer' src={x} alt='x' />
                <img className='cursor-pointer' src={facebook} alt='facebook' />
                <img className='cursor-pointer' src={linkedin} alt='linkedin' />
              </div>
            </div>
          </div>
        )}

        <div className='flex flex-col gap-5 py-10 px-12 contact-form md:w-4/12 w-full  md:m-1 '>
          <div>
            <h5 className='purple-blue text-xl'>
              Questions or need assistance?
            </h5>
            <h5 className='purple-blue  text-xl'>Let us know about it!</h5>
            {onMobileScreen && (
              <p className='py-5 text-white text-base'>
                Email us below to any question related to our event
              </p>
            )}
          </div>
          {onMobileScreen ? (
            <div className='flex flex-col gap-5 w-inherit'>
              <input
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50  text-slate-50'
                type='text'
                placeholder="Teams's name"
              />
              <input
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='text'
                placeholder='Topic'
              />
              <input
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='email'
                placeholder='Email'
              />
            </div>
          ) : (
            <div className='flex flex-col gap-5 w-inherit'>
              <input
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='text'
                placeholder='First Name'
              />
              <input
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='email'
                placeholder='Mail'
              />
            </div>
          )}
          <textarea
            className='form-textarea rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
            placeholder='Message'></textarea>
          <input type='submit' className='btn m-auto' />
        </div>
      </div>
      {onMobileScreen && (
        <div className='flex flex-col m-auto w-max pb-10'>
          <p className='purple-blue text-base w-max font-normal m-auto'>
            Share on
          </p>
          <div className='flex gap-2'>
            <img className='cursor-pointer' src={instagram} alt='instagram' />
            <img className='cursor-pointer' src={x} alt='x' />
            <img className='cursor-pointer' src={facebook} alt='facebook' />
            <img className='cursor-pointer' src={linkedin} alt='linkedin' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
