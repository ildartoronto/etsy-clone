import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import env from "react-dotenv";

const baseURL = process.env.REACT_APP_BASE_URL;
const remote_mode = process.env.REACT_APP_REMOTE_MODE; // 0 = local, 1 = remote
const baseURL_TEST = process.env.REACT_APP_BASE_URL_TEST;
const listings = process.env.REACT_APP_LISTINGS;
const xApiKey = process.env.REACT_APP_ETSY_KEYSTRING;
const limit = 100;

// *** using a local json-server and fetch data from there ***
// load the json-server with the command: 
// npx json-server --watch src/redux/data/findAllActiveListingsByShop.json --port 8000
// this code is from the original ApiSlice.js file
const itemSlice = createApi({
  reducerPath: "itemSlice",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8001/' }),
  endpoints: (builder) => ({
    getItem: builder.query({
      query: (listing_id) => {
        return {
          url: '/results',
          params: {
            listing_id: listing_id
          },
          method: 'GET',    
        }
      },
    }),
  }),
});

/* an example with a transformResponse function and a query function by passing a parameter
  query: (listing_id) => `/results?listing_id=${listing_id}`,
      transformResponse: (response) => {
        // Add an extra property to the response
        // const modifiedResponse = { ...response, isAdmin: true };
        const modifiedResponse = addTags(response); // add tags to the response
        return modifiedResponse;
      },
*/

// query: () => `/results/${listing_id}`, <--- this is the original code
//       query: (name) => listings + `?limit=${limit}`,


// *** using the Etsy API ***
// export const apiSlice = createApi({
//   reducerPath: "itemSlice",
//   tagTypes: ["Post"],
//   baseQuery: fetchBaseQuery({
//     baseUrl: baseURL,
//     prepareHeaders: (headers) => {
//       headers.set("X-Api-Key", xApiKey);
//       headers.set("Content-Type", "application/json;charset=UTF-8");
//       headers.set("Accept", "application/json");
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getItems: builder.query({
//       query: (name) => listings + `?limit=${limit}`,
//     }),
//   }),
// });

// getListingImages
// https://openapi.etsy.com/v3/application/listings/{listing_id}/images

// adds 'use' and 'Query' to the function getItems
// useGetItemQuery = 'use' + 'getItem' + 'Query'

export const { useGetItemQuery } = itemSlice;
export { itemSlice };