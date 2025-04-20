import React from "react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const { data } = useUser();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <header className="px-15 py-7 flex justify-between items-center">
        <h1>JF Gallery</h1>
        <img
          className="w-10 h-10 rounded cursor-pointer"
          onClick={() => navigate("/profile")}
          src={data?.data?.picture}
          alt="profile-picture"
        />
      </header>
    </div>
  );
};

export default FileUpload;
