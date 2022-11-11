import React, { useState } from 'react';

interface IForm{
  email: string;
  subject?: string;
  message: string;
}
function contact() {
  const [userInfo, setUserInfo]: any = useState<IForm>();
  const handleOnChange = (e: any) => {
    const {value,id} = e.target
    //console.log(id)
    setUserInfo((prev: any) => {
      return {...prev,[id]:value}
    })
  }
  console.log(userInfo)
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center w-full
      md:mx-auto py-12  ">
        <section className="bg-white md:max-w-[50%] shadow-lg ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Want to send feedback about a feature? Need details about
              Projects? For anything else please,
              <span> Get In Touch.</span>
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleOnChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm
                 rounded-lg focus:ring-primary-500 focus:border-primary-500 block
                  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                    dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900
               dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                 border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                    dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  onChange={handleOnChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-custom-black rounded-lg 
              bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none bg-slate-300
              focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700
              dark:focus:ring-primary-800">
                Send message
              </button>
            </form>
          </div>
        </section>
      </section>
      <section className=" w-full h-[10rem] flex text-[20px]
       text-slate-900 
        justify-center items-center">
       
      <p className="w-fit border-t-[1px] border-custom-white">  &copy; All rights reserved</p>
      </section>
    </>
  );
}

export default contact