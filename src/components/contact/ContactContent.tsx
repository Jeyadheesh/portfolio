"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Github from "/githubSvg.svg";
import { links } from "./ContactData";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Variants, motion } from "framer-motion";
import TooltipLink from "../elements/TooltipLink";

type Props = {};

const ContactContent = (props: Props) => {
  var templateParams = {
    from_name: "",
    email: "",
    message: "",
  };
  const [mailparams, setMailparams] = useState(templateParams);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (keyy: string, val: string) => {
    setMailparams((prev) => {
      return { ...prev, [keyy]: val };
    });
  };

  const errorNotify = (msg: string) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 2000,
      // theme: "dark",
    });
  };
  const successNotify = (msg: string) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 2000,
      // theme: "dark",
    });
  };

  const sendEmail = async () => {
    try {
      setIsLoading(true);
      let iserror = false;
      const isEmpty = Object.values(mailparams).forEach((m) => {
        if (m === "" || /^\s*$/.test(m) == true) {
          iserror = true;
        }
      });

      if (iserror) {
        // console.log(iserror);
        errorNotify("Enter Valid Inputs 🐻‍❄️");
        setIsLoading(false);
        return;
      }

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLICID,
      );
      // console.log(response.status);
      if (response.status == 200) {
        successNotify("Email Sent 👍");
        setIsLoading(false);
      } else {
        errorNotify("Something wrong 😥. Try Later ");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      errorNotify("Something went wrong!😶");
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log(mailparams);
  // }, [mailparams]);

  const arrow: Variants = {
    initial: { rotate: -45 },
    animate: { rotate: 0, translateX: "100%" },
  };

  const move = {
    initial: { translateX: 0 },
    animate: { translateX: 100 },
  };

  return (
    <div className="">
      <div>
        <h1 className="p-5 text-center text-5xl font-bold">Contact</h1>
      </div>

      <ToastContainer />

      <div className="mb-5 mt-3 flex justify-center gap-20">
        {links.map((data, i) => {
          return (
            <TooltipLink
              key={i}
              image={data.image}
              link={data.linkUrl}
              name={data.name}
              size="h-10 w-10 "
            />
          );
        })}

        {/* <div className="flex gap-3">
          <div className="relative h-10 w-10">
            <Image alt="Github" fill className="" src="/location1.svg" />
          </div>
          <h1 className="my-auto text-lg font-semibold">
            Madurai,TamilNadu - India
          </h1>
        </div>
        <div className="flex gap-3">
          <Image
            alt="Github"
            className="text-white "
            width={30}
            height={30}
            src="/email1.svg"
          />
          <h1>Madurai, &nbsp; TamilNadu - India</h1>
        </div> */}
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
          <div className="boxShadow relative rounded-xl border-4 border-priClr bg-gradient-to-br  p-7 transition-all duration-150 hover:shadow-priClr">
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
                    value={mailparams.from_name}
                    onChange={(e) => onInputChange("from_name", e.target.value)}
                    type="text"
                    id="name"
                    className="block w-full rounded-lg border-2  border-gray-400 bg-gray-800 p-2.5 ps-10 text-white placeholder-gray-400 outline-none focus:border-2 focus:border-priClr focus:shadow-md focus:shadow-priClr focus:ring-blue-500"
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
                    value={mailparams.email}
                    onChange={(e) => onInputChange("email", e.target.value)}
                    className="block w-full rounded-lg border-2  border-gray-400 bg-gray-800 p-2.5 ps-10 text-white placeholder-gray-400 outline-none focus:border-2 focus:border-priClr focus:shadow-md focus:shadow-priClr focus:ring-blue-500 "
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
                  value={mailparams.message}
                  onChange={(e) => onInputChange("message", e.target.value)}
                  className="block w-full resize-none rounded-lg  border-2 border-gray-400 bg-gray-800 p-2.5 text-white placeholder-gray-400 outline-none focus:border-2 focus:border-priClr focus:shadow-md focus:shadow-priClr focus:ring-priClr "
                  placeholder="Message..."
                ></textarea>
              </div>

              {!isLoading ? (
                <motion.button
                  initial="initial"
                  animate="initial"
                  whileHover="animate"
                  // type="submit"
                  onClick={sendEmail}
                  className="mx-auto flex w-32 items-center justify-center  gap-2 overflow-hidden rounded-lg bg-priClr py-3 transition-all duration-150 hover:scale-105 hover:shadow hover:shadow-priClr active:scale-100"
                >
                  <motion.div variants={arrow} className="relative h-7 w-7">
                    <Image alt="send" src={"/send1.svg"} fill className="" />
                  </motion.div>
                  <motion.div variants={move} className="font-semibold ">
                    Send
                  </motion.div>
                </motion.button>
              ) : (
                <button
                  // type="submit"
                  disabled
                  className="mx-auto w-fit rounded-lg border border-white p-3 px-7"
                >
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-b-2 border-white border-b-transparent"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
