import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const { getAnimeResponse } = require("@/libs/api-libs")

const Page = async() => {
    const charactersAnime = await getAnimeResponse(
      "top/characters",
      "limit=8"
    )
    return (
      <>
        <section>
          <Header
            title="Paling Populer"
            linkHref="/popular-characters"
            linkTitle="...lihat Semua"
          />
          <AnimeList api={charactersAnime} name={`characters`}/>
        </section>
      </>
    )
}

export default Page