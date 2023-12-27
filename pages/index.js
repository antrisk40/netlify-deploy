//next image
import Image from "next/image";
import Avatar from "../components/Avatar";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";



//variants

//import {fadeIn} from '../variants';
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/*text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/*tittle */}
          <h1 className="h1">
            Transforming Ideas
            <br /> Into <span className="text-accent">Digital Reality</span>
          </h1>
          {/*subtitle*/}
          <p className="max-w-sm xl:max-w-xl -bottom-20 mx-auto xl:mx-0 mb-10 xl:mb-16">
            Anim ipsum elit fugiat elit ad. Ea sit in cupidatat cillum
            officerit.
          </p>
          {/*button */}
          <div>
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/*image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/*bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/*particles */}
        <div>
          <ParticlesContainer />
        </div>
        {/*avatar img */}
        <div className="w-[50vh] h-[50vh] aspect-ratio fixed bottom-0 right-[17rem] xl:right-500">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
