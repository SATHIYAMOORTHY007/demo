import React from 'react'

function About() {
  return (
    <div
      id="2"
      className="h-screen pt-5 w-full bg-gradient-to-b from-gray-800
      to-black text-white "
    >
      <div
        className="max-w-screen-lg   mx-auto p-4 flex flex-col justify-center
      w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4 border-gray-700
          p-2 inline text-blue-300"
          >
            About us
          </p>
          <p className="py-6 text-1xl md:text-2xl">
            An earnest person who is looking for an opportunity and a medium
            where I could implement my Full-stack development skills by adhering
            to the professional standards with persistent learning of the
            required functionality and the technology stack.
          </p>
        </div>

        <div
          className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4
        text-center py-8 px-12 sm:px-0"
        ></div>
      </div>
    </div>
  )
}

export default About
