import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { globalStyles } from "./theme";

export const App = () => {
  globalStyles();
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
