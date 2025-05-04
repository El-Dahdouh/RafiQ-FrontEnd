import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <h1 className="h-screen flex justify-center items-center text-2xl">
      {t("home")}
    </h1>
  );
};

export default Home;
