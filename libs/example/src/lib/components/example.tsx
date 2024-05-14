'use client';
import { useDispatch, useSelector } from 'react-redux';
import { setChampionId, selectChampionId } from '../state/exampleSlice';
import { useGetAllChampionsQuery } from '../state/apiSlice';
import { useState } from 'react';

interface ChampionInfo {
  id: number;
  key: string;
  name: string;
  image_url: string;
  blurb: string;
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  skins: any[];
}

export function Example(): JSX.Element {
  const dispatch = useDispatch();
  const championId = useSelector(selectChampionId);
  const [foundChampion, setFoundChampion] = useState<ChampionInfo | null>(null);
  const { data: champions } = useGetAllChampionsQuery({});

  const handleSearchClick = () => {
    const found = champions?.data.find(
      (champion: ChampionInfo) => champion.id === championId
    );
    setFoundChampion(found || null);
  };

  return (
    <div
      className="flex flex-col items-center relative  w-full h-full p-20"
    >
      <input
        type="text"
        onChange={(e) => dispatch(setChampionId(parseInt(e.target.value)))}
        placeholder="輸入要查找的英雄ID"
        className="border border-gray-300 rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <img
        src={foundChampion?.skins[0].splash_image}
        className="absolute inset-0 opacity-30 h-full w-full object-cover z-[-1]"
      />
      <button
        onClick={handleSearchClick}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
      {foundChampion && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Found Champion:</h2>
          <img
            src={foundChampion.image_url}
            alt={foundChampion.key}
            className="rounded-md shadow-md mb-4"
          />
          <p className="text-gray-700">ID: {foundChampion.id}</p>
          <p className="text-gray-700">Name: {foundChampion.name}</p>
          <p className="text-gray-700">{foundChampion.blurb}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Basic Info:</h3>
            <p className="text-gray-700">Part Type: {foundChampion.partype}</p>
            <p className="text-gray-700">Attack: {foundChampion.info.attack}</p>
            <p className="text-gray-700">
              Defense: {foundChampion.info.defense}
            </p>
            <p className="text-gray-700">Magic: {foundChampion.info.magic}</p>
            <p className="text-gray-700">
              Difficulty: {foundChampion.info.difficulty}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
