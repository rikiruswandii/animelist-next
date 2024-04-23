"use client"
import Image from "next/image";
import React from "react";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CountUp from "react-countup/build";

const DetailAnime = ({ detailAnime }) => {
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
          <CountUp end={detailAnime.data.members} />
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
          <h3 className="px-1">Episode</h3>
          <p className="px-1">{detailAnime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
          <h3 className="px-1">Favorit</h3>
          <CountUp end={detailAnime.data.favorites} />
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded border-color-accent border-collapse p-1">
          <h3 className="px-1">Popularity</h3>
          <CountUp end={detailAnime.data.popularity} />
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-secondary">
        <Image
          src={detailAnime.data.images.webp.image_url}
          alt={detailAnime.data.images.jpg.image_url}
          height={250}
          width={250}
          className="w-full rounded mb-4 md:max-h-96"
        />
        <p className="text-justify md:text-md sm:text-sm md:pl-2">
          {detailAnime.data.synopsis || detailAnime.data.about
            ? (detailAnime.data.synopsis || detailAnime.data.about)
                .split("\n")
                .map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))
            : "No synopsis available"}
        </p>
      </div>
      <div>
        <VideoPlayer youtubeId={detailAnime.data.trailer?.youtube_id} />
      </div>
    </div>
  );
};

export default DetailAnime;
