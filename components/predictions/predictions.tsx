import React from "react";
import { useFetchFixturesByMultipleIds, useFetchValueBets } from "@services";

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
  value = Math.round(value || 0);

  return value >= 80 ? "#00ff00" : value >= 65 ? "#0000ff" : "#ff0000";
};

interface PredictionsProps {
  games: any[];
}

export const Predictions: React.FC<PredictionsProps> = ({ games }) => {
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
      <div
        style={{
          gridColumn: "2 / 10",
          borderLeft: "2px solid #fff",
          textAlign: "center",
        }}
      >
        Home + Away team
      </div>
      <div
        style={{
          gridColumn: "10 / 14",
          borderLeft: "2px solid #fff",
          textAlign: "center",
        }}
      >
        Home team
      </div>
      <div
        style={{
          gridColumn: "14 / 18",
          borderLeft: "2px solid #fff",
          borderRight: "2px solid #fff",
          textAlign: "center",
        }}
      >
        Away team
      </div>

      <div style={{ borderBottom: "2px solid #fff" }}>Game</div>
      {probabilities.map((p) => (
        <div
          style={{
            borderBottom: "2px solid #fff",
            textAlign: "center",
          }}
          key={p.key}
        >
          {p.value}
        </div>
      ))}

      {games?.map((x, index) => (
        <React.Fragment key={x.id}>
          <div
            className={`align-middle flex space-x-4 ${
              index < games.length - 1 ? "border-b-2" : undefined
            }`}
          >
            {/* <Image
              src={x.localTeam.data.logo_path}
              // style={{ display: "unset" }}
              width="40px"
              height="25px"
              alt="home team"
            />{" "} */}
            <div style={{ fontSize: "8px", width: "36px" }}>
              {x.time.starting_at.date_time.substring(5, 16)}
            </div>
            <div
              style={{
                color: "orange",
                margin: "0 4px 0 0",
                textOverflow: "ellipsis",
                width: "40%",
                overflow: "hidden",
                height: "24px",
              }}
            >
              {x.localTeam.data.name}
            </div>
            vs
            <div
              style={{
                color: "yellow",
                margin: "0 0 0 4px",
                textOverflow: "ellipsis",
                width: "40%",
                overflow: "hidden",
                height: "24px",
              }}
            >
              {x.visitorTeam.data.name}
            </div>
            {/* <Image
              src={x.visitorTeam.data.logo_path}
              // style={{ display: "unset" }}
              width="40px"
              height="25px"
              alt="away team"
            /> */}
          </div>

          {probabilities.map((p) => (
            <div
              key={`probability_${x.id}_${p.key}`}
              style={{
                backgroundColor: getBackgroundColor(
                  x.probability?.data?.predictions?.[p.key] || 0
                ),
                borderBottom:
                  index < games.length - 1 ? "2px solid #fff" : undefined,
                textAlign: "center",
              }}
            >
              {Math.round(x.probability?.data?.predictions?.[p.key] || 0)}
            </div>
          ))}
        </React.Fragment>
      ))}
      <div style={{ borderTop: "2px solid #fff" }}>Game</div>

      {probabilities.map((p) => (
        <div style={{ borderTop: "2px solid #fff" }} key={p.key}>
          {p.value}
        </div>
      ))}

      <div></div>

      <div
        style={{
          gridColumn: "2 / 10",
          borderLeft: "2px solid #fff",
          textAlign: "center",
        }}
      >
        Home + Away team
      </div>
      <div
        style={{
          gridColumn: "10 / 14",
          borderLeft: "2px solid #fff",
          textAlign: "center",
        }}
      >
        Home team
      </div>
      <div
        style={{
          gridColumn: "14 / 18",
          borderLeft: "2px solid #fff",
          borderRight: "2px solid #fff",
          textAlign: "center",
        }}
      >
        Away team
      </div>
    </div>
  );
};
