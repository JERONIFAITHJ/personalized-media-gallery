import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";

function App() {
  return (
    <div className="w-full min-h-full">
      {/* <header className="flex justify-end gap-5 p-4 mr-4 ml-4 text-xl">
        <Link to="/login">Sign in</Link>
      </header> */}
      <div className="px-30 py-50 h-100% flex justify-center items-center pb-30">
        <div className="flex flex-col justify-start gap-10 text-2xl italic">
          <h1 className="text-indigo-300">
            Store, manage, and share your files — effortlessly.
          </h1>
          <h1 className="text-purple-300">
            Securely upload and share your files — only with who you choose.
          </h1>
          <h1 className="text-pink-300">Upload. View. Share. Done.</h1>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <GoogleSignIn />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
