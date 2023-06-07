import axios from "axios";
import env from "react-dotenv";

const baseURL = env.REACT_APP_BASE_URL
const listings = env.REACT_APP_LISTINGS
const xApiKey = env.REACT_APP_ETSY_KEYSTRING
const limit = 100
export const axiosGet = listings

const axiosDefaultConfig = {
  method: "get",
  baseURL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "X-Api-Key": xApiKey,
    "Accept": "application/json",
  },
  params: {
    limit,
  },
  proxy: false,
};

export const axiosClient = axios.create(axiosDefaultConfig);

//import listingsData from "../data/ListingsData.json";
// import * as tunnel from 'tunnel';

// getListingImages
// https://openapi.etsy.com/v3/application/listings/874009771/images

// findAllActiveListingsByShop
// https://openapi.etsy.com/v3/application/shops/23945053/listings/active?limit=100
// import listingsData from "../data/findAllActiveListingsByShop.json";

//import { useFetch } from "./useFetch";

/* 
// proxy: {
//   protocol: "http",
//   host: "127.0.0.1",
//   port: 3000,
// },

// export const fetchAllActiveListings = () => async (dispatch) => {
//   fetch(baseURL + axiosGet, {
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "X-Api-Key": "2uece2vyboqe1740gqwyxljj",
//       "X-Requested-With": "XMLHttpRequest",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((response) => { 
//       if (!response.ok)  {
//         response.json()
//       } else {
//         console.log('not ok');
//       }
//     })
//     .then((data) => console.log(data));
// };


// const agent = tunnel.httpsOverHttp({
//   proxy: {
//     host: "localhost",
//     port: 3000,
//   },
// });

// baseURL: "https://cors-anywhere.herokuapp.com",
// baseURL: "http://localhost:3000",

/* 
var headers = new Headers();
headers.append("Content-Type", "application/json; charset=utf-8");
// headers.append("Content-Type", "application/x-www-form-urlencoded");
headers.append("X-Api-Key", "2uece2vyboqe1740gqwyxljj");
headers.append("X-Requested-With", "XMLHttpRequest");
headers.append("Access-Control-Allow-Origin", "*");
//headers.append("Authorization", "Bearer 12345678.jKBPLnOiYt7vpWlsny_lDKqINn4Ny_jwH89hA4IZgggyzqmV_bmQHGJ3HOHH2DmZxOJn5V1qQFnVP9bCn9jnrggCRz");
 */ 

// "Content-Type": "application/json; charset=utf-8",
// "X-Requested-With": "XMLHttpRequest",
// 'Access-Control-Allow-Origin' : '*',
// 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',

// {
//   protocol: "http",
//   host: "localhost",
//   port: 3000,
// }