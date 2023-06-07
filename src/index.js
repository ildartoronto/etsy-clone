// import ReactDOM from "react-dom"; // 17
import ReactDOM from "react-dom/client"; // 18
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import store from "./redux/Store";

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${(props) => (props.whiteColor ? "white" : "black")};
//     font-family: ${(props) => props.theme.fontFamily};
//   }
// `;
//{/* <GlobalStyle whiteColor /> */}

// 18
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={{ fontFamily: "Poppins" }}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);

// 17
// ReactDOM.render(
//   <BrowserRouter>
//     <ThemeProvider theme={{ fontFamily: "Poppins" }}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </ThemeProvider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );