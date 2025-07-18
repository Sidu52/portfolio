import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Logo: React.FC<{ image: StaticImageData }> = ({ image }) => {
  return (
    <Link href="/">
      <Image
        src={image}
        alt="logo"
        width={50}
        height={50}
       className="w-[60px] h-auto"
        quality={100}
      />
    </Link>
  );
};

export default Logo;
