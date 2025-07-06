import { Outlet } from "react-router-dom";
import PublicHeader from "./Header/PublicHeader";
import Footer from "./Footer";

export default function PublicLayout() {
  return (
    <>
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
