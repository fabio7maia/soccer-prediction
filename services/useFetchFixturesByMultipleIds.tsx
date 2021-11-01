import { useFetch } from "@hooks";

type TUseFetchFixturesByMultipleIdsInput = {
  fixturesIds: string;
};

export const useFetchFixturesByMultipleIds = () =>
  useFetch<TUseFetchFixturesByMultipleIdsInput, any>({
    url: `fixtures/multi/{{fixturesIds}}?api_token={{api_token}}&include=localTeam,probability,visitorTeam,`,
  });
