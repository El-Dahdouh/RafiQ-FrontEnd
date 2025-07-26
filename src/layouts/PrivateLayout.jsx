import { Outlet } from "react-router-dom";
import PrivateHeader from "./Header/PrivateHeader";
import Footer from "./Footer";

export default function PrivateLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <PrivateHeader />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
