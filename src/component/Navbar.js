import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
function Navbar() {
  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Skill',
    },
    /*  {
      id: 4,
      link: 'experience',
    }, */
    {
      id: 4,
      link: 'contact',
    },
  ]
  const [nav, setNav] = useState(false)
  return (
    <div className="flex justify-between items-center px-4  w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="color-yellow   text-5xl font-signature ml-2">
          Sathiya moorthy
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((e) => (
          <li
            key={e}
            className="px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200 font-medium capitalize"
          >
            <Link to={e.id} smooth duration={500}>
              {e.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute
      top-0  left-0 w-full h-screen bg-gradient-to-b from balck to bg-gray-800 text-gray-500"
        >
          {links.map((a) => (
            <li className="px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200 font-medium capitalize">
              <Link
                to={a.id}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {a.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar
