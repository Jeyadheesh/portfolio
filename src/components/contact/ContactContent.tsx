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

        <div className="borde m-auto h-auto w-[50vw] border-white ">
          <div
            className="relative rounded-xl border-4 border-priClr p-7 
          
          "
          >
            {/* after:absolute after:-top-1 after:left-0  after:h-[calc(100%+16px)] after:w-[calc(100%-10px)]  after:bg-white after:content-['']  */}

            {/*  */}
            <div className="flex flex-col gap-10">
              {/* <div className="mx-auto flex w-8/12 flex-col gap-1 text-lg">
                <h1 className="text-xl font-semibold">Name</h1>
                <input
                  type="text"
                  className="border-2 border-priClr bg-transparent p-2 outline-none transition-all  duration-100 focus:border-b-4 focus:border-e-4 focus:border-e-priClr"
                />
              </div> */}
              {/*  */}
              <div className="w group relative z-0 mx-auto mb-5 w-8/12 text-lg">
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
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-lg font-semibold duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-priClr rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Name
                </label>
              </div>
              <div className="w group relative z-0 mx-auto mb-5 w-8/12 text-lg">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="focus:border-4-priClr peer block w-full appearance-none border-0 border-b-2 border-priClr bg-transparent    py-2.5 text-lg focus:border-b-4 focus:border-priClr focus:outline-none focus:ring-0 "
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-lg font-semibold duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-priClr rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Email
                </label>
              </div>
              <div className="w group relative z-0 mx-auto mb-5 w-8/12 text-lg">
                <input
                  type="text"
                  name="message"
                  id="message"
                  className="focus:border-4-priClr peer block w-full appearance-none border-0 border-b-2 border-priClr bg-transparent py-2.5 text-lg focus:border-b-4 focus:border-priClr focus:outline-none focus:ring-0 "
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-lg font-semibold duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-priClr rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Message
                </label>
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
