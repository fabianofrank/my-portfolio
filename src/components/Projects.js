import React from 'react';
import showroom from '../assets/showroom.png';
import apple from '../assets/apple_detail.png';
import wallet from '../assets/wallet.png';
import blog from '../assets/blog_mock.png';
import pokemon from '../assets/pokemon.png';
import bookstore from '../assets/bookstore.png';
import spacetravelers from '../assets/spacetravelers.png';

const Projects = () => (
  <div className="w-screen min-w-[360px]">
    <div className="flex flex-col items-center">

      <div className="flex pt-24 justify-center w-screen shadow-xl bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row max-w-[1000px]">
          <figure className="my-12 mr-0 md:mr-24 max-w-lg min-w-lg self-center"><img src={showroom} alt="Car Showroom Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">Showroom App</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#rails</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#postgresql</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              This project is a result from combined development
              of an API in Ruby on Rails and the UI in React.
            </p>
            <a href="https://github.com/fabianofrank/react-show-room-ui" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen shadow-xl bg-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row-reverse max-w-[1000px]">
          <figure className="my-12 ml-0 md:ml-24 max-w-lg min-w-lg self-center"><img src={blog} alt="Blog Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">Blog App</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#ruby</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#rails</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#postgresql</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              A Blog app that shows the list of posts and empower readers to interact with them by
              adding comments and liking posts
            </p>
            <a href="https://github.com/fabianofrank/rails-blog" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen shadow-xl bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row max-w-[1000px]">
          <figure className="my-12 mr-0 md:mr-24 max-w-lg min-w-lg self-center"><img src={apple} alt="Financial Statements Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">Financial Statements</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              Financial Modeling Prep API was used to create a single page application
              that displays each Apple income statement of the last 5 years.
            </p>
            <a href="https://github.com/fabianofrank/apple-income" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen shadow-xl bg-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row-reverse max-w-[1000px]">
          <figure className="my-12 ml-0 md:ml-24 max-w-lg min-w-lg self-center"><img src={wallet} alt="Investments Wallet Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">My Wallet</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              My Wallet is meant to help you organize your investments across different categories.
            </p>
            <a href="https://github.com/fabianofrank/rails-wallet" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen shadow-xl bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row max-w-[1000px]">
          <figure className="my-12 mr-0 md:mr-24 max-w-lg min-w-lg self-center"><img src={pokemon} alt="Pokedex Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">Pokedex</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#api</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#css</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              It&apos;s a nostalgic interpretation of a pokedex,
              and we hope you enjoy it as much as we did putting it together.
            </p>
            <a href="https://github.com/fabianofrank/pokemon-api" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen shadow-xl bg-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row-reverse max-w-[1000px]">
          <figure className="my-12 ml-0 md:ml-24 max-w-lg min-w-lg self-center"><img src={bookstore} alt="Bookstore Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">Bookstore</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              This is a project developed in React and Rudux,
              that creates a Bookstore to add, delete,
              edit and comment books based on a category list.
            </p>
            <a href="https://github.com/fabianofrank/bookstore" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen shadow-xl bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row max-w-[1000px]">
          <figure className="my-12 mr-0 md:mr-24 max-w-lg min-w-lg self-center"><img src={pokemon} alt="Pokedex Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">Pokedex</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#api</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#css</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              It&apos;s a nostalgic interpretation of a pokedex,
              and we hope you enjoy it as much as we did putting it together.
            </p>
            <a href="https://github.com/fabianofrank/space-travelers" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen shadow-xl bg-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-start flex-col md:flex-row-reverse max-w-[1000px]">
          <figure className="my-12 ml-0 md:ml-24 max-w-lg min-w-lg self-center"><img src={spacetravelers} alt="Space Travelers Website" /></figure>
          <div className="my-6 mx-12 md:my-12 md:mx-0 flex flex-col items-start">
            <h2 className="my-6 text-[#e6e6e9] font-semibold text-3xl">Space Travelers</h2>
            <div className="">
              <div className="py-6 pt-4 pb-2">
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#api</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
              </div>
            </div>
            <p className="my-6 text-[#e6e6e9] font-light">
              The application will allow users to book rockets and join selected space missions.
            </p>
            <a href="https://github.com/fabianofrank/space-travelers" className="text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-purple-500 hover:border-transparent rounded-full hover:transition-shadow duration-300 max-w-[200px]">See Github</a>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Projects;
