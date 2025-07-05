import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">RafiQ</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 text-lg">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 pb-1"
                    : "hover:text-blue-600 transition-colors duration-200"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 border border-blue-600 rounded-md text-blue-600 bg-blue-50 font-semibold"
                : "px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50 transition"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-blue-700 text-white rounded-md font-semibold"
                : "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            }
          >
            Register
          </NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg mb-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600 transition"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
