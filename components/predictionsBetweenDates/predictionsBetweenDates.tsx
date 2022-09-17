import React from "react";
import { useFetchFixturesByBetweenDates } from "@services";
import { Predictions } from "../predictions";

interface PredictionsBetweenDatesProps {
  startDate: string;
  endDate: string;
  page: number;
}

export const PredictionsBetweenDates: React.FC<
  PredictionsBetweenDatesProps
> = ({ endDate, startDate, page }) => {
  const { fetch: fetchFixturesByBetweenDates } =
    useFetchFixturesByBetweenDates();
  const [games, setGames] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchFixturesByBetweenDates({ endDate, startDate, page }).then((res) => {
      setGames(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate, startDate, page]);

  return <Predictions games={games} />;
};
