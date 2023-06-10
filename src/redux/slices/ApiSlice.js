// findAllActiveListingsByShop
// https://api.etsy.com/v3/application/shops/{shopId}/listings/active?limit=100

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import env from "react-dotenv";

const baseURL = process.env.REACT_APP_BASE_URL;
const getItems = process.env.REACT_APP_GET_ITEMS;
const getImages = process.env.REACT_APP_GET_IMAGES;
const xApiKey = process.env.REACT_APP_ETSY_KEYSTRING;

const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

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
  endpoints: (builder) => ({
    getItem: builder.query({
      query: (listing_id) => {
        return `${getImages}/${listing_id}/images`;
      },
      transformResponse: (response) => {
        // console.log("useGetItemQuery", response);
        return response.results;
      },
    }),
    getItems: builder.query({
      query: () => getItems,
      transformResponse: (response, meta, arg) => {
        // Add properties (band/stone/type) to the ring
        console.log("results", response.results, meta, arg);
        const modifiedResponse = addTags(response.results);
        return modifiedResponse;
      },
    }),
  }),
});

export const { useGetItemQuery, useGetItemsQuery } = apiSlice;
export { apiSlice };
