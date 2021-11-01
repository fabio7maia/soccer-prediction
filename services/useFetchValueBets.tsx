import { useFetch } from "@hooks";

export const useFetchValueBets = () =>
  useFetch<void, any>({
    url: "predictions/valuebets/next?api_token={{api_token}}&include=",
  });
