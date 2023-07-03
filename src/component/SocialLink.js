import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { TbBrandGmail } from 'react-icons/tb'
function SocialLink() {
  const link = [
    {
      id: 1,
      child: (
        <>
          FaLinkedin
          <FaLinkedin size={40} />
        </>
      ),
      href: 'https://www.linkedin.com/in/sakthisampth-sampth-907955188/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          FaGithub
          <FaGithub size={40} />
        </>
      ),
      href: 'https://github.com/SATHIYAMOORTHY007',
      style: 'rounded-tr-md',
    },
    {
      id: 3,
      child: (
        <>
          Resume
          <BsFillPersonFill size={40} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-tr-md',
      download: true,
    },
    {
      id: 4,
      child: (
        <>
          G-Mail
          <TbBrandGmail size={40} />
        </>
      ),
      href: 'mailto:sakthisampth@gmail.com',
      style: 'rounded-tr-md',
    },
  ]
  return (
    <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed">
      <ul>
        {link.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14  bg-gray-500
             px-4 ml-[-100px] hover:ml-[-12px] hover:rounded-md duration-200 bg-gray-500+ " " + ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full bg-gray-500 text-white"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLink
