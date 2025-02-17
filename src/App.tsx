import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./globalStyle";
import { LoginPage } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <LoginPage />
    </>
  );
}

export default App;
