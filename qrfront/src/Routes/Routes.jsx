import { Routes, Route } from "react-router-dom";
import React from "react";
import { Main, Registration, Auth} from "../Conteiners";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Main />}/>
      <Route path="/" element={<Main />}/>
      <Route path="/registration" element={<Registration />}/>
      <Route path="/auth" element={<Auth />}/>
    </Routes>
  );
};

export default Router;
