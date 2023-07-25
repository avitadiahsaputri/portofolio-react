// import React from 'react'
import gambar1 from "../../public/pg1.png";
import { AiFillGithub, AiFillLinkedin,} from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section className="pb-10 pt-12">
      <div className="w-4/5 m-auto flex flex-col sm:flex-row gap-5 bg-slate-900 rounded-xl">
        <div className="flex flex-col items-center sm:items-start justify-center">
          <div className="flex-shrink-0 w-48 h-48 object-cover rounded-full">
            <img
              className="flex p-1 flex-shrink-0 sm:flex-shrink"
              src={gambar1}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="text-center sm:my-4 sm:text-left">
            <h3 className="font-bold text-3xl">
              About<span className="text-slate-600"> Me</span>
            </h3>
          </div>
            <div className="text-gray-900 text-2xl  sm:my-0">Hallo semua..</div>
          <div className="text-sm md:text-xl text-center sm:text-left text-slate-400 my-4">
            Saya adalah Avita Diah Saputri, mahasiswa D3 jurusan Manajemen
            Informatika di Universitas Nasional PASIM Bandung dan saya junior
            Backend Developer. Saya memiliki minat yang besar dalam pengembangan
            web dan senang menghadapi tantangan dalam menciptakan solusi
            kreatif. Saya selalu bersemangat untuk belajar hal-hal baru dan
            terus mengembangkan keterampilan saya dalam teknologi web.
          </div>

          <div className="flex justify-center sm:justify-start mt-5">
            <a href="https://github.com/avitadiahsaputri" className="mr-3 mb-2">
              <AiFillGithub size={25} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/avitadiah28"
              className="mr-3 mb-2"
            >
              <AiFillLinkedin size={25} className="text-white" />
            </a>
            <a
              href="https://figma.com/your-figma-profile"
              className="mr-3 mb-2"
            >
              <FiFigma size={25} className="text-white" />
            </a>
            <a href="https://www.instagram.com/ativa_28" className="mb-2">
              <FaInstagram size={25} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
