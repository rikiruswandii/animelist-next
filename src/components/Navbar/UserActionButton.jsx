
import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"


const UserActionButton = async() => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
      <>
        <Link
          href="/users/dashboard"
          className="md:text-md px-1 py-2 hover:font-bold transition-all border border-collapse border-color-accent text-color-accent border-opacity-10 rounded"
        >
          Dashboard
        </Link>
        <Link
          href={actionURL}
          className="md:text-md px-1 py-2 text-nowrap hover:font-bold transition-all border border-collapse border-color-accent text-color-accent border-opacity-10 rounded"
        >
          {actionLabel}
        </Link>
      </>
    );
}

export default UserActionButton