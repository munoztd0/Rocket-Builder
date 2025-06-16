import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-courier-dark">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-courier-light font-bold text-xl font-asap"
          >
            CourierCo
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/services"
            className="text-courier-light hover:text-courier-lime transition-colors font-asap text-nav"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-courier-light hover:text-courier-lime transition-colors font-asap text-nav"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-courier-light hover:text-courier-lime transition-colors font-asap text-nav"
          >
            Contact
          </Link>
          <span className="text-courier-light font-asap text-nav cursor-pointer hover:text-courier-lime transition-colors">
            EN
          </span>
        </nav>

        {/* Client Login Button */}
        <Button
          variant="outline"
          className="bg-transparent border-courier-light text-courier-light hover:bg-courier-light hover:text-courier-dark font-asap"
        >
          Client Login
        </Button>

        {/* Mobile menu button */}
        <button className="md:hidden text-courier-light">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
