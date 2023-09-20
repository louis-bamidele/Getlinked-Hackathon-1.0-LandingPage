import Nav from "../components/Nav";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import backIcon from "../assets/back.svg";
import instagram from "../assets/instagram.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import whiteStar from "../assets/star.png";
import purpleStar from "../assets/star pu.png";
import grayStar from "../assets/star-light-grey.png";
import pinkStar from "../assets/sata gra.png";

const Contact = () => {
  const [onMobileScreen, setOnMobileScreen] = useState(false);

  const [FormData, setFormData] = useState({
    name: "",
    teamName: "",
    email: "",
    message: "",
    topic: "",
  });

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the screen width
      if (window.innerWidth <= 770) {
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

  const handleInputChange = (e) => {
    let { value, name } = e.target;
    let regex = "";

    switch (name) {
      case "name":
        regex = /^[A-Za-z ]+$/; // regex to check valid name
        break;
      case "teamName":
        regex = /^[A-Za-z ]+$/; // regex to check valid team name
        break;
      case "email":
        regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regex to check valid email
        break;
      case "message":
        regex = /^(\S+\s+)+\S+$/; // regex to check valid message
        break;
      case "topic":
        regex = /^(\S+\s*)+$/; // regex to check valid topic name
        break;
      default:
        break;
    }
    let boolean = regex.test(value);

    if (boolean) {
      e.target.classList.remove("invalid-input"); // add css style to make border red
    } else {
      e.target.classList.add("invalid-input"); // remove css style to make border red
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  return (
    <div className='contact'>
      <img
        className='star contact-white-star'
        src={whiteStar}
        alt='white star'
      />
      <img
        className='star contact-purple-star'
        src={purpleStar}
        alt='purple star'
      />
      <img className='star contact-gray-star' src={grayStar} alt='gray star' />
      <img className='star contact-pink-star' src={pinkStar} alt='pink star' />
      {onMobileScreen ? (
        <div className='px-10 pt-20'>
          <Link to='/'>
            <img className='cursor-pointer' src={backIcon} alt='linkedin' />
          </Link>
        </div>
      ) : (
        <Nav />
      )}
      <div className='flex flex-col md:flex-row justify-around items-center md:p-20'>
        {!onMobileScreen && (
          <div className='flex text-base text-white capitalize gap-3 flex-col'>
            <h3 className='text-3xl font-semibold pink'>Get in touch</h3>
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
              <p className='pink text-base font-normal pb-2'>Share on</p>
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

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 py-10 px-12 contact-form md:w-4/12 w-full  md:m-1 '>
          <div>
            <h5 className='pink text-xl font-bold'>
              Questions or need assistance?
            </h5>
            <h5 className='pink text-xl font-bold'>Let us know about it!</h5>
            {onMobileScreen && (
              <p className='py-5 text-white text-base'>
                Email us below to any question related to our event
              </p>
            )}
          </div>
          {onMobileScreen ? (
            <div className='flex flex-col gap-5 w-inherit'>
              <input
                onChange={(e) => handleInputChange(e)}
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50  text-slate-50'
                type='text'
                name='teamName'
                placeholder="Teams's name"
                required
                pattern='^[A-Za-z ]+$'
              />
              <span className='drop-shadow:lg text-red-800 capitalize err-label'>
                please type in a valid name without space, special char and
                numbers
              </span>
              <input
                onChange={(e) => handleInputChange(e)}
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='text'
                name='topic'
                placeholder='Topic'
                required
                pattern='^(\S+\s*)+$'
              />
              <span className='drop-shadow:lg text-red-800 capitalize err-label'>
                please type in a valid topic
              </span>
              <input
                onChange={(e) => handleInputChange(e)}
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='email'
                name='email'
                placeholder='Email'
                required
                pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
              />
              <span className='drop-shadow:lg text-red-800 capitalize err-label'>
                please type in a valid email e.g "example@gmail.com"
              </span>
            </div>
          ) : (
            <div className='flex flex-col gap-5 w-inherit'>
              <input
                onChange={(e) => handleInputChange(e)}
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='text'
                name='name'
                placeholder='First Name'
                required
                pattern='^[A-Za-z ]+$'
              />
              <span className='drop-shadow:lg text-red-800 capitalize err-label'>
                please type in a valid first name without space, special char
                and numbers
              </span>
              <input
                onChange={(e) => handleInputChange(e)}
                className='form-input rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
                type='email'
                name='email'
                placeholder='Mail'
                required
                pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
              />
              <span className='drop-shadow:lg text-red-800 capitalize err-label'>
                please type in a valid email e.g "example@gmail.com"
              </span>
            </div>
          )}
          <textarea
            rows='5'
            onChange={(e) => handleInputChange(e)}
            className='form-textarea rounded bg-inherit border-slate-50 placeholder:text-slate-50 text-slate-50'
            name='message'
            placeholder='Message'
            required
            pattern='^(\S+\s+)+\S+$'></textarea>
          <span className='drop-shadow:lg text-red-800 capitalize err-label'>
            please type more than a word
          </span>
          <input type='submit' className='btn m-auto' />
        </form>
      </div>
      {onMobileScreen && (
        <div className='flex flex-col m-auto w-max py-10'>
          <p className='pink text-base w-max font-normal m-auto pb-2'>
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
