// findAllActiveListingsByShop
// https://api.etsy.com/v3/application/shops/{shopId}/listings/active?limit=100

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import env from "react-dotenv";

// const remote_mode = process.env.REACT_APP_REMOTE_MODE; // 0 = local, 1 = remote
const remote_mode = "1"; // 0 = local, 1 = remote
const baseURL = process.env.REACT_APP_BASE_URL;
const getItems = process.env.REACT_APP_GET_ITEMS;
const xApiKey = process.env.REACT_APP_ETSY_KEYSTRING;


const addTags = (data) => {
  return data.map((item) => {
    if (item.tags.length > 0) {
      let itemTag = item.tags[0].split(""); // "201" => ['2','0','1']
      return (item = {
        ...item,
        band: parseInt(itemTag[0]),
        ring: parseInt(itemTag[1]),
        stone: parseInt(itemTag[2]),
      });
    }
    return (item = { ...item, ring: 0, band: 0, stone: 0 });
  });
};

const createEndpoints = (builder) => {
  return {
    getItems: builder.query({
      query: () => `/results`,
      transformResponse: (response) => {
        // Add properties (band/stone/type) to the ring
        const modifiedResponse = addTags(response.results);
        return modifiedResponse;
      },
    }),
  };
};

// remote_mode === "0" using a local json-server and fetch data from there ***
// load the json-server with the command:
// npx json-server --watch src/redux/data/findAllActiveListingsByShop.json --port 8000
const apiSlice =
  remote_mode === "0"
    ? createApi({
        reducerPath: "apiSlice",
        tagTypes: ["Post"],
        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
        endpoints: (builder) => createEndpoints(builder),
      })
    : createApi({
        reducerPath: "apiSlice",
        tagTypes: ["Post"],
        baseQuery: fetchBaseQuery({
          baseUrl: baseURL,
          prepareHeaders: (headers) => {
            headers.set("X-Api-Key", xApiKey);
            headers.set("Content-Type", "application/json;charset=UTF-8");
            headers.set("Accept", "application/json");
            return headers;
          },
        }),
        endpoints: (builder) =>  ({
          getItems: builder.query({
          query: () => getItems,
          transformResponse: (response) => {
            // Add properties (band/stone/type) to the ring
            console.log("results", response.results)
            const modifiedResponse = addTags(response.results);
            return modifiedResponse;
          },
        }),
      }),
    });

export const { useGetItemsQuery } = apiSlice;
export { apiSlice };

// const apiSlice = createApi({
//   reducerPath: "apiSlice",
//   tagTypes: ["Post"],
//   baseQuery: fetchQuery(),
//   endpoints: (builder) => createEndpoints(builder),
// });

