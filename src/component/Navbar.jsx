
  import { FaCog } from "react-icons/fa";
  import { NavLink, useLocation, useNavigate } from "react-router-dom";
  const Navbar = () => {
  const location = useLocation();
  const Navigate=useNavigate();
  const hideSearchRoutes = ["/", "/categories"];
  const showSearch = !hideSearchRoutes.includes(location.pathname);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-purple-600 border-b-2 border-purple-600 pb-1"
      : "text-gray-600 hover:text-purple-600";

  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-sm bg-white">
      
      {/* Logo */}
      <h1 onClick={()=>Navigate("/")} className="text-purple-600 font-bold text-lg cursor-pointer">
        Smart Shala
      </h1>

      {/* Links */}
      <nav className="flex gap-6 text-sm">
        <NavLink to="/university" className={linkStyle}>
          Universities
        </NavLink>

        <NavLink to="/categories" className={linkStyle}>
          Categories
        </NavLink>

        <NavLink to="/stream" className={linkStyle}>
          Stream
        </NavLink>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Conditional Search */}
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-1 rounded text-sm"
          />
        )}
        
        <FaCog className="text-gray-500 cursor-pointer hover:text-purple-600" />

        <span className="cursor-pointer text-gray-600 hover:text-purple-600">
          Logout
        </span>

         <img
           src="https://i.pravatar.cc/30"
           alt="profile"
            className="w-8 h-8 rounded-full border"
         />

      </div>
    </div>
  );
};

export default Navbar;