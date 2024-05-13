"use client";

import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { appStore } from "./store";
import reducers from "../config/reducers";

interface Props {
    readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
    const store = appStore(reducers);

    return <Provider store={store}>{children}</Provider>;
}