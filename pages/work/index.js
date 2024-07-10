import React, { useState } from "react";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Designed and developed an interactive portfolio website using React, showcasing my skills and projects. The website features a modern and responsive design. The project section presents GitHub links and demo for each project.",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Google Sheets API",
        "SHADCN",
      ],
      color: "purple",
      links: {
        github: "https://github.com/your-portfolio-github-link",
        demo: "https://your-portfolio-demo-link",
      },
    },
    {
      id: 2,
      title: "NeelState",
      description:
        "Crafted NeelState, a dynamic CRUD application for property management. Facilitates property listings for rent or sale with secure user authentication and data encryption. Engineered with React, Express, Redux, MongoDB, and Tailwind CSS for scalability and optimal user experience.",
      stack: ["React", "Express", "Redux", "MongoDB", "Tailwind CSS"],
      color: "purple",
      links: {
        github: "https://github.com/your-neelstate-github-link",
        demo: "https://your-neelstate-demo-link",
      },
    },
    {
      id: 3,
      title: "Hola Website Builder",
      description:
        "Hola is an ongoing project that aims to provide a website builder for businesses to create websites with custom subdomains. It includes user and sub-user management and offers unique subscription plans. This platform simplifies website creation and helps businesses manage their online presence effectively.",
      stack: ["React", "Express", "MongoDB", "Tailwind CSS"],
      color: "purple",
      links: {
        github: "https://github.com/your-hola-github-link",
        demo: "https://your-hola-demo-link",
      },
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (projectId) => {
    setActiveProject(projectId === activeProject ? null : projectId);
  };

  return (
    <div className="text-white min-h-screen flex justify-center z-50">
      <div className="max-w-3xl w-full mt-10 pt-5 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="flex justify-between mb-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleClick(project.id)}
              className={`${
                activeProject === project.id
                  ? "bg-red-500 hover:bg-red-700"
                  : "bg-purple-500 hover:bg-purple-700"
              } text-white py-2 px-4 rounded-lg font-bold transition duration-300`}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className="relative">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                activeProject === project.id ? "block" : "hidden"
              } absolute top-0 left-0 right-0 bg-${
                project.color
              }-900 rounded-lg shadow-lg overflow-hidden mb-8 transition duration-300`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>

                <div className="flex space-x-4 mb-4">
                  {project.stack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-purple-800 text-white font-bold py-1 px-4 rounded-full text-sm uppercase"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-bold transition duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-bold transition duration-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
