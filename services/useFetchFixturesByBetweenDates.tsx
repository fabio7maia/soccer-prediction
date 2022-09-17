import { useFetch } from "@hooks";

type TUseFetchFixturesByBetweenDatesInput = {
  startDate: string;
  endDate: string;
  page: number;
};

export const useFetchFixturesByBetweenDates = () =>
  useFetch<TUseFetchFixturesByBetweenDatesInput, any>({
    url: `fixtures/between/{{startDate}}/{{endDate}}?api_token={{api_token}}&include=localTeam,probability,visitorTeam,&page={{page}}`,
  });
