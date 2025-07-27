import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarMiddle = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px] relative">
      <div className="lg:container grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="logo_wrapper">
          <Link to="/" className="flex items-center">
            <img src="/src/assets/logo.png" alt="Logo" className="w-28 h-28" />
          </Link>
        </div>

        {/* Thanh tìm kiếm + menu PC */}
        <div className="search_box relative flex items-center gap-4">
          <form action="#" className="max-w-[443px] h-[44px] relative">
            <input
              type="text"
              placeholder="Search here..."
              className="max-w-[443px] w-full h-full bg-white !text-black rounded-lg pl-4"

            />
            <button
              type="button"
              className="absolute top-1/2 right-4 -translate-y-1/2"
            >
              <Search size="22px" color="#5a5f99" />
            </button>
          </form>

          {/* Menu PC */}
          <div
            className="relative"
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <button className="btn btn-sm bg-white shadow-sm border border-gray-200">
              PC
            </button>

            {/* Submenu ngang bên phải */}
            {showSubMenu && (
              <div className="absolute top-0 left-full ml-2 bg-white shadow-md rounded-lg px-6 py-3 flex gap-6 z-50 whitespace-nowrap">
                <Link to="/pc/gaming" className="hover:underline">
                  PC Gaming
                </Link>
                <Link to="/pc/office" className="hover:underline">
                  Văn Phòng
                </Link>
                <Link to="/pc/workstation" className="hover:underline">
                  Workstation
                </Link>
                <Link to="/pc/mini" className="hover:underline">
                  Mini PC
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Biểu tượng bên phải */}
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
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to="/account">Tài Khoản</Link>
              </li>
              <li>
                <Link to="/logout">Đăng Xuất</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
