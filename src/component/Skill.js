import React from 'react'
import html from '../assets/html.png'
import node from '../assets/node.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import postman from '../assets/postman.png'
import mongo from '../assets/mongo.png'
import photoshop from '../assets/photoshop.png'
import mysql from '../assets/mysql.png'
function Skill() {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-500',
    },
    {
      id: 6,
      src: node,
      title: 'Nodejs',
      style: 'shadow-green-500',
    },
    {
      id: 7,
      src: mysql,
      title: 'Mysql',
      style: 'shadow-gray-500',
    },
    {
      id: 8,
      src: mongo,
      title: 'mongodb',
      style: 'shadow-green-500',
    },
    {
      id: 9,
      src: postman,
      title: 'Postman',
      style: 'shadow-orange-500',
    },
    {
      id: 10,
      src: photoshop,
      title: 'photoshop',
      style: 'shadow-blue-500',
    },
  ]
  return (
    <div
      id="3"
      name="Skill"
      className="w-full h-screen pt-2 bg-gradient-to-b
      from-black to-gray-800 p-4 text-white "
    >
      <div
        className="max-w-screen-lg   mx-auto p-4 flex flex-col justify-center
      w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4 border-gray-700
          p-2 inline text-yellow-300"
          >
            Skill
          </p>
          <p className="py-6"> These are the technologies I've worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4
        text-center py-8 px-12 sm:px-0"
        >
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md w-20 h-25 hover:scale-90 duration-500
          py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="icons" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
