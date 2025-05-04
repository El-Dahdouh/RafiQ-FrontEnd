import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalMiddleware>
            <Routes />
          </GlobalMiddleware>
        </Suspense>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
