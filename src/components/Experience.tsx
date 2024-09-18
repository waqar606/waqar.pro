import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2020 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. React Developer"
            subTitle="Esolace Tech - (2024 - Present)"
            result="Karachi"
            des="As a Junior React Developer at Esolace Tech, you build and maintain user-friendly web applications, focusing on component development and responsive design. You collaborate with the team to implement features and optimize performance."
          />
          <ResumeCard
            title="Web Developer & Software Engineering Intern"
            subTitle="KDA Pakistan - (August 2023 - October 2023)"
            result="Karachi"
            des="As a Web Developer & Software Engineering Intern at KDA Pakistan, you developed web applications and assisted in software engineering tasks, enhancing functionality and performance. You contributed to both front-end and back-end solutions during the internship."
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
