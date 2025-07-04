import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-2xl">
      <div className="fixed top-0 left-0 p-4 z-10">
        <LanguageDropdown />
      </div>
      <h1>{t("home")}</h1>
    </div>
  );
};

export default Home;
