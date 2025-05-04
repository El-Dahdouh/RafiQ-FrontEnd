import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const GlobalMiddleware = ({ children }) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  };

  // Middleware logic here
  useEffect(() => {
    // Example middleware tasks:
    // - Check user authentication
    // - Log analytics
    // - Redirect under certain conditions
    // - Show a loading spinner if needed
  }, [location]);

  return (
    <>
      <div className="language-switcher p-3 flex gap-2 z-50">
        <button
          onClick={() => changeLanguage("en")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
            ${
              i18n.language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("ar")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
            ${
              i18n.language === "ar"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          العربية
        </button>
      </div>
      {children}
    </>
  );
};

export default GlobalMiddleware;
