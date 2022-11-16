import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function contact() {
  const [sent, setSent]: any = useState(false);
  const handleOnChange = (e: any) => {};
  const serviceKey:string = process.env.NEXT_PUBLIC_EMAIL_SERVICE!;
  const templateKey:string = process.env.NEXT_PUBLIC_TEMPLATE!;
  const publicKey:string= process.env.NEXT_PUBLIC_PUBLIC_KEY!;
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceKey,
        templateKey,
        form.current,
        publicKey,
      )
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center w-full p-2 text-custom-white
        transition-all duration-300 ease-in-out  transform
      md:mx-auto pt-10 scroll-mt-[5rem] ">
        <section className="w-full md:w-[30rem] lg:w-[40rem] shadow-lg p-5  bg-custom-gray">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            {sent ? (
              <section className="w-full h-full p-4 grid grid-rows-2 items-center justify-center">
                <h1 className="md:text-4xl text-3xl py-2 mb-4">THANK YOU</h1>
                <h2 className="text-center text-lg">We received your email.</h2>
                <h3 className="text-center text-xl">Have A Great Day!</h3>
              </section>
            ) : (
              <>
                {' '}
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
                  Contact
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center  sm:text-xl">
                 Send feedback about a feature. Ask about my projects.
                 For anything else please,
                  <span> get in touch!</span>
                </p>
                <form
                  ref={form}
                  action="#"
                  className="space-y-8"
                  onSubmit={sendEmail}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium dark:text-gray-300">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleOnChange}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm
                 rounded-lg focus:ring-primary-500 focus:border-primary-500 block
                  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                    dark:shadow-sm-light"
                      placeholder="name@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium 
               dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
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
                      className="block mb-2 text-sm font-medium">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      name="message"
                      onChange={handleOnChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-lg font-medium text-center text-black rounded-lg 
              bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none bg-slate-300
              focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700
              dark:focus:ring-primary-800">
                    Send Email
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </section>

      <section
        className=" w-full h-[8rem] flex text-[20px]
      bg-gradient-to-t from-slate-400 to-white
       text-slate-900 
        justify-center items-center">
        <p className="w-fit h-fit">&copy; All rights reserved</p>
      </section>
    </>
  );
}

export default contact;
