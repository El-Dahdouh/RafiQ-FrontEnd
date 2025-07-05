import { Outlet } from "react-router-dom";
import PrivateHeader from "./Header/PrivateHeader";
import Footer from "./Footer";

export default function PublicLayout() {
  return (
    <>
      <PrivateHeader />
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
