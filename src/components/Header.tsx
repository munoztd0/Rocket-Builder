import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-courier-dark">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src="/Rocket-Builder/logo/logo_blanc.svg"
              alt="Rocket Courrier"
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
