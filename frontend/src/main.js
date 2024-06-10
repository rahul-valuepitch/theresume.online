import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./store/store.js";
import "./static/css/app.css";
import "./static/css/utils.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
