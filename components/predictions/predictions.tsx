import Image from "next/image";
import React from "react";
import { useFetchFixturesByMultipleIds, useFetchValueBets } from "@services";
import { mocksResponses } from "../../mockResponses";

const probabilities = [
  { key: "home", value: "1" },
  { key: "away", value: "X" },
  { key: "draw", value: "2" },

  { key: "btts", value: "btts" },

  { key: "over_2_5", value: ">2.5" },
  { key: "over_3_5", value: ">3.5" },
  { key: "under_2_5", value: "<2.5" },
  { key: "under_3_5", value: "<3.5" },

  { key: "HT_over_0_5", value: ">0.5" },
  { key: "HT_over_1_5", value: ">1.5" },
  { key: "HT_under_0_5", value: "<0.5" },
  { key: "HT_under_1_5", value: "<1.5" },

  { key: "AT_over_0_5", value: ">0.5" },
  { key: "AT_over_1_5", value: ">1.5" },
  { key: "AT_under_0_5", value: "<0.5" },
  { key: "AT_under_1_5", value: "<1.5" },
];

const getBackgroundColor = (value: number): string => {
  return value > 85 ? "#00ff00" : value > 60 ? "#0000ff" : "#ff0000";
};

export const Predictions: React.FC = () => {
  const { fetch: fetchValueBets } = useFetchValueBets();
  const { fetch: fetchFixturesByMultipleIds } = useFetchFixturesByMultipleIds();
  const [games, setGames] = React.useState<any[]>([]);

  React.useEffect(
    () => {
      fetchValueBets().then((res) => {
        const fixturesIds: string[] = [];
        res.data.forEach((x: any) => fixturesIds.push(x.fixture_id));

        fetchFixturesByMultipleIds({ fixturesIds: fixturesIds.join(",") }).then(
          (res) => setGames(res.data)
        );
      });
      // setGames(
      //   mocksResponses.fixturesByMultiplesIds.data.filter((x) => x.probability)
      // );
    },
    [
      /*fetchFixturesByMultipleIds, fetchValueBets*/
    ]
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "5fr repeat(16, 1fr)",
        gap: "0px 0px",
      }}
      className="text-white bg-gray-700 rounded-lg p-3"
    >
      {/* <div></div>
        <div style={{ gridColumn: "2 / 14" }}>Probabilities</div> */}

      <div></div>
      <div style={{ gridColumn: "2 / 9" }}>Home + Away team</div>
      <div style={{ gridColumn: "10 / 13" }}>Home team</div>
      <div style={{ gridColumn: "14 / 18" }}>Away team</div>

      <div>Game</div>
      {probabilities.map((p) => (
        <div key={p.key}>{p.value}</div>
      ))}

      {games?.map((x) => (
        <React.Fragment key={x.id}>
          <div>
            <img
              src={x.localTeam.data.logo_path}
              style={{ display: "unset" }}
              width="30px"
              height="20px"
              alt="home team"
            />{" "}
            {x.localTeam.data.name} vs {x.visitorTeam.data.name}{" "}
            <img
              src={x.visitorTeam.data.logo_path}
              style={{ display: "unset" }}
              width="30px"
              height="20px"
              alt="away team"
            />
          </div>

          {probabilities.map((p) => (
            <div
              key={`probability_${x.id}_${p.key}`}
              style={{
                backgroundColor: getBackgroundColor(
                  x.probability?.data?.predictions?.[p.key] || 0
                ),
              }}
            >
              {Math.round(x.probability?.data?.predictions?.[p.key] || 0)}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
