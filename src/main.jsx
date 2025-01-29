import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ReactRedux from "./components/ReactRedux.jsx";
import { Provider } from "react-redux";
// import store from "./redux/store.js";
import store from "./redux-toolkit/store.js"
import CheckBox from "./components/CheckBox.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<ReactRedux />} />
        <Route path="/checkboxpage" element={<CheckBox />} />
      </Routes>
    </Router>
  </Provider>
);
