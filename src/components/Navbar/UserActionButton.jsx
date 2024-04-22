
import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"


const UserActionButton = async() => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
        <>  
            <Link href="/users/dashboard" className="md:text-2xl px-1">Dashboard</Link>
            <Link href={actionURL} className="md:text-2xl text-nowrap px-1" >{actionLabel}</Link>
        </>
    )
}

export default UserActionButton