import { Middleware, Reducer } from "@reduxjs/toolkit";

export interface ReduxLibrarySetting {
    reducers?: { [key: string]: Reducer };
    middlewares?: { [key: string]: Middleware };
}