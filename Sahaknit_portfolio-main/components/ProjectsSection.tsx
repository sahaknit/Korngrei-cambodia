// import React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import SlideUp from "./SlideUp"
// import { BsGithub, BsArrowUpRightSquare, BsLinkedin, BsTelegram,BsBrowserChrome } from "react-icons/bs";



// const projects = [
//   {
//     name: "Kampong Chhnang News",
//     description:
//       "An informational website for the Ministry of Information in Kampong Chhnang Province, Cambodia. Built with WordPress, custom CSS/HTML, and hosted on Hostinger, it provides news, updates, and essential information to the public.",
//     image: "/kapongchnnagenewswebsite.png",
//     github: "https://github.com/hqasmei/thankful-thoughts",
//     linkedin: "https://www.linkedin.com/in/vong-sahaknit-881831244/", // Replace with your LinkedIn profile URL
//     telegram: "https://t.me/@Sahaknit",
//     link: "https://kampongchhnangnews.com/"
//   },
//   {
//     name: "PlatoIO",
//     description: "PlatoIO is a to do list app that built using the PERN stack.",
//     image: "/platoio.png",
//     github: "https://github.com/hqasmei/platoio",
//     link: "https://platoio.com/register",
    
    
//   },
//   {
//     name: "Kator Family Photos",
//     description:
//       "Kator Family Photos is a photos and video digitization service in the LA area.",
//     image: "/familyphotos.png",
//     github: "https://github.com/hqasmei/katorfamilyphotos",
//     link: "https://katorfamilyphotos.com/",
//   },
// ]

// const ProjectsSection = () => {
//   return (
//     <section id="projects">
//       <h1 className="my-10 text-center font-bold text-4xl">
//         Projects
//         <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//       </h1>

//       <div className="flex flex-col space-y-28">
//         {projects.map((project, idx) => {
//           return (
//             <div key={idx}>
//               <SlideUp offset="-300px 0px -300px 0px">
//                 <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
//                   <div className=" md:w-1/2">
//                     <Link href={project.link}>
//                       <Image
//                         src={project.image}
//                         alt=""
//                         width={1000}
//                         height={1000}
//                         className="rounded-xl shadow-xl hover:opacity-70"
//                       />
//                     </Link>
//                   </div>
//                   <div className="mt-8 md:w-1/2">
//                     <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
//                     <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-row align-bottom space-x-4">
//                       <Link href={project.link} target="_blank">
//                         <BsLinkedin
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                       <Link href={project.link} target="_blank">
//                         <BsTelegram
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                       <Link href={project.link} target="_blank">
//                         <BsArrowUpRightSquare
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SlideUp>
//             </div>
//           )
//         })}
        
//       </div>
//     </section>
//   )
// }

// export default ProjectsSection
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare, BsLinkedin, BsTelegram,BsBrowserChrome } from "react-icons/bs"; // Import LinkedIn and Telegram icons

const projects = [
  {
    name: "Kampong Chhnang News",
    duration: "Phnom Penh",
    date: "01 Jun 2025",
    descriptionHeader: "FREELANCE PROJECT",
    description:
      "An informational website designed for the Ministry of Information in Kampong Chhnang Province, Cambodia. Developed using WordPress for seamless content management, with custom UI/UX design implemented through Figma and enhanced with custom CSS/HTML for a polished and user-friendly interface. Hosted on Hostinger , the website delivers news, updates, and essential information to the public, ensuring accessibility, responsiveness, and an engaging user experience.🌐📰",
    image: "/kapongchnnagenewswebsite.png",
    github: "https://github.com/vongsahaknit21",
    link: "https://kampongchhnangnews.com/",
    linkedin: "https://www.linkedin.com/in/vong-sahaknit-881831244/", // Replace with your LinkedIn profile URL
    telegram: "https://t.me/@Sahaknit" // Replace with your Telegram link
  },
  {
    name: "Projectile Motion Simulator",
    duration: "Phnom Penh",
    date: "01 NOV 2019 - 01 NOV 2023",
    descriptionHeader: "Thesis Project",
    description: "Delving into Projectile Motion A thesis and interactive presentation exploring the physics of projectile trajectories using a custom-designed simulator. It breaks down core principles like launch angles, velocity, and external forces with a strong mathematical foundation. The engaging simulations provide a visual, intuitive understanding of these concepts, making it a valuable resource for physics enthusiasts and academic audiences🎮🕹️🚀",
    image: "/thesisproject.png",
    github: "https://github.com/vongsahaknit21",
    link: "https://platoio.com/register",
    linkedin: "https://www.linkedin.com/in/vong-sahaknit-881831244/", // No LinkedIn link for this project
    telegram: "https://t.me/Sahaknit" // No Telegram link for this project
  },
  {
    name: "Vegetable Marketplace Website",
    duration: "Phnom Penh",
    date: "Jun 2023 -Jun 2023",
    descriptionHeader: "FREELANCE PROJECT",
    description:
      "A user-friendly e-commerce platform connecting local farmers with customers to buy fresh vegetables. As the UI/UX designer, I used Figma to create wireframes, prototypes, and a vibrant, modern interface ensuring an intuitive shopping experience. The responsive design prioritizes seamless navigation and accessibility for both farmers and buyers, making it a visually appealing and functional solution for the agricultural community. 🌱",
    image: "/vegetablewebsite.png",
    github: "https://github.com/vongsahaknit21",
    link: "https://www.figma.com/design/QWhrZaMO0QIJFO4pbpYdX2/Vegetable-website?node-id=69-3770&t=nPV3ZRBkMjNimiPS-1",
    linkedin: "https://www.linkedin.com/in/vong-sahaknit-881831244/", // No LinkedIn link for this project
    telegram: "https://t.me/Sahaknit" // No Telegram link for this project
  },
  {
    name: "Luy Lern-Fintech application",
    duration: "Phnom Penh",
    date: "Feb 2023 - Jun 2023",
    descriptionHeader: "YEAR 4 PROJECT SEMESTER 2",
    description:
      "This is a group project for the fourth year andsemester 2 of college. That we work as a team and Ihandle UI/UX design and draw prototype for fintechproject📱💵",
    image: "/Luy_lern.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://www.figma.com/proto/jQq3g9FQLovQO9uKiM07SB/Fintech_project?page-id=0%3A1&node-id=101-3488&p=f&viewport=135%2C11%2C0.2&t=fpZ8pG2bDux5G0JC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=101%3A2083",
    linkedin: "https://www.linkedin.com/in/vong-sahaknit-881831244/", // No LinkedIn link for this project
    telegram: "https://t.me/Sahaknit" // No Telegram link for this project
  },
  {
    name: "ELIB-Mobile Application",
    duration: "Phnom Penh",
    date: "Jan 2021 - Jun 2022",
    descriptionHeader: "YEAR 3 PROJECT",
    description:
      "This is a group project for the third year of college.That we work as a team and I handle UI/UX design.",
    image: "/Elib_project.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://www.figma.com/design/zoJ2mUrcYICI3VFl2TPOJi/ELIB(Book-management-software)?node-id=18-337&t=jteYeSs3yrOxgm2O-1",
    linkedin: "https://www.linkedin.com/in/vong-sahaknit-881831244/", // No LinkedIn link for this project
    telegram: "https://t.me/Sahaknit" // No Telegram link for this project
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
             
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                         {/* Duration and Date */}
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="mr-4">{project.duration}</span>
                    <span>{project.date}</span>
                  </div>

                  {/* Description Header */}
                  <h3 className="text-lg font-semibold text-Black mb-2">
                    {project.descriptionHeader}
                  </h3>                 
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* GitHub Link */}
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {/* Live Demo Link */}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsBrowserChrome
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {/* LinkedIn Link */}
                      {project.linkedin && (
                        <Link href={project.linkedin} target="_blank">
                          <BsLinkedin
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {/* Telegram Link */}
                      {project.telegram && (
                        <Link href={project.telegram} target="_blank">
                          <BsTelegram
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;