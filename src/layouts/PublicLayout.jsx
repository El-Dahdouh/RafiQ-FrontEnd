import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <header className="p-4 shadow-md bg-white">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">RafiQ</h1>

          {/* Links في الوسط */}
          <ul className="flex gap-6 text-gray-700">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* أزرار Login / Register في الطرف */}
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-1 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RafiQ. All rights reserved.
      </footer>
    </>
  );
}
