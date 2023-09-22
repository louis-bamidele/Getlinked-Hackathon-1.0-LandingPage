import { useState, useEffect } from "react";
import backIcon from "../assets/back.svg";
import Nav from "../components/Nav";
import threeDGraphic from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import woman from "../assets/1f6b6-2640.png";
import man from "../assets/image_processing20200511-10310-13mnlsx.png";
import { Link } from "react-router-dom";
import successIcon from "../assets/successfully-done-5108472-4288033 1.png";
import successMan from "../assets/successful-man-3025713-2526911 1.png";

import whiteStar from "../assets/star.png";
import purpleStar from "../assets/star pu.png";
import grayStar from "../assets/star-light-grey.png";
import pinkStar from "../assets/sata gra.png";
const Register = () => {
  const [onMobileScreen, setOnMobileScreen] = useState(false);
  const [model, setModel] = useState(false);
  const [FormData, setFormData] = useState({
    teamName: "",
    phone: "",
    email: "",
    projectTopic: "",
    groupSize: "",
    category: "",
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
      case "phone":
        regex = /^[0-9]{10,}$/; // regex to check valid phone number
        break;
      case "teamName":
        regex = /^[A-Za-z ]{3,}$/; // regex to check valid team name
        break;
      case "email":
        regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regex to check valid email
        break;
      case "category":
        regex = /^.+$/; // regex to check valid message
        break;
      case "groupSize":
        regex = /^.+$/; // regex to check valid message
        break;
      case "projectTopic":
        regex = /^.+$/; // regex to check valid topic name
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
    console.log(name, value, boolean);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleOpenModel = () => {
    setModel(true);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = "hidden";
  };
  const handleCloseModel = () => {
    setModel(false);
    document.body.style.overflow = "visible";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
    handleOpenModel();
  };

  return (
    <div className='register'>
      <img
        className='star hidden md:block left-[90%] top-[90%] star1'
        src={whiteStar}
        alt='white star'
      />
      <img
        className='star left-[90%] top-[66%] md:left-[40%] md:top-[70%] star2'
        src={purpleStar}
        alt='purple star'
      />
      <img
        className='star left-[5%] top-[37%]  md:left-[74%] md:top-[12%] star3'
        src={grayStar}
        alt='gray star'
      />
      <img
        className='star hidden md:block left-[5%] top-[78%] star4'
        src={grayStar}
        alt='gray star'
      />
      <img
        className='star   left-[80%] top-[15%] md:left-[11%] md:top-[19%] star5'
        src={pinkStar}
        alt='pink star'
      />

      {onMobileScreen ? (
        <div className='p-10 pb-5 flex items-center gap-3'>
          <Link to='/'>
            <img className='cursor-pointer' src={backIcon} alt='linkedin' />
          </Link>
          <h3 className='pink font-semibold text-2xl my-3'>Register</h3>
        </div>
      ) : (
        <Nav />
      )}
      <div className='flex gap-4 flex-col lg:flex-row items-center justify-between p-20 pt-0 px-10 md:px-20  text-slate-50'>
        <img
          className='w-3/6 h-3/4 '
          src={threeDGraphic}
          alt='3d-graphic design showing someone sitting close to his workspace'
        />
        <form
          className='register-form p-12 px-3 md:px-12 w-full md:w-8/12 gap-3 grid-flow-row-dense'
          onSubmit={handleSubmit}>
          {!onMobileScreen && (
            <h3 className='pink font-semibold text-2xl my-3'>Register</h3>
          )}
          <div className='flex gap-3  items-end my-3'>
            <p className='text-white text-sm w-max'>
              Be part of this movement!
            </p>
            <div className='px-5 register-walk-box flex justify-center items-end'>
              <img src={woman} alt='woman walking forward icon' />
              <img src={man} alt='man walking forward icon' />
            </div>
          </div>
          <p className='register-form-sub-heading mb-7'>create your account</p>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5 justify-between w-full mb-5'>
            <label className='flex flex-col gap-2 col-span-2 md:col-span-1'>
              <span>Team's Name</span>
              <input
                onChange={handleInputChange}
                pattern='^[A-Za-z ]+$'
                className='form-input rounded bg-inherit border-slate-50  border-2 placeholder:text-slate-50 text-slate-50 placeholder:text-slate-500 placeholder:text-sm'
                type='text'
                name='teamName'
                value={FormData.teamName}
                placeholder='Enter the name of your group'
                required
              />
              <span className='text-red-700 err-label'>
                please type in a valid team name, more than letters words and
                not inclusive of special char and numbers
              </span>
            </label>
            <label className='flex flex-col gap-2 col-span-2 md:col-span-1'>
              <span>Phone</span>
              <input
                onChange={handleInputChange}
                pattern='^d{10,}$'
                className='form-input rounded bg-inherit border-slate-50 border-2 placeholder:text-slate-50 text-slate-50 placeholder:text-slate-500 placeholder:text-sm'
                type='number'
                name='phone'
                value={FormData.phone}
                placeholder='Enter your phone number'
                required
              />
              <span className='text-red-700 err-label'>
                please type in a valid phone number
              </span>
            </label>
            <label className='flex flex-col gap-2 col-span-2 md:col-span-1'>
              <span>Email</span>
              <input
                onChange={handleInputChange}
                pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                className='form-input rounded bg-inherit border-slate-50 border-2 placeholder:text-slate-50 text-slate-50 placeholder:text-slate-500 placeholder:text-sm'
                type='text'
                name='email'
                value={FormData.email}
                placeholder='Enter your email address'
                required
              />
              <span className='text-red-700 err-label'>
                please type in a valid email E.g example@gmail.com
              </span>
            </label>
            <label className='flex flex-col gap-2 col-span-2 md:col-span-1'>
              <span>Project Topic</span>
              <input
                onChange={handleInputChange}
                pattern='^.+$'
                className='form-input rounded bg-inherit border-slate-50 border-2 placeholder:text-slate-50 text-slate-50 placeholder:text-slate-500 placeholder:text-sm'
                type='text'
                name='projectTopic'
                value={FormData.projectTopic}
                placeholder='What is your project topic'
                required
              />
              <span className='text-red-700 err-label'>
                please type in your project topic
              </span>
            </label>
            <label className='flex flex-col gap-2   '>
              <span>Category</span>
              <select
                onChange={handleInputChange}
                pattern='^.+$'
                required
                name='category'
                value={FormData.category}
                className=' focus:bg-[#903aff] form-select rounded bg-inherit border-slate-50 border-2 placeholder:text-slate-50 text-slate-50'>
                <option value=''>Select your category</option>
                <option value='Web Development'>Web Development</option>
                <option value='Graphic Designer'>Graphic Designer</option>
                <option value='Dapp Developer'>Dapp Developer</option>
                <option value='App Developer'>App Developer</option>
                <option value='Game Developer'>Game Developer</option>
              </select>
              <span className='text-red-700 err-label'>
                please select a category
              </span>
            </label>
            <label className='flex flex-col gap-2  '>
              <span>Group size</span>
              <select
                onChange={handleInputChange}
                pattern='^.+$'
                required
                name='groupSize'
                value={FormData.groupSize}
                className='focus:bg-[#903aff] form-select rounded bg-inherit border-slate-50 border-2 placeholder:text-slate-50 text-slate-50'>
                <option value=''>Select</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
              <span className='text-red-700 err-label'>
                please select your group size
              </span>
            </label>
          </div>

          <i className='text-red-700'>
            Please review your registration details before submitting
          </i>
          <div className='mt-7 flex gap-3 items-center'>
            <input className='form-checkbox' type='checkbox' required />
            <span>
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>
          <div className='grid place-items-center'>
            <input
              type='submit'
              value='Register'
              className='btn md:w-full w-7/12   my-5 '
            />
          </div>
        </form>
      </div>
      {model && (
        <div
          onClick={() => handleCloseModel()}
          className='cursor-pointer absolute top-0 left-0  bg-[#150e28]/90 w-screen h-screen grid place-items-center'>
          <img
            className='star left-[70%] top-[16%]  star1'
            src={purpleStar}
            alt='purple star'
          />
          <img
            className='star   left-[80%] top-[80%] md:left-[67%] md:top-[73%] star5'
            src={pinkStar}
            alt='pink star'
          />
          <img
            className='star left-[15%] top-[37%]  md:left-[34%] md:top-[39%] star3'
            src={grayStar}
            alt='gray star'
          />
          <div className='flex flex-col gap-3 text-slate-50 rounded-lg p-10 m-10 border-[#d434fe] border-2 border-solid'>
            {/* <div className='grid place-items-center h-44 w-full'> */}
            <div className=' relative h-44 w-full '>
              <img
                className='absolute top-0 left-[5%] md:left-[20%] '
                src={successIcon}
                alt='success icon'
              />
              <img
                className='absolute top-0 left-[35%] md:left-[40%] '
                src={successMan}
                alt='success man 3d graphic'
              />
            </div>
            {/* </div> */}

            <p className='text-center text-base px-3'>
              Congratulations you have successfully Registered!
            </p>
            <div>
              <p className='text-center pb-3 text-xs md:text-base px-3'>
                Yes, it was easy and you did it!
              </p>
              <p className='text-center pb-3 text-xs md:text-base px-3 emoji'>
                check your mail box for next step
              </p>
            </div>
            <button onClick={() => handleCloseModel()} className='btn'>
              back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
