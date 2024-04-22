import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="text-color-secondary pt-4 px-4">
            <h3 className="">DASHBOARD</h3>
            <p>Welcome, {user.name}</p>
            <Image src={user.image} alt="..." priority={true} width={250} height={250} />
        </div>
    )
}

export default Page