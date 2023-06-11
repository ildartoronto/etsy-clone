// findAllActiveListingsByShop
// https://api.etsy.com/v3/application/shops/{shopId}/listings/active?limit=100

// getListingImages
// https://openapi.etsy.com/v3/application/listings/{listing_id}/images

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import env from "react-dotenv";

const baseURL = process.env.REACT_APP_BASE_URL;
const getItems = process.env.REACT_APP_GET_ITEMS;
const getImages = process.env.REACT_APP_GET_IMAGES;
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

let delayCounts = 10; // 10ms delay between each request

const apiSlice = createApi({
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
  // TOFIX: queryFn below does not work properly - it is not waiting for the delay
  // meanwhile the changes were made in Product component 
  // to load products one by one with 10ms delay in order to avoid 429 error
  endpoints: (builder) => ({
    getItem: builder.query({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        const listing_id = _arg;
        await new Promise((resolve) => setTimeout(resolve, delayCounts));
        const result = await fetchWithBQ(`${getImages}/${listing_id}/images`);
        return result.data
          ? { data: result.data.results }
          : { error: result.error };
      },
    }),
    getItems: builder.query({
      query: () => getItems,
      transformResponse: (response, meta, arg) => {
        // Add properties (band/stone/type) to the ring
        console.log("results", response.results);
        const modifiedResponse = addTags(response.results);
        return modifiedResponse;
      },
    }),
  }),
});

export const { useGetItemQuery, useGetItemsQuery } = apiSlice;
export { apiSlice };

/*  original code without delay, causes 429 error 
  getItem: builder.query({
    query: (listing_id) => {
      return `${getImages}/${listing_id}/images`;
    },
    transformResponse: (response) => {
      // console.log("useGetItemQuery", response);
      return response.results;
    },
    transformErrorResponse: (response, meta, arg) =>
      console.log("error", response),
  }), 
*/
