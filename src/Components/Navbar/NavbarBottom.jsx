import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavbarBottom = () => {
  return (
    <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
      <div className="lg:container flex items-center justify-between">
        <div className="navbar_bottom_left flex items-center gap-8">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize">
              <Menu /> menu
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><Link to="/pc">PC</Link></li>
              <li><Link to="/laptop">LapTop</Link></li>
              <li><Link to="/phone">Điện Thoại</Link></li>
              <li><Link to="/watch">Đồng hồ điện tử</Link></li>
              <li><Link to="/bike">Xe máy điện</Link></li>
            </ul>
          </div>

          <nav className="flex items-center gap-8">
            <NavLink to="/" className="text-sm text-[#029fae] font-inter font-medium capitalize">Trang chủ</NavLink>
            <NavLink to="/about" className="text-sm text-[#636270] font-inter font-medium capitalize">Giới thiệu</NavLink>
            <NavLink to="/news" className="text-sm text-[#636270] font-inter font-medium capitalize">Tin tức</NavLink>
            <NavLink to="/policy" className="text-sm text-[#636270] font-inter font-medium capitalize">Chính sách</NavLink>
            <NavLink to="/post" className="text-sm text-[#636270] font-inter font-medium capitalize">+ Đăng tin</NavLink>
          </nav>
        </div>

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
