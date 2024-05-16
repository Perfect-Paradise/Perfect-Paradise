'use client';
import { useDispatch, useSelector } from 'react-redux';
import { setChampionId, selectChampionId } from '../state/exampleSlice';
import { useState } from 'react';
import { Champion } from './champion';

export function Example(): JSX.Element {
  const dispatch = useDispatch();
  const championId = useSelector(selectChampionId);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleSearchClick = () => {
    const championIdNumber = inputValue;
    if (!isNaN(championIdNumber)) {
      dispatch(setChampionId(championIdNumber));
    }
  };

  return (
    <div className="flex flex-col items-center relative w-full h-full p-20">
      <input
        type="text"
        onChange={(e) => setInputValue(parseInt(e.target.value))}
        placeholder="輸入要查找的英雄ID"
        className="border border-gray-300 rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearchClick}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
      <Champion id={championId} />
    </div>
  );
}
