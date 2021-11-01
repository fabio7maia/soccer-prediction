import React from "react";
import { apiConfig } from "@configs";

type TUseFetchInput = {
  url: string;
};

type TUseFetchOutput<
  TInput extends Record<string, any> | void,
  TOutput extends unknown
> = {
  fetch: (input?: TInput) => Promise<TOutput>;
};

export const useFetch = <
  TInput extends Record<string, any> | void,
  TOutput extends unknown
>({
  url,
}: TUseFetchInput): TUseFetchOutput<TInput, TOutput> => {
  const { active, baseUrl, token } = apiConfig;

  url = url.replace("{{api_token}}", token);

  return React.useMemo(
    () => ({
      fetch: (input?: TInput): Promise<TOutput> => {
        if (!active) {
          throw new Error("API calls is inactive!");
        }

        let transformUrl = url;

        Object.keys(input || {}).forEach((key) => {
          transformUrl = transformUrl.replace(
            `{{${key}}}`,
            ((input || {}) as any)[key]
          );
        });

        return fetch(`${baseUrl}${transformUrl}`).then((res) => res.json());
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};
