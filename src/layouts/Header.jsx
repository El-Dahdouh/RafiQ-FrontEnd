import { Link } from "react-router-dom";
import { Bell, MessageSquare, LogOut, Users, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Project Name */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          RafiQ
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-gray-700 hidden md:flex">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/profile" className="hover:text-blue-600">
            Profile
          </Link>
          <Link to="/support" className="hover:text-blue-600">
            Support
          </Link>
        </nav>

        {/* Search + Icons + Logout */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
          </div>

          {/* Icons */}
          <Link to="/messages" className="text-gray-600 hover:text-blue-600">
            <MessageSquare className="h-5 w-5" />
          </Link>
          <Link
            to="/notifications"
            className="text-gray-600 hover:text-blue-600"
          >
            <Bell className="h-5 w-5" />
          </Link>
          <Link to="/my-projects" className="text-gray-600 hover:text-blue-600">
            <Users className="h-5 w-5" />
          </Link>

          {/* Logout */}
          <button
            className="text-gray-600 hover:text-red-500"
            onClick={() => console.log("logout")}
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
