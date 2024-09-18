// import Title from "./Title";
// import ProjectsCard from "./ProjectsCard";
// import { projectOne, projectThree, projectTwo } from "../assets";
// import { FadeIn } from "./FadeIn";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full py-20 border-b-[1px] border-b-gray-700"
//     >
//       <FadeIn>
//         <div className="flex justify-center items-center text-center">
//           <Title
//             title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
//             des="My Projects"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
//           <ProjectsCard
//             title="SOCIAL MEDIA CLONE"
//             des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//             src={projectOne}
//           />
//           <ProjectsCard
//             title="E-commerce Website"
//             des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//             src={projectTwo}
//           />
//           <ProjectsCard
//             title="Chatting App"
//             des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//             src={projectThree}
//           />
//           <ProjectsCard
//             title="SOCIAL MEDIA CLONE"
//             des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//             src={projectThree}
//           />
//           <ProjectsCard
//             title="E-commerce Website"
//             des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//             src={projectOne}
//           />
//           <ProjectsCard
//             title="Chatting App"
//             des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//             src={projectTwo}
//           />
//         </div>
//       </FadeIn>
//     </section>
//   );
// };

// export default Projects;

import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
// import { projectOne, projectThree, projectTwo } from "../assets";
import pizza from "../assets/images/projects/pizza.png";
// import new from "../assets/images/projects/new.png";
import second from "../assets/images/projects/second.png";
import seven from "../assets/images/projects/seven.png";
// import weathers from "../assets/images/projects/weathers.png";
import weather from "../assets/images/projects/weather.png";
import youtube from "../assets/images/projects/youtube.png";
import shop from "../assets/images/projects/shop.png";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="PizzaMax"
            des="Developed a full-featured Pizza Order app using JavaScript and Redux, featuring add-to-cart functionality. The app includes product filtering options for a seamless ordering experience."
            src={pizza}
            githubLink="https://github.com/waqar606/PizMax"
            eyeLink="https://my-pizza-sooty.vercel.app/"
          />
          <ProjectsCard
            title="Weather_Checker"
            des="Developed a weather app using React and Tailwind CSS that provides current weather conditions and a 6-day forecast. It allows users to search and check weather data by country, powered by Rapid API."
            src={weather}
            githubLink="https://github.com/waqar606/Weather"
            eyeLink="https://weather-liart-nine.vercel.app/"
          />
          <ProjectsCard
            title="Youtube_Clone"
            des="Developed a YouTube clone using React, Tailwind CSS, and Rapid API with features like video playback, suggested videos, and a search function. It provides a seamless user experience for exploring and watching content."
            src={youtube}
            githubLink="https://github.com/waqar606/Youtube_Clone"
            eyeLink="https://youtube-clone-amber-three.vercel.app/"
          />
          <ProjectsCard
            title="React_Recipy"
            des="Created a React-based recipe site featuring international
                dishes with detailed recipes, leveraging the DB Meal Free API."
            src={second}
            githubLink="https://github.com/waqar606/React-Recipy"
            eyeLink="https://react-recipy.vercel.app/"
          />
          <ProjectsCard
            title="Phone Mart"
            des="Built a smartphone-selling webstore in React, with a
            Flipkart-like interface and Firebase for real-time inventory and
            secure customer data management."
            src={shop}
            githubLink="https://github.com/waqar606/PhoneMart"
            eyeLink="https://phone-mart.vercel.app/"
          />
          <ProjectsCard
            title="Alzheimer's Detection"
            des="Developed an Alzheimer's detection website featuring user
                authentication and MRI analysis via a deployed ML model on
                Django Rest API."
            src={seven}
            githubLink="https://github.com/waqar606/FYP_Web"
            eyeLink="https://github.com/waqar606/FYP_Web"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
