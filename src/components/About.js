import React from 'react';

const About = () => (
  <div className="w-full min-w-[360px]">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center items-center">
      <h1 className="text-[#e6e6e9] text-4xl self-start sm:text-5xl py-6">About Me</h1>
      <p className="text-[#e6e6e9] text-lg self-start sm:text-xl py-3 font-serif">
        I’m a junior software developer with over 1 year of experience and
        currently job searching after having finished my Bootcamp at
        <a className="text-blue-400" href="https://microverse.org"> Microverse</a>
        , a remote global full-stack development program that was focused on Agile working
        methodology, pair-programming, and industry-standard git flow.
      </p>
      {/* <p className="text-[#e6e6e9] text-lg self-start sm:text-xl py-3 font-serif">
      </p>
      <p className="text-[#e6e6e9] text-lg self-start sm:text-xl py-3 font-serif">
      </p> */}
      <p className="text-[#e6e6e9] text-lg self-start sm:text-xl py-3 font-serif">
        I love the idea of building things that can potentially change the world,
        that&apos;s why I got in touch with programming, to be part of this revolution.
      </p>
      <p className="text-[#e6e6e9] text-lg self-start sm:text-xl py-3 font-serif">
        Current stack and technologies: Ruby, Rails, PostgreSQL, Javascript, React and
        Redux, Tailwind, HTML and CSS.
      </p>
      <p className="text-[#e6e6e9] text-lg self-start sm:text-xl py-3 font-serif">
        <hr className="py-3 text-gray-900 w-screen" />
        Do you want to say hello? Feel free to
        <a className="text-blue-400" href="https://twitter.com/fabianofrankk"> follow me on Twitter</a>
        .
      </p>
      <p className="text-[#e6e6e9] text-lg self-start sm:text-xl py-3 font-serif">Thanks for reading!</p>
    </div>
  </div>
);

export default About;
