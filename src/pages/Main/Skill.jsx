// import React from 'react'
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoVisualStudio,
  BiLogoPostgresql,
  BiLogoNodejs,
} from "react-icons/bi";
import { CgGitPull } from "react-icons/cg";
import { GrGithub, GrMysql } from "react-icons/gr";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";


const Skill = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5 px-11">Skill</h2>
      </div>

      <div className="mx-10 sm:mx-36 flex flex-col gap-1">
        <h3 className="text-slate-600 font-bold text-xl mb-7">Tech stack</h3>
        <div className="bg-transparent border-l-2 px-10 border-gray-500">
          <div className="w-full flex items-center flex-wrap gap-5 justify-center sm:justify-start">
            <div className="w-52">
              <li className="flex text-white items-center border rounded-xl gap-1 px-10 sm:px-19 h-20 hover:bg-slate-600">
                <AiFillHtml5 className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  HTML
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white items-center border rounded-xl gap-1 px-10 sm:px-19 h-20 hover:bg-slate-600">
                <FaCss3Alt className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  CSS
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white items-center border rounded-xl gap-2 px-16 sm:px-19 h-20 justify-between hover:bg-slate-600">
                <RiJavascriptFill className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  JavaScript
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white items-center border rounded-xl gap-1 px-16 sm:px-19 h-20 justify-between hover:bg-slate-600">
                <BiLogoNodejs className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  Node.Js
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-10 sm:mx-36 flex flex-col gap-1 mt-10">
        <h3 className="text-slate-600 font-bold text-xl mb-7">Tools</h3>
        <div className="bg-transparent border-l-2 px-10 border-gray-500">
          <div className="w-full flex items-center flex-wrap gap-5 justify-center sm:justify-start">
            <div className="w-52">
              <li className="flex text-white gap-2 items-center border rounded-xl px-10 sm:px-19 h-20 hover:bg-slate-600">
                <CgGitPull className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  Git
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white gap-2 items-center border rounded-xl px-10 sm:px-19 h-20 hover:bg-slate-600">
                <GrGithub className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  GitHub
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white gap-2 items-center border rounded-xl px-10 sm:px-19 h-20 hover:bg-slate-600">
                <GrMysql className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  MySql
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white gap-2 items-center border rounded-xl px-10 sm:px-19 h-20 hover:bg-slate-600">
                <BiLogoVisualStudio className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  VisualStudioCode
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white gap-2 items-center border rounded-xl px-10 sm:px-19 h-20 hover:bg-slate-600">
                <BiLogoPostgresql className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  Postgresql
                </span>
              </li>
            </div>
            <div className="w-52">
              <li className="flex text-white gap-2 items-center border rounded-xl px-10 sm:px-19 h-20 hover:bg-slate-600">
                <FiFigma className="icons" size={30} />
                <span className="flex items-center justify-center flex-grow">
                  Figma
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
