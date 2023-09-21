import { useRef } from "react";
import menuIcon from "../assets/Vector.svg";
import menuX from "../assets/Vector-x.svg";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const menu = useRef(null);

  const handleClick = () => {
    menu.current.classList.toggle("BLOCK");
  };
  return (
    <nav className='md:px-15 lg:mx-20 px-10 flex justify-between items-center text-white py-7 relative'>
      <h1 className='heading-text cursor-pointer'>
        <Link to='/'>
          get<span className='linked'>linked</span>
        </Link>
      </h1>
      <img
        onClick={handleClick}
        className='md:hidden block cursor-pointer'
        src={menuIcon}
        alt='menu-icon'
      />
      <ul className=' gap-7 hidden md:flex items-center py-5'>
        <li className='nav-text m-auto cursor-pointer hover:text-[#D434FE] w-max'>
          <Link>Timeline </Link>
        </li>
        <li className='nav-text  m-auto cursor-pointer hover:text-[#D434FE] w-max'>
          <Link>Overview</Link>
        </li>
        <li className='nav-text m-auto cursor-pointer hover:text-[#D434FE] w-max'>
          <Link>FAQs</Link>
        </li>
        <li className='nav-text m-auto cursor-pointer hover:text-[#D434FE] w-max'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li className='nav-text btn-container md:ml-1 lg:ml-20 cursor-pointer'>
          <NavLink className='btn' to='/register'>
            Register
          </NavLink>
        </li>
      </ul>
      <div
        ref={menu}
        className='absolute top-0 right-0 hidden shadow-2xl rounded px-10 pt-1 pb-20'>
        <div className='RELATIVE flex justify-start'>
          <svg
            onClick={handleClick}
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='23'
            viewBox='0 0 23 23'
            fill='none'>
            <circle
              cx='11.5'
              cy='11.5'
              r='11'
              stroke='url(#paint0_linear_181_74)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_181_74'
                x1='11.5'
                y1='0'
                x2='11.5'
                y2='23'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#903AFF' />
                <stop offset='1' stopColor='#FF26B9' />
              </linearGradient>
            </defs>
          </svg>
          <img
            className='cursor-pointer CLOSE'
            src={menuX}
            alt='menu-icon'
            onClick={handleClick}
          />
        </div>

        <ul className='flex flex-col gap-5 '>
          <li className='nav-text cursor-pointer hover:text-[#D434FE] w-max'>
            <Link>Timeline </Link>
          </li>
          <li className='nav-text  cursor-pointer hover:text-[#D434FE] w-max'>
            <Link>Overview </Link>
          </li>
          <li className='nav-text cursor-pointer hover:text-[#D434FE] w-max'>
            <Link>FAQs </Link>
          </li>
          <li className='nav-text cursor-pointer hover:text-[#D434FE] w-max'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li className='nav-text btn-container pt-2  w-full  cursor-pointer grid place-items-start'>
            <NavLink className='btn  w-min' to='/register'>
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
