import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import avatar from '../assets/fabianofrank.jpg';

const Home = () => (
  <div name="" className="w-full h-screen bg-[#1a1b1b] px-10">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center items-center">
      <img className="rounded-full w-48 m-6" src={avatar} alt="avatar" />
      <p className="text-1xl sm:text-xl text-[#e6e6e9] font-bold">Hi, my name is</p>
      <h1 className="text-8xl self-start sm:self-center sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
        Frank
      </h1>
      <h2 className="text-4xl sm:text-4xl text-[#e6e6e9] font-bold">
        I am a Web Developer
      </h2>
      <p className=" text-[#e6e6e9] py-9 max-w-[700px]">
        I can help you build a product, feature or website. Take a look of my
        works. If you like what you see and have a project you need coded, do
        not hesitate and contact me.
      </p>
      <div>
        <Link to="/contact" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-gradient-to-r from-purple-500 to-purple-800 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">Start collaboration</Link>
      </div>
      <div className="flex">
        <a className="text-white text-3xl px-6 py-3 my-3 hover:text-purple-500 hover:transition-shadow duration-300" href="https://github.com/fabianofrank">
          <BsGithub />
        </a>
        <a className="text-white text-3xl px-6 py-3 my-3 hover:text-purple-500 hover:transition-shadow duration-300" href="https://github.com/fabianofrank">
          <BsTwitter />
        </a>
        <a className="text-white text-3xl px-6 py-3 my-3 hover:text-purple-500 hover:transition-shadow duration-300" href="https://github.com/fabianofrank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  </div>
);

export default Home;
