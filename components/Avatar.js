//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:block w-full h-full max-w-[737px] max-h-[678px] relative">
      <div className="aspect-[737/678] max-h-full w-full">
        <Image
          src={"/avatar.png"}
          layout="fill"
          objectFit="contain"
          alt="Avatar image"
        />
      </div>
    </div>
  );
};

export default Avatar;
