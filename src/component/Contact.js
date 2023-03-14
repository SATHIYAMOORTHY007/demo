import React from 'react'

function Contact() {
  return (
    <div
      id="3"
      name="contact"
      className="w-full h-screen bg-gradient-to-b
    from-black to-gray-800 p-4 text-white"
    >
      <div
        className="flex flex-col p-4 justify-center
      max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500 text-yellow-300"
          >
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/8fe6b3df-0acd-4b05-9d73-5de0b2e410c6"
            method="post"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="  p-2 bg-transparent border-2 rounded-md text-white
                focus:outline-none"
            ></input>
            {/*   email */}
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white
                focus:outline-none"
            ></input>

            {/*  text-area */}
            <textarea
              row="10"
              name="message"
              className="p-2 bg-transparent border-2 rounded-md text-white
            focus:outline-none;"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b
            from-cyan-500 to-blue-500 p-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Lets's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
