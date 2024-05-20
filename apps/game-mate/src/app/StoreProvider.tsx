"use client";

import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { createAppStore } from "./store";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const store = createAppStore();

  return <Provider store={store}>{children}</Provider>;
}