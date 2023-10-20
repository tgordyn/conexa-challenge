"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import CharacterList from "../components/CharacterList/CharacterList";
import { compareEpisodes } from "../api/compareEpisodes";
import { getMoreCharacters } from "../api/getMoreCharacters";
import CharacterComparisonResults from "../components/CharacterComparisonResults/CharacterComparisonResults";
import LeftTitle from "@/app/components/HeaderBtns/LeftTitle";
import RightTitle from "@/app/components/HeaderBtns/RightTitle";
import { divideCharacters } from "./divideCharacters";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [idLeft, setIdLeft] = useState(null);
  const [idRight, setIdRight] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { charactersLeft, charactersRight } = divideCharacters(characters);

  const handleNextPage = () => {
    router.push(`?page=${parseInt(page) + 1}`);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      router.push(`?page=${parseInt(page) - 1}`);
    }
  };

  const fetchCoincidenceData = async () => {
    try {
      if (idLeft !== null && idRight !== null) {
        const data = await compareEpisodes(idLeft, idRight);
        setEpisodes(data);
        Loading.remove();
      }
    } catch (error) {
      console.error("Error al obtener episodios:", error);
      Loading.remove();
    }
  };

  const handleCharacterCardClickLeft = (characterId) => {
    setIdLeft(characterId);
  };

  const handleCharacterCardClickRigth = (characterId) => {
    setIdRight(characterId);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        Loading.circle("Cargando Personajes");
        const charactersData = await getMoreCharacters(page);
        setCharacters(charactersData.results);
        setMaxPages(charactersData.info.pages);
        Loading.remove();
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
        Loading.remove();
      }
    };

    fetchCharacters();
  }, [page]);

  useEffect(() => {
    // Validacion de ambos personajes elegidos
    if (idLeft !== null && idRight !== null) {
      fetchCoincidenceData();
    }
  }, [idLeft, idRight]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="md:h-3/4 flex flex-col bg-Isabelline pb-6 md:flex-row ">
        <div className="w-full md:w-1/2 p-4">
          <LeftTitle
            onPreviousPageClick={handlePreviousPage}
            isPreviousPageDisabled={page == 1}
          />
          <CharacterList
            characters={charactersLeft}
            onCardClick={handleCharacterCardClickLeft}
            idLeft={idLeft}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <RightTitle
            nextPageClick={handleNextPage}
            isNextPageDisabled={page == maxPages}
          />
          <CharacterList
            characters={charactersRight}
            onCardClick={handleCharacterCardClickRigth}
            idRight={idRight}
          />
        </div>
      </div>

      <CharacterComparisonResults episodes={episodes} />
    </div>
  );
}

export default CharacterPage;
