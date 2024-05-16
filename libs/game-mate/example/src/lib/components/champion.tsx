import { useGetAllChampionsQuery } from "../state/apiSlice";

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

export function Champion({ id }: { id: number }): JSX.Element {
  const { champion } = useGetAllChampionsQuery(undefined, {
    selectFromResult: ({ data: champions }) => ({
      champion: champions?.data.find((champion: ChampionInfo) => champion.id === id),
    }),
  });

  return (
    <div>
      {champion && (
        <div>
          <img
            src={champion?.skins[0].splash_image}
            className="absolute inset-0 opacity-30 h-full w-full object-cover z-[-1]"
          />
          <div className="mt-4 p-4 border border-gray-300 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Found Champion:</h2>
            <img
              src={champion.image_url}
              alt={champion.key}
              className="rounded-md shadow-md mb-4"
            />
            <p className="text-gray-700">ID: {champion.id}</p>
            <p className="text-gray-700">Name: {champion.name}</p>
            <p className="text-gray-700">{champion.blurb}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Basic Info:</h3>
              <p className="text-gray-700">Part Type: {champion.partype}</p>
              <p className="text-gray-700">Attack: {champion.info.attack}</p>
              <p className="text-gray-700">
                Defense: {champion.info.defense}
              </p>
              <p className="text-gray-700">Magic: {champion.info.magic}</p>
              <p className="text-gray-700">
                Difficulty: {champion.info.difficulty}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
