import { getAnimeResponse } from "@/libs/api-libs"
import DetailAnime from "@/components/AnimeList/DetailAnime/DetailAnime"
import DetailCharacter from "@/components/AnimeList/DetailCharacter/DetailCharacter";


const Page = async({params: {dynamic}, params: {id}}) => {
    const detailAnime = await getAnimeResponse(`${dynamic}/${id}`)

    return (
      dynamic === "anime" 
      ?
        <DetailAnime detailAnime={detailAnime} />
      : 
        <DetailCharacter api={detailAnime} />
    )
}

export default Page