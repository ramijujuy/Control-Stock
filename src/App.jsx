import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import Barra from "./Component/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Rutas from "./routes/Routes";

function App() {
  return (
    <>
      <Router>
        <Barra />
        <Rutas />
      </Router>
    </>
  );
}

export default App;
