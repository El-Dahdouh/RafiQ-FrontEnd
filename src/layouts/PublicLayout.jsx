import { Outlet } from "react-router-dom";
import PublicHeader from "./Header/PublicHeader";
import Footer from "./Footer";

export default function PublicLayout() {
  return (
    <>
      <PublicHeader />
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
