//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full max-w-[737px] max-h-[678px] relative">
      <div className="aspect-[737/678] max-h-full w-full">
        <Image src={'/avatar.png'} layout="fill" objectFit="contain" alt="" />
      </div>
    </div>
  );
};

export default Avatar;

