import { Outlet } from "react-router-dom";
import PublicHeader from "./Header/PublicHeader";
import Footer from "./Footer";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
