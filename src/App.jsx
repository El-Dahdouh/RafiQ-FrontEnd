import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Suspense } from "react";
import Footer from "./layouts/Footer"; // adjust path as needed
import GlobalMiddleware from "./middleware/GlobalMiddleware"; // assuming this exists

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<div>Loading...</div>}>
            <main className="flex-grow">
              <GlobalMiddleware>
                <Routes />
              </GlobalMiddleware>
            </main>
            <Footer />
          </Suspense>
        </I18nextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
