import ReactDom from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const app = document.getElementById("app")
ReactDom.render(<BrowserRouter> <App/> </BrowserRouter>, app)  