import Link from 'next/link';
import React, { useRef, useState } from 'react';

import { jsPDF } from 'jspdf';
import { useEffect } from 'react';
import { allProj, techUsed } from '../data-types/data';
function resume() {
  const [marginHandle, setMarginHandle] = useState(false);
  const pdfRef: any = useRef(null);
  const codeREf: any = useRef(null);
  const websiteRef: any = useRef(null);
  let getSkillWrapper: any;
  let getResumeIcon: any;
  let getResumeColumns: any;

  useEffect(() => {
    getSkillWrapper = document.querySelectorAll('.skill-wrapper')!;
    getResumeIcon = document.getElementById('resume-icon')!;
    getResumeColumns = document.getElementById('resume-columns')!;
    if (marginHandle) {
      getResumeIcon?.classList.remove('pb-6', 'px-4');
      getResumeColumns?.classList.add('flex-col');
      getResumeColumns?.classList.remove('w-[50rem]');
      getSkillWrapper?.forEach((item: any) => {
        item.classList.remove('pb-[6px]');
      });
    }
  }, [marginHandle]);

  const handleDownload = () => {
    getSkillWrapper = document.querySelectorAll('.skill-wrapper')!;
    getResumeIcon = document.getElementById('resume-icon')!;
    getResumeColumns = document.getElementById('resume-columns')!;
    getResumeIcon?.classList.add('pb-6', 'px-4');
    getResumeColumns?.classList.remove('flex-col');

    getSkillWrapper?.forEach((item: any) => {
      item.classList.add('pb-[6px]');
    });
    const content = pdfRef.current;
    let innerW = 0;
    if (typeof window !== 'undefined') {
      window.innerWidth < 1011 && getResumeColumns?.classList.add('w-[50rem]');
    }

    const doc: any = new jsPDF('p', 'pt', 'letter', true);
    doc.html(content, {
      callback: function (doc: any) {
        doc.save('Erdi_Haciogullari_Resume.pdf');
        setMarginHandle(true);
      },
      html2canvas: { scale: 0.7645 },
    });
  };

  const createSkills = () => {
    const skills = [
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'CSS3',
      'HTML5',
      'SCSS',
      'Tailwind',
      'BootStrap',
      'React',
      'Python',
      'C++/C#',
      'NextJS',
      'Recoil',
      'MongoDB',
      'Firebase',
      'GIT',
    ];
    const store: any = [];

    for (let skill of skills) {
      store.push(
        <span
          key={skill}
          className="bg-slate-200 text-black
        skill-wrapper
        font-semibold flex justify-center items-center">
          {skill}
        </span>
      );
    }
    return store;
  };
  return (
    <>
      <div className=" relative p-3 justify-center flex flex-col items-center min-w-screen min-h-screen  ">
        <div
          className=" flex flex-row p-2 md:max-w-[50rem] bg-slate-800 min-w-screen w-full 
           gap-2 items-center justify-between">
          <Link href="../">
            <button
              className="flex-1 justify-center  duration-400 items-center w-full  h-10 transition 
                    md:hover:scale-105 md:hover:border-slate-700 duration-500
                  md:hover:bg-white md:hover:border-4 md:hover:text-black
                  md:w-[7rem] md:h-[5rem]  transtion ease-in-out p-1 text-xl
                  bg-slate-700 md:text-2xl font-bold text-yellow-50
                  ">
              Back
            </button>
          </Link>

          <button
            onClick={handleDownload}
            className="  flex-1 justify-center  duration-400 items-center w-full  h-10 transition 
             md:hover:border-slate-700 duration-500
                md:hover:bg-white md:hover:border-4 md:hover:text-black p-2
                md:w-[7rem] md:h-[5rem]    transtion ease-in-out 
              bg-slate-700 text-lg font-bold text-yellow-50
              ">
            Download as PDF
          </button>
        </div>
        <div
          ref={pdfRef}
          className="bg-slate-700  md:max-w-[50rem]  text-white  px-2 pb-2 w-full ">
          <div className="flex justify-between">
            <section className="text-start p-1 drop-shadow-md leading-8">
              <h1 className="text-3xl drop-shadow-md">Erdi Haciogullari</h1>
              <p className="word-break leading-8">
                Software Engineer/Frontend Developer
              </p>
              <p className="leading-8 text-gray-300 text-[12px]">
                Los Angeles, California
              </p>
            </section>

            <section className="flex justify-center p-auto items-center  md:mr-10">
              <span
                id="resume-icon"
                className="h-fit w-fit font-bold rounded p-1
                 
            bg-white text-orange-700 text-3xl">
                eH
              </span>
            </section>
          </div>
          <div
            id="resume-columns"
            className=" flex flex-col md:flex-row font-light">
            <section className=" bg-white w-full md:w-[50%] text-black ">
              <div className=" flex flex-col px-2 text-[14px] items-start">
                <p className="font-semibold">
                  Portfolio:{' '}
                  <a
                    rel="noreferrer"
                    className="italic text-blue-400 underline"
                    target="_blank"
                    href="https://www.erdiha.com">
                    https://www.erdiha.com
                  </a>
                </p>
                <p className="font-semibold">
                  Github:{' '}
                  <a
                    rel="noreferrer"
                    className="italic text-blue-400 underline"
                    target="_blank"
                    href="https://github.com/Erdiha">
                    GitHub
                  </a>
                </p>
                <p className="font-semibold">
                  Email:{' '}
                  <a
                    className="italic text-blue-400 underline"
                    href="mailto:erdihaci@g.ucla.edu">
                    erdihaci@g.ucla.edu
                  </a>
                </p>
                <p className="font-semibold">
                  Phone:{' '}
                  <span className="italic text-blue-400 ">
                    +1(323) 533-9854
                  </span>
                </p>
              </div>
              <hr className="border-[3px] mx-2  my-1 border-gray-300" />
              <div className="w-full  items-start px-2">
                <p className="font-bold text-[14px] text-start">SUMMARY</p>
                <ul className="text-start pl-5 text-[14px]">
                  <li className="list-disc">
                    Over 13 years successful experience in service, sales, and
                    academic environments.
                  </li>
                  <li className="list-disc">
                    Strong work ethic, fast learner, effective as an individual
                    contributor and team player.
                  </li>
                  <li className="list-disc">
                    Detail focused and creative problem solver.
                  </li>
                  <li className="list-disc">
                    Customer service oriented, effective in multi-lingual and
                    multi-cultural environments.
                  </li>
                </ul>
              </div>
              <hr className="border-[3px] mx-2 my-1 border-gray-300" />
              <div className="text-start px-2 ">
                <p
                  className="font-bold 
              text-[14px] text-start">
                  EXPERIENCE/VOLUNTEER WORK
                </p>
                <i className="font-semibold text-gray-700  text-[12px]">
                  NASA-California Space Grant Consortium, LACC Undergraduate
                  Research Program
                </i>
                <p className=" text-gray-500 leading-normal text-[12px]">
                  June 2019-August 2019
                </p>
                <ul className="text-[14px] pl-5">
                  <li className="list-disc">
                    Learned and applied basic safety procedures for an
                    engineering fabrication lab.
                  </li>
                  <li className="list-disc">
                    Successfully used basic computer aided design CAD) and 3-D
                    printing.
                  </li>
                  <li className="list-disc">
                    Created simple electronic circuits using Arduinos.
                  </li>
                  <li className="list-disc">
                    As a team member, developed an indoor GPS.
                  </li>
                </ul>
                <hr className="border-[1px]  mx-2 my-1  border-gray-300" />
                <i className="font-semibold text-gray-700 text-[14px]">
                  Airbnb
                </i>
                <p className=" text-gray-500 leading-normal text-[12px]">
                  April 2011-September 2015
                </p>
                <ul className="text-[14px] pl-5 ">
                  <li className="list-disc">
                    Rented two rooms in central Istanbul, hosting over 400
                    guests from across the globe.
                  </li>
                  <li className="list-disc">
                    Rated top Istanbul Airbnb host by customers.
                  </li>
                  <li className="list-disc">
                    Demonstrated leadership, time management, multi-tasking, and
                    property management skills.
                  </li>
              </ul>
                <hr className="border-[1px] border-gray-300 m-2" />
                <i className="font-semibold  text-[13px]  text-gray-700">
                  DOMA Project
                </i>
                <p className=" text-gray-500 leading-normal text-[12px]">
                  2012-2015
                </p>
                <ul className="text-[14px] pl-5 p-1">
                  <li className="list-disc">
                    Advocated in support of same sex marriage through the repeal
                    of the Defense of Marriage Act
                  </li>
                </ul>
              </div>
              <hr className="border-[3px] mx-2 my-1 border-gray-300" />
              <div className="px-2 py-1 ">
                <p className=" tracking-wide font-bold text-[14px] text-start">
                  SKILLS
                </p>
              </div>
              <div className="grid pb-2  w-full grid-cols-4 gap-1 text-center px-2 tracking-wide text-[12px]">
                {createSkills()}
              </div>
            </section>

            <section className="w-full md:w-[50%] drop-shadow-md text-start text-white  bg-black ">
              <div className="text-start px-2 py-0]">
                <p
                  className="font-bold 
              text-[14px] mt-1 text-start">
                  EDUCATION
                </p>
                <p className="italic font-bold text-gray-300 text-[14px]">
                  UCLA <br />
                  <span className="font-semibold text-[12px] text-gray-300">
                    September 2019-June 2022 | <i>Engineering</i>
                    <br />
                    Major:
                    <em className="font-semibold text-[12px]">
                      BS in Computer Science
                    </em>
                  </span>{' '}
                </p>

                <hr className="border-[1px] my-1  border-gray-500" />
                <p className="italic font-bold text-gray-300 text-[14px]">
                  LACC <br />
                  <span className="font-semibold text-[12px] text-gray-300">
                    January 2016-June 2019 | <i>Transfer</i> <br />
                    Major:
                  </span>{' '}
                  <em className="font-semibold text-[12px]">
                    Computer Science Transfer{' '}
                  </em>
                </p>

                <hr className="border-[1px] m-0 my-1 border-gray-500" />
                <p className="italic font-bold text-gray-300 text-[14px]">
                  UDEMY
                  <br />
                  <span className="font-semibold text-[12px]">
                    June 2022-July 2022 | <i>Complete WebDev Bootcamp</i> <br />
                    July 2022-August 2022 | <i>Mastering TypeScript</i>
                  </span>
                </p>
              </div>
              <hr className="border-[3px] mx-2 my-1 border-gray-500" />
              <div>
                <p className="font-bold p-2  text-[20px] text-start">
                  PROJECTS
                </p>
                {allProj?.map((proj: any, index: number) => {
                  return (
                    <>
                      <div key={index} className="p-2">
                        <a
                          className="italic font-semibold text-gray-200"
                          href="">
                          {proj.title}
                        </a>
                        <p className="italic text-[11px] pb-1">
                          {techUsed[index]}
                        </p>
                        <p className="text-[13px] leading-5 tracking-wider">
                          {proj.description}
                        </p>
                        <span className="px-1 text-[10px] flex fex-col gap-2 italic">
                          <span>
                            website <br />
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={proj.link}>
                              {proj.link}
                            </a>
                          </span>
                          <span>
                            code <br />
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={proj.code}>
                              {proj.code}
                            </a>
                          </span>
                        </span>
                      </div>
                      <hr
                        className={` ${
                          index >= allProj.length - 1
                            ? 'border-none'
                            : 'border-[1px]'
                        }  border-gray-500 m-1 `}
                      />
                    </>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default resume;
