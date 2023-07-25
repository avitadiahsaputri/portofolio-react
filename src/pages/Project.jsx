// import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import '../App.css'

const Project = () => {
  const Project = [
    {
      id: 1,
      img: "/perpustakaan.png",
      link: "https://github.com/avitadiahsaputri/project-perpustakaan.git",
      name: "perpustakaan",
      addtion: "node.js,html,css,javascript",
      dectiption:
        "aplikasi sederhana pertama saya di fundamental Node.js, sebuah aplikasi perpustakaan dengan fitur CRUD dan berisi tentang buku dan anggota perpustakaan",
    },
    {
      id: 2,
      img: "/iventory-gudang.png",
      link: "https://github.com/avitadiahsaputri/iventory-gudang.git",
      name: "iventory gudang",
      addtion: "node.js,html,css,javascript",
      dectiption:
        "aplikasi sederhana saya di fundamental lanjutan Node.js sebuah aplikasi tentang stok barang dangan fitur CRUD",
    },
    {
      id: 3,
      img: "/Portofolio.png",
      link: "https://github.com/avitadiahsaputri/portofolio-react",
      name: "portofolio",
      addtion: "react.js,talwinds",
      dectiption:
        "Portofolio sederhana pertama saya yang dibuat menggunakan React.js dasar yang berisi tentang About,project dan contact",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold my-5 text-center text-slate-700">
        Past Project Experience
      </h2>
      <div className="flex flex-wrap justify-center ">
        {Project.map((project) => (
          <div
            key={project.id}
            className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-400 mx-4 mb-4"
          >
            <div className="px-4 py-2">
              <img
                src={project.img}
                alt={project.name}
                className="h-48 w-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 text-base sm:text-lg font-bold p-2">
                {project.name}
              </p>
              <div className=" px-2 py-1 flex  gap-2 right-0 ">
                <div className="flex right-0">
                  <a href={project.link}>
                    <AiFillGithub size={20} className="text-slate-900" />
                  </a>
                </div>
                <p className="text-yellow-800  items-centertext-base">{project.addtion}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-base">{project.dectiption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project