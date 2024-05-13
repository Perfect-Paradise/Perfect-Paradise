'use client'
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectLoginStatus } from "../state/loginSlice";

export function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectLoginStatus);

  return (
    <div>
      <h1>{loginStatus ? "已登入" : "訪客模式"}</h1>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
