import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) {
        setCard(projectsData.length);
      } else {
        setCard(1);
      }
    };
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden  "
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">
        Projects
        <span className="underline underline-offset-4 decoration-1 under font-light ">
          Completed
        </span>
      </h1>
      <p className=" text-center text-gray-500 mb-8 max-w-80 mx-auto   ">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className=" p-3 bg-gray-200 rounded mr-2   "
          aria-label="Previous"
        >
          <img src={assets.left_arrow} alt="Previous Project" />
        </button>
        <button
          onClick={nextProject}
          className=" p-3 bg-gray-200 rounded mr-2   "
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* project slider */}

      <div className="overflow-hidden ">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out  "
          style={{ transform: `translateX(-${(index * 100) / card}%)` }}
        >
          {projectsData.map((p, i) => (
            <div
              key={i}
              className=" relative flex-shrink-0 w-full sm:w-1/4    "
            >
              <img src={p.image} alt="img" className=" w-full h-auto mb-14 " />
              <div className=" absolute left-0 right-0 bottom-5 flex justify-center  ">
                <div className=" inline-block bg-white w-3/4 px-4 py-2 shadow-md    ">
                  <h2 className=" text-xl font-semibold text-gray-800  ">
                    {p.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {p.price}
                    <span>{"  "}</span>
                    {p.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
