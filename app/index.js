import "./styles/Custom.scss"
import "./styles/main.scss"
import React from "react"
import ReactDOM from "react-dom"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./styles/Vendor/fontawesome-free/css/all.min.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/_custom-datatable.scss";
ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
