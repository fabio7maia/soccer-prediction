import type { NextPage } from "next";
import React from "react";
import dayjs from "dayjs";
import { NavBar, PredictionsBetweenDates } from "@components";

const getDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${year}-${month}-${day}`;
};

const Page: NextPage = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleOnClickChangeDate = React.useCallback((incDays: number) => {
    setCurrentDate((oldDate) => {
      const newDate = dayjs(oldDate).add(incDays, "day");

      return newDate.toDate();
    });
  }, []);

  const handleOnClickChangePage = React.useCallback((incPage: number) => {
    setCurrentPage((oldPage) => oldPage + incPage);
  }, []);

  return (
    <>
      <NavBar />
      <div className="my-10">
        <div className="flex justify-between my-4">
          <div className="flex">
            <div className="btn-group">
              <button
                className="btn"
                onClick={() => handleOnClickChangeDate(-1)}
              >
                «
              </button>
              <button className="btn">{getDateString(currentDate)}</button>
              <button
                className="btn"
                onClick={() => handleOnClickChangeDate(1)}
              >
                »
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="btn-group">
              <button
                className="btn"
                onClick={() => handleOnClickChangePage(-1)}
              >
                «
              </button>
              <button className="btn">Page {currentPage}</button>
              <button
                className="btn"
                onClick={() => handleOnClickChangePage(1)}
              >
                »
              </button>
            </div>
          </div>
        </div>

        <PredictionsBetweenDates
          endDate={getDateString(currentDate)}
          startDate={getDateString(currentDate)}
          page={currentPage}
        />
      </div>
    </>
  );
};

export default Page;
