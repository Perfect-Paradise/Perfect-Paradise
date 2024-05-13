import { createSlice } from "@reduxjs/toolkit";

interface LoginStatus {
	isLogin: boolean;
}

const initialState: LoginStatus = {
	isLogin: false,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state) => {
			state.isLogin = true;
		},
		logout: (state) => {
			state.isLogin = false;
		},
	},
	reducerPath: 'login',
	selectors: {
		selectLoginStatus: (state) => state.isLogin,
	},
});

export const { login, logout } = loginSlice.actions;
export const { selectLoginStatus } = loginSlice.selectors;

export const loginReducer =  loginSlice.reducer;