import React from 'react';
import showroom from '../assets/showroom.png';
import apple from '../assets/apple_detail.png';
import wallet from '../assets/wallet.png';
import blog from '../assets/blog_mock.png';
import pokemon from '../assets/pokemon.png';
import bookstore from '../assets/bookstore.png';
import spacetravelers from '../assets/spacetravelers.png';

const Projects = () => (
  <div className="w-full min-w-[360px]">
    <div className="max-w-[1000px] mx-auto px-8 flex h-full justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="w-96 m-6 shadow-xl bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-3xl">
          <a href="https://github.com/fabianofrank/react-show-room-ui">
            <figure className="my-6"><img src={showroom} alt="Car Showroom Website" /></figure>
            <div className="mx-3 flex flex-col">
              <h2 className="text-[#e6e6e9] font-semibold">Showroom App</h2>
              <p className="text-[#e6e6e9] font-light">
                This project is a result from combined development
                of an API in Ruby on Rails and the UI in React.
              </p>
              <div className="self-center">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#rails</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#postgresql</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-96 m-6 shadow-xl bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-3xl">
          <a href="https://github.com/fabianofrank/rails-blog">
            <figure className="my-6"><img src={blog} alt="Blog Website" /></figure>
            <div className="mx-3 flex flex-col">
              <h2 className="text-[#e6e6e9] font-semibold">Blog App</h2>
              <p className="text-[#e6e6e9] font-light">
                A Blog app that shows the list of posts and empower readers to interact with them by
                adding comments and liking posts
              </p>
              <div className="self-center">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#ruby</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#rails</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#postgresql</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-96 m-6 shadow-xl bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-3xl">
          <a href="https://github.com/fabianofrank/apple-income">
            <figure className="my-6"><img src={apple} alt="Financial Statements Website" /></figure>
            <div className="mx-3 flex flex-col">
              <h2 className="text-[#e6e6e9] font-semibold">Financial Statements</h2>
              <p className="text-[#e6e6e9] font-light">Financial Modeling Prep API was used to create a single page application that displays each Apple income statement of the last 5 years.</p>
              <div className="self-center">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-96 m-6 shadow-xl bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-3xl">
          <a href="https://github.com/fabianofrank/rails-wallet">
            <figure className="my-6"><img src={wallet} alt="Investments Wallet Website" /></figure>
            <div className="mx-3 flex flex-col">
              <h2 className="text-[#e6e6e9] font-semibold">My Wallet</h2>
              <p className="text-[#e6e6e9] font-light">My Wallet is meant to help you organize your investments across different categories.</p>
              <div className="self-center">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-96 m-6 shadow-xl bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-3xl">
          <a href="https://github.com/fabianofrank/pokemon-api">
            <figure className="my-6"><img src={pokemon} alt="Pokedex Website" /></figure>
            <div className="mx-3 flex flex-col">
              <h2 className="text-[#e6e6e9] font-semibold">Pokedex</h2>
              <p className="text-[#e6e6e9] font-light">It&apos;s a nostalgic interpretation of a pokedex, and we hope you enjoy it as much as we did putting it together.</p>
              <div className="self-center">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#api</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#css</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-96 m-6 shadow-xl bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-3xl">
          <a href="https://github.com/fabianofrank/bookstore">
            <figure className="my-6"><img src={bookstore} alt="Bookstore Website" /></figure>
            <div className="mx-3 flex flex-col">
              <h2 className="text-[#e6e6e9] font-semibold">Bookstore</h2>
              <p className="text-[#e6e6e9] font-light">This is a project developed in React and Rudux, that creates a Bookstore to add, delete, edit and comment books based on a category list.</p>
              <div className="self-center">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#javascript</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-96 m-6 shadow-xl bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-3xl">
          <a href="https://github.com/fabianofrank/space-travelers">
            <figure className="my-6"><img src={spacetravelers} alt="Space Travelers Website" /></figure>
            <div className="mx-3 flex flex-col">
              <h2 className="text-[#e6e6e9] font-semibold">Space Travelers</h2>
              <p className="text-[#e6e6e9] font-light">The application will allow users to book rockets and join selected space missions.</p>
              <div className="self-center">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#api</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#react</span>
                  <span className="inline-block bg-[#e6e6e9] rounded-full px-3 py-1 text-sm font-semibold text-[#1a1b1b] mr-2 mb-2">#redux</span>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>

    </div>
  </div>
);

export default Projects;
