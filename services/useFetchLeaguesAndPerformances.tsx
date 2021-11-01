import { useFetch } from "@hooks";

export const useFetchLeaguesAndPerformances = () =>
  useFetch<void, any>({
    url: "predictions/leagues?api_token={{api_token}}&include=",
  });
