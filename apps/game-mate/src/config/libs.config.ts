import { LibReducerBase } from "@perfect-paradise/shared";
import { exampleReducers } from "@perfect-paradise/game-mate/example";
import { liveListReducers } from "@perfect-paradise/game-mate/live-list";

export const libsReducers: LibReducerBase[] = [
  exampleReducers, liveListReducers
];