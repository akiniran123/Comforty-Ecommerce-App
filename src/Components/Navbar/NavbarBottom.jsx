import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavbarBottom = () => {
  return (
    <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
      <div className="lg:container flex items-center justify-between">
        {/* Bên trái */}
        <div className="navbar_bottom_left flex items-center gap-8">
          {/* Menu 3 gạch */}
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-2 capitalize">
              <Menu /> Menu
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-60 p-2 shadow-sm">
              {/* PC + submenu */}
              <li>
                <details>
                  <summary>PC</summary>
                  <ul className="p-2">
                    <li><Link to="/pc/gaming">PC Gaming</Link></li>
                    <li><Link to="/pc/van-phong">PC Văn Phòng</Link></li>
                    <li><Link to="/pc/workstation">PC Đồ Họa / Workstation</Link></li>
                    <li><Link to="/pc/mini">Mini PC / PC Nhỏ Gọn</Link></li>
                  </ul>
                </details>
              </li>

              {/* Laptop */}
              <li><Link to="/laptop">Laptop</Link></li>

              {/* Linh kiện */}
              <li>
                <details>
                  <summary>Linh kiện máy tính</summary>
                  <ul className="p-2">
                    <li><Link to="/linh-kien/cpu">CPU</Link></li>
                    <li><Link to="/linh-kien/mainboard">Mainboard</Link></li>
                    <li><Link to="/linh-kien/ram">RAM</Link></li>
                    <li><Link to="/linh-kien/o-cung">Ổ cứng SSD/HDD</Link></li>
                    <li><Link to="/linh-kien/vga">VGA / Card đồ họa</Link></li>
                    <li><Link to="/linh-kien/psu">PSU / Nguồn</Link></li>
                    <li><Link to="/linh-kien/case">Case máy tính</Link></li>
                    <li><Link to="/linh-kien/tan-nhiet">Tản nhiệt (Air / Water)</Link></li>
                  </ul>
                </details>
              </li>

              {/* Màn hình */}
              <li><Link to="/man-hinh">Màn hình máy tính</Link></li>

              {/* Phụ kiện */}
              <li>
                <details>
                  <summary>Phụ kiện</summary>
                  <ul className="p-2">
                    <li><Link to="/phu-kien/chuot">Chuột</Link></li>
                    <li><Link to="/phu-kien/ban-phim">Bàn phím</Link></li>
                    <li><Link to="/phu-kien/tai-nghe">Tai nghe</Link></li>
                    <li><Link to="/phu-kien/ghe-gaming">Ghế Gaming</Link></li>
                    <li><Link to="/phu-kien/khac">Webcam, USB, v.v.</Link></li>
                  </ul>
                </details>
              </li>

              {/* Các mục khác */}
              <li><Link to="/phone">Điện Thoại</Link></li>
              <li><Link to="/watch">Đồng hồ điện tử</Link></li>
              <li><Link to="/bike">Xe máy điện</Link></li>
            </ul>
          </div>

          {/* Menu điều hướng */}
          <nav className="flex items-center gap-8">
            <NavLink to="/" className="text-sm text-[#029fae] font-inter font-medium capitalize">Trang chủ</NavLink>
            <NavLink to="/about" className="text-sm text-[#636270] font-inter font-medium capitalize">Giới thiệu</NavLink>
            <NavLink to="/news" className="text-sm text-[#636270] font-inter font-medium capitalize">Tin tức</NavLink>
            <NavLink to="/policy" className="text-sm text-[#636270] font-inter font-medium capitalize">Chính sách</NavLink>
            <NavLink to="/post" className="text-sm text-[#636270] font-inter font-medium capitalize">+ Đăng tin</NavLink>
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
