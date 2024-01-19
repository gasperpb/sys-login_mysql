import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
//import Login from "./Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
