import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarMiddle = () => {
  return (
    <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
      <div className="lg:container grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="logo_wrapper">
          <Link to="/" className="flex items-center">
            <img src="/src/assets/logo.png" alt="Logo" className="w-28 h-28" />
          </Link>
        </div>

        {/* Search box */}
        <div className="search_box">
          <form action="#" className="max-w-[443px] h-[44px] relative">
            <input
              type="text"
              placeholder="Search here..."
              className="max-w-[443px] w-full h-full bg-white text-black rounded-lg pl-4 placeholder:text-gray-500"
            />
            <button type="button" className="absolute top-1/2 right-4 -translate-y-1/2">
              <Search size="22px" color="#5a5f99" />
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className="navbar_middle_right flex items-center gap-4 justify-end">
          <button className="btn capitalize">
            <ShoppingCart /> Giỏ hàng
            <div className="badge badge-sm bg-[#029fae]">0</div>
          </button>
          <button className="btn capitalize">
            <Heart />
          </button>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              <User />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
              <li><Link to="/account">Tài Khoản</Link></li>
              <li><Link to="/logout">Đăng Xuất</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
