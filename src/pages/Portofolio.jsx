// import React from "react";
import Project from "./Project";

const Portofolio = () => {
  const Certifikat = [
    {
      id: 1,
      img: "/Avita Github.jpg",
      addtion: "Git & GitHub ",
      by: "by: PUB training center",
    },
    {
      id: 2,
      img: "/Avita Web.jpg",
         addtion: "Web",
            by: " by: PUB training center",

    },
    {
      id: 3,
      img: "/Avita Fundamental.jpg",
      
      addtion: "Node.js fundamental",
            by: " by: PUB training center",

    },
    {
      id: 4,
      img: "/Avita Lanjutan.jpg",
      
      addtion: "Node.js lanjutan",
            by: " by: PUB training center",
    },
    {
      id: 5,
      img: "/sertifikat_course_SQL.jpg",
      
      addtion: "SQL",
      by: " by: dicoding",
    },
    {
      id: 6,
      img: "/sertifikat_digoding javaSripct-1.jpg",
      
      addtion: "JavaScript",
      by: " by: dicoding",
    },
  ];

  return (
    <div className="py-20 bg-slate-900 pt-32 pb-20">
      <Project />
      {/* Past Project Experience */}
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-3xl font-bold my-5 text-slate-700 text-center">
          Certificates
        </h2>
        <div className="flex flex-wrap justify-center">
          {Certifikat.map((project) => (
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
              <p className="text-gray-600 text-base sm:text-lg font-bold p-2">
                {project.addtion}
              </p>
              <div className="px-2 py-2 ">
                <p className="text-gray-700 text-base">{project.by}</p>
              </div>
              {/* <div className="h-[2px] bg-slate-300"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portofolio;
