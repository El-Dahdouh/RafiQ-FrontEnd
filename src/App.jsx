import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalMiddleware>
        <Routes />
      </GlobalMiddleware>
    </BrowserRouter>
  );
}

export default App;
