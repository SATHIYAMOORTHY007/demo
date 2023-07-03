import React from 'react'
import hero from '../assets/Me-removebg.png'
import { HiArrowNarrowRight } from 'react-icons/hi'
function Home() {
  return (
    <div
      id="1"
      className="h-screen pt-5 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-color items-center  justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center  h-full">
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
            <span> I'm a </span>

            <span class="text-green-500">Full Stack Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md"></p>
          <div>
            <button
              className="group text-gray w-fit px-4 py-3
            my-2 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 "
            >
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="inline-flex clip w-full h-17">
          <img
            src={hero}
            alt="dev-img"
            id="hero"
            className="rounded-2xl  mx-auto  md:w-auto "
          />
        </div>
      </div>
    </div>
  )
}

export default Home
