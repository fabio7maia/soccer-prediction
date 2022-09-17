import React from "react";
import { useFetchFixturesByMultipleIds, useFetchValueBets } from "@services";
import { Predictions } from "../predictions";

export const PredictionsBetValues: React.FC = () => {
  const { fetch: fetchValueBets } = useFetchValueBets();
  const { fetch: fetchFixturesByMultipleIds } = useFetchFixturesByMultipleIds();
  const [games, setGames] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchValueBets().then((res) => {
      const fixturesIds: string[] = [];
      res.data.forEach((x: any) => fixturesIds.push(x.fixture_id));

      fetchFixturesByMultipleIds({ fixturesIds: fixturesIds.join(",") }).then(
        (res) => setGames(res.data)
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Predictions games={games} />;
};
