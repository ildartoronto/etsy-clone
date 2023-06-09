// getListingImages
// https://openapi.etsy.com/v3/application/listings/{listing_id}/images

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import env from "react-dotenv";

// const remote_mode = process.env.REACT_APP_REMOTE_MODE; // 0 = local, 1 = remote
const remote_mode = "1"; // 0 = local, 1 = remote
const baseURL = process.env.REACT_APP_BASE_URL;
const getImages = process.env.REACT_APP_GET_IMAGES;
const xApiKey = process.env.REACT_APP_ETSY_KEYSTRING;

const createEndpoints = (builder) => {
  return {
    getItem: builder.query({
      query: (listing_id) => {
        return {
          url: "/results",
          params: {
            listing_id: listing_id,
          },
          method: "GET",
        };
      },
    }),
  };
};

// remote_mode === "0" using a local json-server and fetch data from there ***
// load the json-server with the command:
// npx json-server --watch src/redux/data/findAllActiveListingsByShop.json --port 8000
const itemSlice =
  remote_mode === "0"
    ? createApi({
        reducerPath: "itemSlice",
        tagTypes: ["Post"],
        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8001/" }),
        endpoints: (builder) => createEndpoints(builder),
      })
    : createApi({
        reducerPath: "itemSlice",
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
        endpoints: (builder) => ({
          getItem: builder.query({
            query: (listing_id) => `${getImages}/${listing_id}/images`,
            transformResponse: (response) => {
              console.log("response", response);
              return response.results;
            },
          }),
        }),
      });

export const { useGetItemQuery } = itemSlice;
export { itemSlice };

/* an example with a transformResponse function and a query function by passing a parameter
  query: (listing_id) => `/results?listing_id=${listing_id}`,
      transformResponse: (response) => {
        // Add an extra property to the response
        // const modifiedResponse = { ...response, isAdmin: true };
        const modifiedResponse = addTags(response); // add tags to the response
        return modifiedResponse;
      },
*/
