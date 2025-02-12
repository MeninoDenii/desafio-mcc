import { Routes, Route } from "react-router";
import { HomePage, RegisterPage } from "./pages";
import App from "./App";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
