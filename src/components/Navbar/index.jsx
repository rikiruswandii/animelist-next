import Link from "next/link"
import InputSearch from "./inputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = ({ metadata }) => {
  return (
    <div className="bg-color-primary border-collapse border-b border-color-secondary border-opacity-10 md:mx-10">
      <div className="flex md:flex-row flex-col justify-between items-center p-4 gap-2">
        <Link href="/" className="text-color-accent text-2xl" dangerouslySetInnerHTML={{ __html: metadata.title }}></Link>
        <div className="flex gap-3">
          <InputSearch />
          <div className="flex sm:flex-row justify-center items-center gap-1">
            <UserActionButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar