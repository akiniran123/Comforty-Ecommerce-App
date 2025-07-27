import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavbarBottom = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPcSubmenu, setShowPcSubmenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowMenu(false);
        setShowPcSubmenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b border-[#e1e3e5] relative z-50">
      <div className="lg:container flex items-center justify-between w-full">
        {/* Bên trái */}
        <div
          className="navbar_bottom_left flex items-center gap-8 relative"
          ref={dropdownRef}
        >
          {/* Nút menu */}
          <button
            className="btn m-1 flex items-center gap-2 capitalize text-black hover:text-[#029fae]"
            onClick={() => {
              setShowMenu((prev) => !prev);
              setShowPcSubmenu(false);
            }}
          >
            <Menu /> Menu
          </button>

          {/* MENU CHÍNH */}
          {showMenu && (
            <ul className="absolute top-16 left-0 bg-white rounded-lg shadow-lg z-40 p-4 w-60 space-y-2">
              <li>
                <button
                  onClick={() => setShowPcSubmenu((prev) => !prev)}
                  className="w-full text-left text-black hover:text-[#029fae]"
                >
                  PC ▸
                </button>

                {/* MENU PHỤ CỦA PC */}
                {showPcSubmenu && (
                  <ul className="absolute top-0 left-[240px] bg-white shadow-lg rounded-md p-4 z-50 space-y-2 min-w-[220px] border">
                    <li>
                      <Link
                        to="/pc/gaming"
                        className="text-black hover:text-[#029fae]"
                      >
                        PC Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pc/van-phong"
                        className="text-black hover:text-[#029fae]"
                      >
                        PC Văn Phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pc/workstation"
                        className="text-black hover:text-[#029fae]"
                      >
                        PC Đồ Họa / Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pc/mini"
                        className="text-black hover:text-[#029fae]"
                      >
                        Mini PC / PC Nhỏ Gọn
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/laptop"
                  className="text-black hover:text-[#029fae]"
                >
                  Laptop
                </Link>
              </li>
              <li>
                <Link
                  to="/man-hinh"
                  className="text-black hover:text-[#029fae]"
                >
                  Màn hình máy tính
                </Link>
              </li>
              <li>
                <Link
                  to="/phone"
                  className="text-black hover:text-[#029fae]"
                >
                  Điện Thoại
                </Link>
              </li>
              <li>
                <Link
                  to="/watch"
                  className="text-black hover:text-[#029fae]"
                >
                  Đồng hồ điện tử
                </Link>
              </li>
              <li>
                <Link
                  to="/bike"
                  className="text-black hover:text-[#029fae]"
                >
                  Xe máy điện
                </Link>
              </li>
            </ul>
          )}

          {/* MENU ĐIỀU HƯỚNG */}
          <nav className="flex items-center gap-8">
            <NavLink
              to="/"
              className="text-sm text-[#029fae] font-inter font-medium capitalize"
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm text-[#636270] font-inter font-medium capitalize"
            >
              Giới thiệu
            </NavLink>
            <NavLink
              to="/news"
              className="text-sm text-[#636270] font-inter font-medium capitalize"
            >
              Tin tức
            </NavLink>
            <NavLink
              to="/policy"
              className="text-sm text-[#636270] font-inter font-medium capitalize"
            >
              Chính sách
            </NavLink>
            <NavLink
              to="/post"
              className="text-sm text-[#636270] font-inter font-medium capitalize"
            >
              + Đăng tin
            </NavLink>
          </nav>
        </div>

        {/* Bên phải */}
        <div className="navbar_bottom_right">
          <p className="text-sm text-[#636270] font-inter font-normal capitalize">
            Liên hệ: <span className="text-[#5a5f99]">0868576379</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
