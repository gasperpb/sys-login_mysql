import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hook from "./hooks/hook copy";
import Login from "./Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
         <Route path="/login" element={<Login />} />
          <Route path="/hook" element={<Hook />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
