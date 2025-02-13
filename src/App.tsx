import { Input } from "./components";
import { GlobalStyle } from "./globalStyle";
// import { LoginPage } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Input label="Teste" width="400px" placeholder="exemplo@gmail.com" />
    </>
  );
}

export default App;
