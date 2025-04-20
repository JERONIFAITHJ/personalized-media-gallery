import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import "../globals.d.ts";
import "../vite-env.d.ts";
import { sendApiCall } from "../utils/apiService.ts";
import useCheckUserStatus from "../hooks/useCheckUserStatus.ts";

function App() {
  const navigate = useNavigate();
  const { data } = useCheckUserStatus();
  useEffect(() => {
    const signInCheck = async () => {
      const response = await sendApiCall({ url: "/auth/status" });
      if (!response?.success) navigate("/");
      else navigate("/upload-files");
    };
    signInCheck();
  }, []);

  return (
    <div className="w-full min-h-full">
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
