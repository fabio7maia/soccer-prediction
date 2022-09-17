import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { NavBar, PredictionsBetValues } from "@components";

const Page: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="my-10">
        <PredictionsBetValues />
      </div>
    </>
  );
};

export default Page;
