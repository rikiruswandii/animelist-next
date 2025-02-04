import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNeastedAnimeResponse, reproduce } from "@/libs/api-libs"


const Page = async () => {

    const topAnime = await getAnimeResponse("top/anime", "limit=8")
    let recomendedAnime = await getNeastedAnimeResponse("recommendations/anime", "entry")
    recomendedAnime = reproduce(recomendedAnime, 4)
    return (
      <>
        {/* populer */}
        <section>
          <Header
            title="Paling Populer"
            linkHref="/popular-anime"
            linkTitle="...lihat Semua"
          />
          <AnimeList api={topAnime} name={`anime`} />
        </section>

        {/* rekomendasi */}
        <section>
          <Header title="Rekomendasi" />
          <AnimeList api={recomendedAnime} name={`anime`} />
        </section>
      </>
    );
}

export default Page