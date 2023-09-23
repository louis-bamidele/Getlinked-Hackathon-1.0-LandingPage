import React from "react";
import whiteStar from "../assets/star.png";
import purpleStar from "../assets/star pu.png";
import grayStar from "../assets/star-light-grey.png";
import pinkStar from "../assets/sata gra.png";
import cup from "../assets/9486889 1.png";
import gold from "../assets/gold_medal 1.png";
import silver from "../assets/silver_medal 1.png";
import bronze from "../assets/bronze_medal 1.png";
const prize = () => {
  return (
    <div className='relative prize flex flex-col py-10 md:py-20'>
      <img
        className='star star3 top-[90%] left-[65%]  md:top-[85%] md:left-[78%]'
        src={grayStar}
        alt='gray star'
      />

      <img
        className='star star1 top-[60%] left-[80%] md:top-[45%] md:left-[89%]'
        src={whiteStar}
        alt='white star'
      />
      <img
        className='star star3 top-[39%] left-[53%]'
        src={whiteStar}
        alt='white star'
      />
      <img
        className='star star2 top-[55%] left-[16%] md:top-[94%] md:left-[16%]'
        src={whiteStar}
        alt='white star'
      />
      <img
        className='star star5 top-[10%] left-[70%] md:top-[15%] md:left-[80%]'
        src={pinkStar}
        alt='pink star'
      />
      <img
        className='star star4 top-[3%] left-[7%] md:top-[13%] md:left-[10%]'
        src={purpleStar}
        alt='purple star'
      />
      <div className=' px-5 text-slate-50 text-center md:text-left flex justify-center items-center  md:justify-end md:items-end text-left md:mr-10 lg:mr-28'>
        <div>
          <h3 className='md:pb-1 font-black text-[25px] md:text-3xl'>
            Prizes and
          </h3>
          <h3 className='md:pb-3 pink font-black text-[25px] md:text-3xl'>
            Rewards
          </h3>
          <p className='text-sm md:text-base'>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-3  justify-center  items-center md:items-end p-5 md:pt-20'>
        <img
          className='w-[90%] md:w-[50%] lg:w-[40%] mb-28 md:mb-0 md:p-10 lg:p-0'
          src={cup}
          alt='a big cup for celebration'
        />
        <div className='flex justify-center gap-7 w-[100%] md:w-[50%] md:p-10 mt-0 '>
          <div className='w-[30%] text-slate-50 pink-border relative h-min   px-0  pt-16 pb-10 md:w-[45%] lg:w-[30%] flex flex-col items-center justify-center'>
            <img
              className='max-w-none w-[100%] md:w-[100px] lg:w-[130px] xl:w-[150px] absolute bottom-[70%]'
              src={silver}
              alt='silver medal'
            />
            <h2 className='font-bold'>2nd</h2>
            <p>Runner</p>
            <h4 className='px-2 font-bold pink'>N300,000</h4>
          </div>
          <div className='w-[30%] mt-3 text-slate-50 purple-border relative h-min px-0    pt-16 pb-10 md:w-[45%] lg:w-[30%] flex flex-col items-center justify-center'>
            <img
              className='max-w-none w-[130%] md:w-[150px] lg:w-[180px] xl:w-[210px] absolute bottom-[70%]'
              src={gold}
              alt='gold medal'
            />
            <h2 className='font-bold'>1st</h2>
            <p>Runner</p>
            <h4 className='px-2 font-bold purple-blue'>N400,000</h4>
          </div>
          <div className='w-[30%] text-slate-50 pink-border relative h-min   px-0  pt-16 pb-10 md:w-[45%] lg:w-[30%] flex flex-col items-center justify-center'>
            <img
              className='max-w-none w-[100%] md:w-[100px] lg:w-[130px] xl:w-[150px] absolute bottom-[70%]'
              src={bronze}
              alt='bronze medal'
            />
            <h2 className='font-bold'>3rd</h2>
            <p>Runner</p>
            <h4 className='px-2 font-bold pink'>N150,000</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default prize;
