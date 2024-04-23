import Link from "next/link"

const ButtonCharacterPage = ({ name }) => {
  return (
    <>
      <Link
        href={`/characters`}
        className="md:text-md md:ml-3 px-1 py-2 hover:font-bold transition-all border border-collapse border-color-accent text-color-accent border-opacity-10 rounded"
      >
        {name}
      </Link>
    </>
  )
}

export default ButtonCharacterPage

