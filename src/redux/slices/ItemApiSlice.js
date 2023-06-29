import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = process.env.REACT_APP_GET_IMAGES_URL;
const getImages = process.env.REACT_APP_GET_IMAGES;

const delayCounts = 100; // 100ms delay between each request

const itemApiSlice = createApi({
  reducerPath: "itemApiSlice",
  tagTypes: ["GetData"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  // TODO: queryFn below does not work properly - it is not waiting for the delay
  // meanwhile the changes were made in Product component
  // to load products one by one with 100ms delay in order to avoid 429 error
  endpoints: (builder) => ({
    getItem: builder.query({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        const listing_id = _arg;
        await new Promise((resolve) => setTimeout(resolve, delayCounts));
        // '/v3/application/listings' + '/' + listing_id + '/images'
        const result = await fetchWithBQ(`${getImages}/${listing_id}/images`);
        return result.data
          ? { data: result.data.results }
          : { error: result.error };
      },
    }),
  }),
});

export const { useGetItemQuery } = itemApiSlice;
export { itemApiSlice };

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

/*
CORS error, Etsy API does not allow to fetch data this way
const apiSlice = createApi({
  reducerPath: "apiSlice",
  tagTypes: ["GetData"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", xApiKey);
      headers.set("Content-Type", "application/json;charset=UTF-8");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
*/
// TODO: somehow onQueryStarted returns the result as undefined
// getItem: builder.query({
//   query: (listing_id) => `${getImages}/${listing_id}/images`,
//   async onQueryStarted(listing_id, { dispatch, queryFulfilled }) {
//     console.log("starting!");
//     try {
//       const { result } = await queryFulfilled;
//       console.log("success!", result);
//       return result.data
//         ? { data: result.data.results }
//         : { error: result.error };
//     } catch (err) {
//       console.log("error... ", err);
//     }
//   },
// }),

