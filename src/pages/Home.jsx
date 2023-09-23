import Nav from "../components/Nav";
import star from "../assets/star.png";
import vector4 from "../assets/Vector 4.svg";
import creative1 from "../assets/Creative 1.png";
import chain from "../assets/chain-9365116-7621444.png";
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
import cup from "../assets/9486889 1.png";
import gold from "../assets/gold_medal 1.png";
import silver from "../assets/silver_medal 1.png";
import bronze from "../assets/bronze_medal 1.png";
import libertyLogo from "../assets/Liberty company logo white colour.png";
import libertyPayLogo from "../assets/Liberty company logo white.png";
import winWiseLogo from "../assets/Winwise logo White colour 1.png";
import whisperLogo from "../assets/wisper logo white.png";
import paybox from "../assets/Screenshot__37_-removebg-preview.png";
import vusual from "../assets/Screenshot__38_-removebg-preview.png";
import listCheck from "../assets/list terms.svg";
import padLock from "../assets/08 1.png";
import secured from "../assets/vvect.png";

import "../App.css";
const Home = () => {
  return (
    <div className='App'>
      <Nav />
      <div className='font-bold mx-auto text-white lg:pl-20 lg:mx:0 lg:w-auto'>
        <h2 className='text-[16px] text-center lg:w-auto lg:pt-4 lg:text-[25px] lg:pr-14 lg:text-right hero-h2'>
          igniting a Revolution in HR Innovation
        </h2>
        <div className='pr:0 w-[90vw] m-auto lg:w-auto flex justify-between lg:pr-14 '>
          <img className='star' src={star} alt='star' />
          <img src={vector4} alt='curve line'></img>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-[85vw] lg:w-auto m-auto lg:m-0 text-center lg:text-left'>
            <div className='relative'>
              <h1 className='mt-6 font-bold relative text-[2.5rem] lg:text-[3.7rem] leading-none hero-h1'>
                getlinked Te<span className='hero-c-text'>c</span>h <br />{" "}
                Hackathon <span className='hero-span'>1.0</span>{" "}
              </h1>
            </div>

            <p className='text-[13px lg:text-sm'>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className='nav-text btn my-8 w-min  cursor-pointer'>
              Register
            </button>
            <div className='text-center m-auto lg:m-0 flex justify-between text-[48px] w-[214px] h-[64px] lg:text-[2rem] lg:w-[200px] lg:h-[85px]'>
              <h1>
                00<span className='text-sm'>H</span>
              </h1>
              <h1>
                00<span className='text-sm'>M</span>
              </h1>
              <h1>
                00<span className='text-sm'>S</span>
              </h1>
            </div>
          </div>
          <div className='w-[95vw] m-auto lg:m-0 hero-man lg:pr-2.5'>
            <img
              className='w-[100%] h-[auto] lg:m-auto lg:w-[65%] lg:h-[90%]'
              src={heroGlobeImage}
              alt='hero'
            />
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

        <div className='w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className='pb-1 font-black text-2xl md:text-3xl'>
            Introduction to getlinked
          </h3>
          <h3 className='pb-3 pink font-black text-2xl md:text-3xl'>
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
      <div className='relative rules-reg text-slate-50 flex flex-col-reverse md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 '>
        <img
          className='star star3 top-[20%] left-[10%] md:top-[20%] md:left-[25%]'
          src={grayStar}
          alt='gray star'
        />
        <img
          className='star star1 top-[49%] left-[80%] md:top-[60%] md:left-[47%]'
          src={whiteStar}
          alt='white star'
        />
        <div className='w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className=' font-black text-2xl md:text-3xl'>Rules and</h3>
          <h3 className='pb-3 pink font-black text-2xl md:text-3xl'>
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
        <div className='w-[80%] md:w-[60%]  relative'>
          <img
            className='relative z-10'
            src={womanSitting}
            alt='woman sitting on a chair'
          />
          <img
            className='absolute top-[12%] right-[15%] z-0 hidden md:block'
            src={circle}
            alt='circle filled with purple and blue gradient '
          />
        </div>
      </div>
      <div className='relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 z-10'>
        <img
          className='star star3 top-[90%] left-[80%] md:top-[83%] md:left-[47%]'
          src={whiteStar}
          alt='white star'
        />
        <img
          className='star star5 top-[15%] left-[50%] md:top-[42%] md:left-[33%]'
          src={grayStar}
          alt='gray star'
        />
        <img
          className='star star4 top-[1%] left-[50%] md:top-0 md:left-[20%]'
          src={purpleStar}
          alt='purple star'
        />
        <div className='w-[60%]  relative '>
          <img
            className='z-[2] relative'
            src={manStanding}
            alt='a man holding a file and standing beside a woman '
          />
          <img
            className='absolute -top-8 left-10 z-[0] hidden md:block'
            src={circle}
            alt='circle filled with purple and blue gradient '
          />
        </div>
        <div className='w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className='pb-1 font-black text-2xl md:text-3xl'>
            Judging Criteria
          </h3>
          <h3 className='pb-3 pink font-black text-2xl md:text-3xl'>
            Key attributes
          </h3>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Functionality: </span>Assess how well
            the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Impact and Relevance: </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Adherence to Hackathon Rules: </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <button className='btn'>Read More</button>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-20 z-10'>
        <img
          className='star star4 top-[5%] left-[27%] md:top-[13%] md:left-[10%]'
          src={purpleStar}
          alt='purple star'
        />
        <div className='w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className='pb-1 font-black text-2xl md:text-3xl'>
            Frequently Ask
          </h3>
          <h3 className='pb-3 pink font-black text-2xl md:text-3xl'>
            Question
          </h3>
          <p className='pb-5 text-sm'>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div>
            <div className='flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1'>
              <p className='text-sm'>
                Can I work on a project I started before the hackathon?
              </p>
              <p className='text-[#D434FE] text-3xl'>+</p>
            </div>
            <div className='flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1'>
              <p className='text-sm'>
                What happens if I need help during the hackathon?
              </p>
              <p className='text-[#D434FE] text-3xl'>+</p>
            </div>
            <div className='flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1'>
              <p className='text-sm'>
                What happens if I don't have an idea for a project?
              </p>
              <p className='text-[#D434FE] text-3xl'>+</p>
            </div>
            <div className='flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1'>
              <p className='text-sm'>
                Can I join a team or do I have to come with one?
              </p>
              <p className='text-[#D434FE] text-3xl'>+</p>
            </div>
            <div className='flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1'>
              <p className='text-sm'>What happens after the hackathon ends</p>
              <p className='text-[#D434FE] text-3xl'>+</p>
            </div>
            <div className='flex border-b-2 border-solid border-[#D434FE] justify-between items-center pb-1'>
              <p className='text-sm'>
                Can I work on a project I started before the hackathon?
              </p>
              <p className='text-[#D434FE] text-3xl'>+</p>
            </div>
          </div>
        </div>
        <div className='w-[60%]  relative md:mt-0 mt-20 pt-5'>
          <img
            className='star star3  top-[55%] left-[2%]'
            src={grayStar}
            alt='gray star'
          />
          <img
            className='star star1 top-[94%] left-[93%]'
            src={whiteStar}
            alt='white star'
          />
          <img
            className='star star5 top-[15%] left-[17%]'
            src={pinkStar}
            alt='pink star'
          />
          <img
            className='star star2 top-[2%] left-[47%]'
            src={pinkStar}
            alt='pink star'
          />

          <img
            className='z-[2] relative'
            src={manSittingCloud}
            alt='a man holding a file and standing beside a woman '
          />
          <p className='question-mark question-mark-smaller absolute top-[3%] left-[8%]'>
            ?
          </p>
          <p className='question-mark absolute top-[-10%] left-[30%]'>?</p>
          <p className='question-mark question-mark-smaller absolute top-[-2%] left-[55%]'>
            ?
          </p>
        </div>
      </div>
      <div className='relative flex flex-col py-20'>
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
            <h3 className='pb-1 font-black text-4xl md:text-3xl'>Prizes and</h3>
            <h3 className='pb-3 pink font-black text-4xl md:text-3xl'>
              Rewards
            </h3>
            <p className='text-2xl md:text-base'>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-3  justify-center  items-center md:items-end pt-20'>
          <img
            className='w-[90%] md:w-[50%] lg:w-[40%] mb-28 md:mb-0 md:p-10 lg:p-0'
            src={cup}
            alt='a big cup for celebration'
          />
          <div className='flex justify-center gap-7 w-[100%] md:w-[50%] p-10 mt-32 md:mt-0 '>
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
      <div className=' text-slate-50 relative flex flex-col gap-3 p-10 md:p-20 py-32 items-center'>
        <img
          className='star star2 top-[80%] left-[86%] md:top-[70%] md:left-[50%] '
          src={whiteStar}
          alt='white star'
        />
        <img
          className='star star5 top-[60%] left-[50%] md:top-[30%] md:left-[6%]'
          src={pinkStar}
          alt='pink star'
        />
        <img
          className='star star4 top-[40%] left-[7%] md:top-[40%] md:left-[50%]'
          src={purpleStar}
          alt='purple star'
        />
        <h3 className='font-bold text-3xl text-center'>
          Partners and Sponsors
        </h3>
        <p className='leading-7 text-center w-[100%] md:w-[45%] pb-10'>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div className='sponsors-border w-full h-min m-5 md:m-20 '>
          <div className='grid grid-cols-3 place-content-center place-items-center sm:p-5  md:p-20'>
            <div className='w-full p-5 left-line h-full'>
              <img className='  m-auto' src={libertyLogo} alt='liberty logo' />
            </div>
            <div className='w-full p-5 left-line h-full'>
              <img
                className='  md:ml-auto m-auto p-1 mt-[10%] md:w-full'
                src={libertyPayLogo}
                alt='liberty pay  logo'
              />
            </div>

            <div className='w-full p-5  h-full'>
              <img className='  m-auto' src={winWiseLogo} alt='win wise logo' />
            </div>
            <div className='top-line w-full p-5 left-line h-full'>
              <img
                className='   m-auto'
                src={whisperLogo}
                alt='whispersms logo'
              />
            </div>
            <div className='top-line w-full p-5 left-line h-full'>
              <img className='m-auto w-min ' src={paybox} alt='paybox logo' />
            </div>

            <div className='top-line w-full p-5  h-full'>
              <img className='m-auto w-min' src={vusual} alt='vusual logo' />
            </div>
          </div>
        </div>
      </div>
      <div className='privacy relative flex flex-col lg:flex-row p-10 md:p-20'>
        <img
          className='star star2 top-[80%] left-[86%] md:top-[20%] md:left-[90%] '
          src={whiteStar}
          alt='white star'
        />
        <img
          className='star star5 top-[80%] left-[86%] md:top-[65%] md:left-[60%] '
          src={whiteStar}
          alt='white star'
        />
        <img
          className='star star4 top-[20%] left-[10%] md:top-[8%] md:left-[25%]'
          src={grayStar}
          alt='gray star'
        />
        <img
          className='star star3 top-[20%] left-[10%] md:top-[70%] md:left-[90%]'
          src={grayStar}
          alt='gray star'
        />
        <img
          className='star star1 top-[60%] left-[50%] md:top-[b0%] md:left-[3%]'
          src={pinkStar}
          alt='pink star'
        />
        <img
          className='star star5 top-[60%] left-[50%] md:top-[55%] md:left-[65%]'
          src={pinkStar}
          alt='pink star'
        />

        <img
          className='star star4 top-[40%] left-[7%] md:top-[20%] md:left-[50%]'
          src={purpleStar}
          alt='purple star'
        />
        <div className='text-slate-50 text-center lg:text-left w-full lg:w-[50%]'>
          <h3 className='font-semibold text-2xl'>
            Privacy Policy and <br /> <span className='pink'>Terms</span>
          </h3>
          <p className='text-sm lg:text-[9px] py-3'>
            Last updated on September 12, 2023
          </p>
          <p className='py-3 text-sm lg:text-[11px] lg:pr-[20%] mb-10'>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className='text-sm privacy-box p-10'>
            <p className=' pb-3'>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p className='pink text-sm text-left pb-2'>Licensing Policy</p>
            <p className='pb-2 text-left'>
              Here are terms of our Standard License:
            </p>
            <div className='flex gap-2 items-start pb-3 text-sm'>
              <img src={listCheck} alt='checkbox' />
              <p className='text-left'>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className='flex gap-2  items-start pb-3 text-sm'>
              <img src={listCheck} alt='checkbox' />
              <p className='text-left'>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className='text-center'>
              <button className='btn mx-auto my-3 text-center'>
                Reach More
              </button>
            </div>
          </div>
        </div>
        <div className='relative w-full lg:w-[50%] p-10 mt-[30%] lg:mt-[0px] z-[4]'>
          <img
            className='w-full relative z-[4]'
            src={padLock}
            alt='padlock and key'
          />
          <div className='absolute top-[-10%] sm:top-[-15%]  md:left-[20%]  z-[3]'>
            <img
              className='lg:w-[150%] w-[110%] md:w-[120%] max-w-none'
              src={secured}
              alt='secured icon'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
