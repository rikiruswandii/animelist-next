"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState, useCallback } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState({ data: [], pagination: {} }); // Inisialisasi topAnime dengan objek yang memiliki properti data dan pagination
  const fetchData = useCallback(async () => {
    try {
      const data = await getAnimeResponse("top/characters", `page=${page}`);
      setTopAnime(data); // Set topAnime dengan data yang diterima dari API
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Mengakses properti 'pagination' dari state 'topAnime'
  const lastVisiblePage = topAnime.pagination?.last_visible_page;

  return (
    <>
      <HeaderMenu title={`Karakter <b>Terpopuler</b> #${page}`} />
      <AnimeList api={topAnime} />{" "}
      {/* Mengirimkan hanya data anime ke AnimeList */}
      <Pagination
        setPage={setPage}
        currentPage={page}
        lastVisiblePage={lastVisiblePage}
      />
    </>
  );
};

export default Page;
