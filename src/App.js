import React from "react";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyOrder from "./pages/MyOrder";
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
