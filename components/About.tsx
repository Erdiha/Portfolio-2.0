import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HandshakeIcon from '@mui/icons-material/Handshake';

import Link from 'next/link';
function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[8rem] font-arial flex  py-12 px-2 
      transition-all duration-300 ease-in-out justify-center w-full
        text-custom-white md:text-xl md:border-custom-gray md:border-b-2
      ">
      <div className="md:w-[30rem] lg:w-[40rem] shadow-lg md:min-h-[40rem] w-full">
        <h1
          className="row-span-3 font-halvetica pt-6 pb-4 flex justify-center flex-col items-center
          text-4xl tracking-tight font-extrabold text-center text-custom-white bg-custom-gray 
          ">
          About
          <hr className="w-[40%] md:m-2 mt-4" />
        </h1>
        <div className="bg-custom-gray md:p-12 md:min-h-[50%] p-4">
          <span className=" text-[20px] border-l-[1px] pl-1 border-custom-blue">
            Hi, I am Erdi.
            <p className="text-[15px] italic font-light opacity-75 mb-1 h-fit">
              Frontend Engineer | UI & UX Designer.
            </p>
          </span>
          <ol className="list-disc list-inside md:p-2 md:my-2 ">
            <li>I can adapt and learn fast.</li>
            <li>I handle responsibilities with professionalism and care.</li>
            <li>I am a team-player and fun to work with!</li>
            <li>
              I have passion, skills, and a unique perspective for
              responsive, adaptive, and user-friendly apps and websites.
            </li>
          </ol>
        </div>

        <div
          className="grid grid-cols-2 items-center p-4 bg-custom-gray gap-6 
            md:flex md:flex-col">
          <p
            className="py-1 text-center md:text-start md:border-b md:border-r-0
            font-semibold  text-xl border-r-[1px]">
            RESUME
          </p>
          <div className="grid grid-cols-2 gap-4 py-2 ">
            <a
              download
              href="../static/erdi-haciogullari-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="p-2 border-[1px] text-center   text-custom-blue font-semibold">
              PDF
            </a>

            <Link href="/Resume" passHref>
              <button className="p-2 border-[1px]  text-custom-blue font-semibold">
                HTML
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center mt-2">
          <div className="grid row-span-2 p-3">
            <ul
              className="grid h-full grid-cols-3 justify-around p-2 items-center">
              <a href="https://github.com/Erdiha" target="_blank" rel="noreferrer" className="md:hover:text-white text-black cursor-pointer border-r-[1px] text-center">
                <GitHubIcon fontSize="large" />
              </a>
              <a href="https://www.linkedin.com/in/erdi-haciogullari-919246222/" rel="noreferrer" target="_blank" className="md:hover:text-white text-black cursor-pointer  border-r-[1px] text-center">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="https://app.joinhandshake.com/stu/users/18554836" target="_blank"  rel="noreferrer" className="md:hover:text-white cursor-pointer text-black text-center">
                <HandshakeIcon fontSize="large" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
