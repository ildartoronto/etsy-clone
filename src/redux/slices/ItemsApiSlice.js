import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// TODO: does not work this way, adds http://localhost:3000 to the url at the beginning
// const baseURL = process.env.REACT_APP_GET_ITEMS_URL;
const baseURL = `https://a4gzy5ceo6.execute-api.us-east-1.amazonaws.com/beta` 
const shopId = process.env.REACT_APP_SHOP_ID;
const getItemsAPI = `v3/application/shops/${shopId}/listings/active?limit=100`;

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

const itemsApiSlice = createApi({
  reducerPath: "itemsApiSlice",
  tagTypes: ["GetData"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => getItemsAPI,
      transformResponse: (response, meta, arg) => {
        // Add properties (band/stone/type) to the ring
        // console.log("results", response.results);
        const modifiedResponse = addTags(response.results);
        return modifiedResponse;
      },
    }),
  }),
});

export const { useGetItemsQuery } = itemsApiSlice;
export { itemsApiSlice };

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

// prepareHeaders: (headers) => {
//   headers.set('X-Api-Key', xApiKey);
//   headers.set('Content-Type', 'application/json;charset=UTF-8');
//   headers.set('Accept', 'application/json');
//   headers.set('Access-Control-Allow-Origin', '*');
//   return headers;
// },
// async fetchBaseQuery(request, { baseUrl }) {
//   const url = new URL(request.url, baseUrl).toString();
//   const { jsonpCallbackName } = request.meta;

//   return new Promise((resolve, reject) => {
//     jsonp(url, { timeout: 5000 }, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve({ data });
//       }
//     }, jsonpCallbackName);
//   });
// },
