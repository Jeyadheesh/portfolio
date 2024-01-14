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

      <div className="flex">
        <div className="relative h-[60vh] w-[50vw] border border-white bg-white">
          <div className="block h-full w-full">
            <Image
              alt="image"
              fill
              className="object-contain"
              src={"/contact.png"}
            />
          </div>

          {/* Reference */}
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
        </div>

        <div className="borde m-auto h-auto w-[50vw] border-white ">
          <div className="border-4 border-priClr p-7">
            {/*  */}
            <div className="flex flex-col gap-10">
              <div className="mx-auto flex w-8/12 flex-col gap-1 text-lg">
                <h1 className="text-xl font-semibold">Name</h1>
                <input
                  type="text"
                  className=" border-b-2 border-priClr bg-transparent outline-none transition-all  duration-100 focus:border-b-4"
                />
              </div>
              <div className="mx-auto flex w-8/12 flex-col gap-1 text-lg">
                <h1 className="text-xl font-semibold">Email</h1>
                <input
                  type="email"
                  placeholder=""
                  className="border-b-2  border-priClr bg-transparent outline-none transition-all  duration-100 focus:border-b-4"
                />
              </div>
              <div className="mx-auto flex w-8/12 flex-col gap-1 text-lg">
                <h1 className="text-xl font-semibold">Message</h1>
                <textarea
                  readOnly
                  className=" border-b-2 border-priClr bg-transparent outline-none transition-all  duration-100 focus:border-b-4"
                ></textarea>
              </div>

              <button className=" mx-auto w-fit rounded-lg border border-white p-3 px-7">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
