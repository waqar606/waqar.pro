// import { AiFillAppstore } from "react-icons/ai";
// import { FaMobile, FaGlobe } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { SiDjango } from "react-icons/si";
const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 ">
          <Card
            title="React.js Dev"
            des="A React.js developer builds dynamic web interfaces with reusable components and efficient state management."
            icon={<FaReact />}
          />
          <Card
            title="Backend Dev"
            des="A Django backend developer builds scalable web applications, managing server-side logic, databases, and APIs."
            icon={<SiDjango />}
          />
          {/* <Card
            title="SEO Optimisation"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    hic consequuntur eum repellendus ad."
            icon={<SiProgress />}
          /> */}
          <Card
            title="Full Stack Dev"
            des="A full stack developer builds web applications using React.js, and Django, handling both front-end and back-end development."
            icon={<CgWebsite />}
          />
          <Card
            title="UX Design"
            des="A UI designer in Figma creates visually appealing, user-friendly interfaces focused on layout and interaction design"
            icon={<SiAntdesign />}
          />
          {/* <Card
            title="Hosting Websites"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    hic consequuntur eum repellendus ad."
            icon={<FaGlobe />}
          /> */}
        </div>
      </FadeIn>
    </section>
    // <section
    //   id="features"
    //   className="w-full py-20 border-b-[1px] border-b-gray-700"
    // >
    //   <FadeIn>
    //     <Title title="Features" des="What I Do" />
    //     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
    //       <Card
    //         title="Business Stratagy"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    //   hic consequuntur eum repellendus ad."
    //         icon={null}
    //       />
    //       <Card
    //         title="App Development"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    //   hic consequuntur eum repellendus ad."
    //         icon={<AiFillAppstore />}
    //       />
    //       <Card
    //         title="SEO Optimisation"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    //   hic consequuntur eum repellendus ad."
    //         icon={<SiProgress />}
    //       />
    //       <Card
    //         title="Mobile Development"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    //   hic consequuntur eum repellendus ad."
    //         icon={<FaMobile />}
    //       />
    //       <Card
    //         title="UX Design"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    //   hic consequuntur eum repellendus ad."
    //         icon={<SiAntdesign />}
    //       />
    //       <Card
    //         title="Hosting Websites"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
    //   hic consequuntur eum repellendus ad."
    //         icon={<FaGlobe />}
    //       />
    //     </div>
    //   </FadeIn>
    // </section>
  );
};

export default Feature;
