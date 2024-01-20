import Image from "next/image";
import React from "react";
import Github from "/githubSvg.svg";

type Props = {};

const ContactContent = (props: Props) => {
  return (
    <div>
      <div>
        <h1 className="p-5 text-center text-5xl font-bold">Contact</h1>
      </div>

      <div className="flex gap-5">
        {/* <div className="relative h-[60vh] w-[50vw] border border-white bg-white">
          <div className="block h-full w-full">
            <Image
              alt="image"
              fill
              className="object-contain"
              src={"/contact.png"}
            />
          </div>

         
          <div className="mx-auto flex w-fit gap-3">
            <div className="flex gap-3">
              <Image alt="Github" width={30} height={30} src="/githubSvg.svg" />
              <h1>Github</h1>
            </div>
            <div className="flex gap-3">
              <Image
                alt="Github"
                width={30}
                height={30}
                src="/linkedinSvg.svg"
              />
              <h1>LinkedIn</h1>
            </div>
          </div>
        </div> */}

        <div className="borde  m-auto h-auto  w-[50vw] border-white">
          <div className="hover:shado relative rounded-xl border-4 border-priClr p-7 hover:shadow-priClr">
            {/* after:absolute after:-top-1 after:left-0  after:h-[calc(100%+16px)] after:w-[calc(100%-10px)]  after:bg-white after:content-['']  */}

            {/*  */}
            <div className="flex flex-col gap-5">
              {/*  */}
              {/* <div className="w group relative z-0 mx-auto mb-5 w-8/12 text-lg">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:border-4-priClr peer block w-full appearance-none border-0 border-b-2 border-priClr bg-transparent    py-2.5 text-lg focus:border-b-4 focus:border-priClr focus:outline-none focus:ring-0 "
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-lg font-semibold duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-priClr rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Name
                </label>
              </div> */}

              {/* Main */}
              <div className="mx-auto w-8/12 text-lg">
                <label
                  htmlFor="name"
                  className="mb-2 block text-lg font-semibold text-white"
                >
                  Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    {/* <div className="relative h-5 w-5">
                      <Image alt="image" fill className="" src={"/user1.svg"} />
                    </div> */}
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-lg border-2  border-gray-400 bg-gray-800 p-2.5 ps-10 text-white placeholder-gray-400 outline-none focus:border-2 focus:border-priClr focus:shadow focus:shadow-priClr focus:ring-blue-500"
                    placeholder="name"
                  />
                </div>
              </div>

              <div className="mx-auto w-8/12 text-lg">
                <label
                  htmlFor="email"
                  className="mb-2 block text-lg font-semibold text-white"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border-2  border-gray-400 bg-gray-800 p-2.5 ps-10 text-white placeholder-gray-400 outline-none focus:border-2 focus:border-priClr focus:shadow focus:shadow-priClr focus:ring-blue-500 "
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="mx-auto w-8/12 text-lg">
                <label
                  htmlFor="message"
                  className="mb-2 block text-lg font-semibold text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full resize-none rounded-lg  border-2 border-gray-400 bg-gray-800 p-2.5 text-white placeholder-gray-400 outline-none focus:border-2 focus:border-priClr focus:shadow focus:shadow-priClr focus:ring-priClr "
                  placeholder="Message..."
                ></textarea>
              </div>

              <button className=" mx-auto w-fit rounded-lg border border-white p-3 px-7">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <Image alt="Github" width={30} height={30} src="/githubSvg.svg" />
            <h1>Github</h1>
          </div>
          <div className="flex gap-3">
            <Image alt="Github" width={30} height={30} src="/linkedinSvg.svg" />
            <h1>LinkedIn</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
