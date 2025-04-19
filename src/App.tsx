import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import "../globals.d.ts";
import "../vite-env.d.ts";
import { sendApiCall } from "../utils/apiService.ts";

function App() {
  return (
    <div className="w-full min-h-full">
      <header className="text-5xl  px-15 py-7">JF Gallery</header>
      <div className="px-30 py-50 min-h-[calc(100dvh-92px)] flex justify-center items-center pb-30">
        <div className="flex flex-col justify-start gap-10 text-2xl ">
          <h1 className="">
            Store, manage, and share your files — effortlessly.
          </h1>
          <div className="w-full flex justify-center">
            <GoogleSignIn />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
