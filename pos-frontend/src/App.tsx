import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Pos from "./pages/Pos";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";

export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
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
      <ToastContainer position="top-right" autoClose={3000} />
      </>
  );
}
