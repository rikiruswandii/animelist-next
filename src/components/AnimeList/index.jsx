import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api, name, index }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 md:mx-10">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/page/${name}/${anime.mal_id}`}
            key={anime.mal_id}
            className="cursor-pointer text-color-secondary bg-color-primary hover:text-color-accent transition-all shadow border-color-secondary rounded"
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              priority={true}
              className="w-full max-h-64 object-cover rounded-t"
            ></Image>
            <h3 className="font-semibold md:text-md text-sm p-4 hover:font-bold">
              {anime.title ? anime.title : anime.name}
            </h3>
          </Link>
        );
      })}
    </div>
  )
}

export default AnimeList
