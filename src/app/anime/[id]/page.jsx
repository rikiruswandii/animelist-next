import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async({params: {id}}) => {
    const detailAnime = await getAnimeResponse(`anime/${id}`)
    return (
    <>
    <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">Detail Anime</h3>
    </div>
    <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center border rounded border-color-primary p-1">
            <h3>Peringkat</h3>
            <p>{detailAnime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded border-color-primary p-1"> 
            <h3>Skor</h3>
            <p>{detailAnime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded border-color-primary p-1"> 
            <h3>Anggota</h3>
            <p>{detailAnime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded border-color-primary p-1"> 
            <h3>Episode</h3>
            <p>{detailAnime.data.episodes}</p>
        </div>
    </div>
    <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image src={detailAnime.data.images.webp.image_url}
        alt={detailAnime.data.images.jpg.image_url}
        height={250}
        width={250}
        className="w-full rounded object-cover"
        />
        <p className="text-justify text-2xl">{detailAnime.data.synopsis}</p>
    </div>
    <div>
        <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
    </div>
    </>
    )
}

export default Page