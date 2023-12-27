//next image
import Image from "next/image";
import { useRouter } from "next/router";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/work");
  };

  return (
    <div
      className="mx-auto xl:mx-0 relative z-50 cursor-pointer"
      onClick={handleButtonClick}
    >
      <div className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 transform translate-x-0 group-hover:translate-x-2" />
      </div>
    </div>
  );
};

export default ProjectsBtn;
