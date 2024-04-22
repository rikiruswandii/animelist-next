import Link from "next/link"
import InputSearch from "./inputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    
    return (
        <div className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">MikeuAniimee</Link>
                <div className="flex gap-1">
                    <InputSearch />
                <div className="flex sm:flex-row justify-center items-center gap-1">
                    <UserActionButton/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar