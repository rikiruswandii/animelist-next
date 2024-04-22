import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    
    return (
        <div className="px-4 py-4 flex justify-between items-center md:mx-10">
            <h1 className="md:text-xl text-md font-semibold text-color-secondary">
                {title}
            </h1>
            {
            linkHref && linkTitle ? 
            <Link href={linkHref} 
            className="md:text-md text-sm hover:font-semibold text-color-accent transition-all border-collapse border-b border-t border-color-accent border-opacity-10">
                {linkTitle}
            </Link> : null
            }
        </div>
    )
}

export default Header