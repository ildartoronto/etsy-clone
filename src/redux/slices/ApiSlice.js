import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { create } from "json-server";
// import env from "react-dotenv";

const baseURL = process.env.REACT_APP_BASE_URL;
const remote_mode = process.env.REACT_APP_REMOTE_MODE; // 0 = local, 1 = remote
const baseURL_TEST = process.env.REACT_APP_BASE_URL_TEST;
const listings = process.env.REACT_APP_LISTINGS;
const xApiKey = process.env.REACT_APP_ETSY_KEYSTRING;
const limit = 100;


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

// *** using a local json-server and fetch data from there ***
// load the json-server with the command:
// npx json-server --watch src/redux/data/findAllActiveListingsByShop.json --port 8000
// const fetchQuery = () => {
//   return remote_mode === "0"
//     ? fetchBaseQuery({ baseUrl: "http://localhost:8000/" })
//     : fetchBaseQuery({
//         baseUrl: baseURL,
//         prepareHeaders: (headers) => {
//           headers.set("X-Api-Key", xApiKey);
//           headers.set("Content-Type", "application/json;charset=UTF-8");
//           headers.set("Accept", "application/json");
//           return headers;
//         },
//       });
// };

// const createEndpoints = (builder) => {
//   if (remote_mode === "0") {
//     return {
//       getItems: builder.query({
//         query: () => `/results`,
//         transformResponse: (response) => {
//           // Add properties (band/stone/type) to the ring
//           const modifiedResponse = addTags(response);
//           return modifiedResponse;
//         },
//       }),
//     };
//   } else {
//     return {
//       getItems: builder.query({
//         query: (name) => listings + `?limit=${limit}`,
//       }),
//     };
//   }
// };

// const apiSlice = createApi({
//   reducerPath: "apiSlice",
//   tagTypes: ["Post"],
//   baseQuery: fetchQuery(),
//   endpoints: (builder) => createEndpoints(builder),
// });



// *** using a local json-server and fetch data from there ***
// load the json-server with the command:
// npx json-server --watch src/redux/data/findAllActiveListingsByShop.json --port 8000
const apiSlice = createApi({
  reducerPath: "apiSlice",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `/results`,
      transformResponse: (response) => {
        // Add a properties (band/stone/type) to the ring
        const modifiedResponse = addTags(response);
        return modifiedResponse;
      },
    }),
  }),
});

// *** using the Etsy API ***
// export const apiSlice = createApi({
//   reducerPath: "apiSlice",
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


export const { useGetItemsQuery } = apiSlice;
export { apiSlice };