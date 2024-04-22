import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import React from "react"
import Image from "next/image"

const Page = async({params: {id}}) => {
    const detailAnime = await getAnimeResponse(`anime/${id}`)
    console.log(detailAnime)
    return (
      <div className="md:mx-10">
        <div className="flex pt-4 px-4 gap-3">
          <h3 className="md:text-xl sm:text-md text-color-secondary">
            Detail Anime :
          </h3>
          <h3 className="md:text-xl sm:text-md text-color-secondary font-semibold">
            {detailAnime.data.title}
          </h3>
        </div>
        <div className="pt-4 px-4 flex gap-3 text-color-secondary overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
            <h3 className="px-1">Peringkat</h3>
            <p className="px-2">{detailAnime.data.rank}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
            <h3 className="px-1">Skor</h3>
            <p className="px-1">{detailAnime.data.score}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
            <h3 className="px-1">Anggota</h3>
            <p className="px-1">{detailAnime.data.members}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
            <h3 className="px-1">Episode</h3>
            <p className="px-1">{detailAnime.data.episodes}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
            <h3 className="px-1">Favorit</h3>
            <p className="px-1">{detailAnime.data.favorites}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
            <h3 className="px-1">Popularity</h3>
            <p className="px-1">{detailAnime.data.popularity}</p>
          </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-secondary">
          <Image
            src={detailAnime.data.images.webp.image_url}
            alt={detailAnime.data.images.jpg.image_url}
            height={250}
            width={250}
            layout="responsive"
            className="w-full rounded object-cover mb-4 md:max-h-96"
          />

          <p className="text-justify md:text-md sm:text-sm md:pl-2">
            {detailAnime.data.synopsis.split("\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div>
          <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
        </div>
      </div>
    );
}

export default Page