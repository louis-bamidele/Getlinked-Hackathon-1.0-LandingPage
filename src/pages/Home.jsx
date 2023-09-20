import Nav from "../components/Nav";
import star from "../assets/star.png";
import vector4 from "../assets/Vector 4.svg";
import creative1 from "../assets/Creative 1.png";
import chain from "../assets/chain-9365116-7621444.png";
import heroGlobeImage from "../assets/Image 1.png";

import "../App.css";
const Home = () => {
  return (
    <div className="App">
      <Nav />
      <div className="text-white pl-20">
        <h2 className="pt-6 text-4xl pr-14 text-left">
          igniting a Revolution in HR Innovation
        </h2>
        <div className="flex justify-between pr-14">
          <img src={star} alt="star" />
          <img src={vector4} alt="curve line"></img>
        </div>
        <div className="flex pt-4">
          <div className="w-6/12">
            <div>
              <h1 className="text-80px leading-normal">
                getlinked Tech Hackathon <span>1.0</span>{" "}
                <img className="inline" src={chain} alt="chain" />
              </h1>
              <img src={creative1} alt="creative" />
            </div>

            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button>Register</button>
            <div className="flex">
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
          <div className="hero-man">
            <img src={heroGlobeImage} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
