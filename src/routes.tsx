import { Routes, Route } from "react-router";
import { RegisterPage, NotFoundPage } from "./pages";
import { PrivateRoute } from "./components";
import App from "./App";
import { useAuthStore } from "./store/store";

export const AppRoutes = () => {
  const { success } = useAuthStore();
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/home"
        element={<PrivateRoute isAuthenticated={success} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
