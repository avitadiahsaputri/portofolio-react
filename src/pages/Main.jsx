// import React from "react";
// import "./App.css";
import About from "./About";
import Skill from "./Main/Skill";
// import Contact from "./Contact";
import gambar from "../../public/aquarius-icon-15.jpg";

const Emoji = (props) => (
  <span className="emoji" role="img">
    {props.symbol}
  </span>
);

const Main = () => {
  return (
    <main className="bg-slate-900 pt-32 md:pt-0 pb-10">
      {/* Banner section */}
      <section className="sm:grid grid-cols-2 lg:px-12 lg:pt-5">
        {/* Left */}
        <section className="flex justify-center items-center p-5">
          <div className="text-white font-bold text-4xl sm:text-3xl md:text-4xl flex flex-col gap-4">
            <div className="text-5xl sm:text-4xl md:text-5xl text-center sm:text-start">
              HI...
              <Emoji symbol="👋"></Emoji>
            </div>
            <div className="text-center sm:text-start">
              I'm <span className="text-gray-700">Avita</span> Diah Saputri
            </div>
            <p className="text-2xl sm:text-xl md:text-2xl text-slate-400 text-center sm:text-start">
              junior Back-end Developer
            </p>
          </div>
        </section>
        {/* Right */}
        <section className="p-14">
          <img className="flex p-1" src={gambar} alt="" />
        </section>
      </section>

      {/* About me */}
      <About />

      {/* Skill */}
      <Skill />

    </main>
  );
};

export default Main;
