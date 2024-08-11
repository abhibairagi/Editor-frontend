import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./layouts/index";
import Login from "./pages/Login";
import RealTimeEditor from "./pages/RealTimeEditor";

function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className="App">
      {/* <RealTimeEditor /> */}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/live-editor" element={<RealTimeEditor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
