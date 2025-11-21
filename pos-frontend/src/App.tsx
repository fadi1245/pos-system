import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Pos from "./pages/Pos";

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route
          path="/pos"
          element={
            <ProtectedRoute>
              <Pos />
            </ProtectedRoute>
          }
        />
      </Routes>
      </BrowserRouter>
  );
}
