import React from 'react';

const Projects = () => (
  <div className="w-full min-w-[360px]">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center items-center">
      <h1 className="text-[#e6e6e9] text-4xl self-start sm:text-5xl py-6">About Me</h1>
      <p className="text-[#e6e6e9] text-l self-start sm:text-xl py-3 font-serif">
        I’m a senior software engineer with over 15 years of experience and currently working as
        Enginnering Manager at
        <a href="https://mondu.ai">MONDU</a>
        , a “Buy Now, Pay Later” for Online B2B Checkout.
      </p>
      <p className="text-[#e6e6e9] text-l self-start sm:text-xl py-3 font-serif">
        Recently worked as Engineering Manager at
        <a href="https://www.vehiculum.de/">VEHICULUM</a>
        , one of Germany’s largest car leasing platform.
      </p>
      <p className="text-[#e6e6e9] text-l self-start sm:text-xl py-3 font-serif">
        Prior to that, I worked in several mid to large size companies such as Macy’s,
        Bloomingdales and GAP. During the time working for GAP, I lived in San Francisco, CA for
        4 months. Also co-founded a startup called Appontar.
      </p>
      <p className="text-[#e6e6e9] text-l self-start sm:text-xl py-3 font-serif">Since 2017 I’ve been living in Berlin, Germany.</p>
      <p className="text-[#e6e6e9] text-l self-start sm:text-xl py-3 font-serif">
        Current stack and technologies: Ruby on Rails, PostgreSQL, Redis, Javascript/Vue.js and
        React, Docker, Kubernetes, Elasticsearch, Terraform and AWS.
      </p>
      <p className="text-[#e6e6e9] text-l self-start sm:text-xl py-3 font-serif">
        <hr className="py-3 text-gray-900 w-screen" />
        Do you want to say hello? Feel free to
        <a href="https://twitter.com/dviana19">follow me on Twitter</a>
        .
      </p>
      <p className="text-[#e6e6e9] text-l self-start sm:text-xl py-3 font-serif">Thanks for reading!</p>
    </div>
  </div>
);

export default Projects;
