import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


const Footer = ({mysite}) => {
  return (
    <div className="flex md:flex-wrap md:mx-10 mt-6 py-4 border-collapse justify-between items-center border-t border-color-accent border-opacity-10 max-h-20">
      <div className="flex text-color-accent md:text-md text-sm p-4 gap-1 text-nowrap">
        <h3>Dibuat dengan ❤️ oleh</h3>
        <h3
          className=""
          dangerouslySetInnerHTML={{ __html: mysite.title }}
        ></h3>
        .
      </div>
      <div className="flex justify-center text-color-primary gap-2 p-4">
        <Link href={`#`} className="transition-all bg-color-accent rounded">
          <InstagramLogo size={20} />
        </Link>
        <Link href={`#`} className="transition-all bg-color-accent rounded">
          <FacebookLogo size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
