import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const getInitialLanguage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get("lang");
    if (langFromUrl && ["en", "ar"].includes(langFromUrl)) {
      return langFromUrl;
    }
    const savedLang = localStorage.getItem("language");
    if (savedLang && ["en", "ar"].includes(savedLang)) {
      return savedLang;
    }
    return "en";
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    getInitialLanguage()
  );

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <div className="relative inline-block">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M10 12l-5-5h10l-5 5z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageDropdown;
