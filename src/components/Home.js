import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import avatar from '../assets/fabianofrank.jpg';

const Home = () => {
  const email = 'fabianofrank@proton.me';

  const copyEmail = () => { navigator.clipboard.writeText(email); };
  const copyAlert = () => { alert('EMAIL COPIED TO CLIPBOARD'); };

  const onClick = () => {
    copyEmail();
    copyAlert();
  };

  return (
    <div name="" className=" w-full min-w-[360px] px-10">

      <div className="max-w-[1000px] mx-auto flex flex-col h-full justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row py-24 items-end">
          <div>
            <p className="text-1xl sm:text-xl text-[#e6e6e9] font-bold">Hi, my name is</p>
            <h1 className="text-8xl self-start sm:self-center sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-700">
              Frank
            </h1>
            <h2 className="text-4xl sm:text-4xl text-[#e6e6e9] font-bold">
              I am a Software Developer
            </h2>
            <p className=" text-[#e6e6e9] py-9 max-w-[700px]">
              I can help you build a product, feature or website. Take a look of my
              works. If you like what you see and have a project you need coded, do
              not hesitate and contact me.
            </p>

          </div>
          <img className="rounded-full max-w-xs m-6 self-center" src={avatar} alt="avatar" />
        </div>
        <div className="flex space-x-5">
          <button type="submit" onClick={onClick} className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">COPY EMAIL</button>
          <a href="../assets/Frank_Resume.docx" className="text-white px-6 py-3 my-3 flex items-center bg-purple-500 hover:bg-purple-700 rounded-lg hover:transition-shadow duration-300 max-w-[200px]" download>DOWNLOAD CV</a>
        </div>
        <div className="flex">
          <a className="text-white text-3xl px-6 py-3 my-3 hover:text-purple-500 hover:transition-shadow duration-300" href="https://github.com/fabianofrank">
            <BsGithub />
          </a>
          <a className="text-white text-3xl px-6 py-3 my-3 hover:text-purple-500 hover:transition-shadow duration-300" href="https://twitter.com/fabianofrankk/">
            <BsTwitter />
          </a>
          <a className="text-white text-3xl px-6 py-3 my-3 hover:text-purple-500 hover:transition-shadow duration-300" href="https://www.linkedin.com/in/fabianofrank/">
            <BsLinkedin />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;
