import React, { useEffect, useState } from "react";
import useTimer from "../hooks/useTimer";
import { useNavigate } from "react-router-dom";

const Error404Page = () => {
  const { timer, timerCompleted } = useTimer(5);
  const navigate = useNavigate();
  useEffect(() => {
    if (timerCompleted) navigate("/");
  }, [timerCompleted]);
  return (
    <p className="min-h-screen flex justify-center items-center text-center text-3xl">
      Are you sure?🤨. Redirecting you in {timer}...
    </p>
  );
};

export default Error404Page;
