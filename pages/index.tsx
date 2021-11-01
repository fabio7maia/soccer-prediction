import type { NextPage } from "next";
import React from "react";
import { Predictions } from "@components";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen min-w-screen text-gray-800">
      <div className="text-5xl text-center">Soccer Prediction</div>
      <div className="pt-10">
        <Predictions />
      </div>
    </div>
  );
};

export default Home;
