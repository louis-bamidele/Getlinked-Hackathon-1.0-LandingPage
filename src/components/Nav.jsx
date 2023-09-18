import { useRef } from "react";
import menuIcon from "../assets/Vector.svg";
import menuX from "../assets/Vector-x.svg";
const Nav = () => {
  const menu = useRef(null);

  const handleClick = () => {
    console.log(menu.current);
    menu.current.classList.toggle("BLOCK");
  };
  return (
    <nav className='md:px-20 px-10 flex justify-between text-white border-slate-700 border-b py-7 relative'>
      <h1 className='heading-text cursor-pointer'>
        get<span className='linked'>linked</span>
      </h1>
      <img
        onClick={handleClick}
        className='md:hidden block cursor-pointer'
        src={menuIcon}
        alt='menu-icon'
      />
      <ul className=' gap-7 hidden md:flex'>
        <li className='nav-text m-auto cursor-pointer'>Timeline</li>
        <li className='nav-text  m-auto cursor-pointer'>Overview</li>
        <li className='nav-text m-auto cursor-pointer'>FAQs</li>
        <li className='nav-text m-auto cursor-pointer'>Contact</li>
        <li className='nav-text btn px-8 md:ml-1 lg:ml-20 rounded py-3 cursor-pointer'>
          Register
        </li>
      </ul>
      <div
        ref={menu}
        className='absolute top-0 right-0 hidden shadow-2xl rounded px-10 pt-1 pb-20'>
        <img
          className='cursor-pointer CIRCLE my-10'
          src={menuX}
          alt='menu-icon'
          onClick={handleClick}
        />
        <ul className='flex flex-col gap-5 '>
          <li className='nav-text cursor-pointer'>Timeline</li>
          <li className='nav-text  cursor-pointer'>Overview</li>
          <li className='nav-text cursor-pointer'>FAQs</li>
          <li className='nav-text cursor-pointer'>Contact</li>
          <li className='nav-text btn px-8 w-min rounded py-3 cursor-pointer'>
            Register
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
