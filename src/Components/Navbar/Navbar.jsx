import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom"; // Đổi từ react-router sang react-router-dom

const Navbar = () => {
    return (
        <div>
            {/* Navbar top */}
            <div className="navbar_top flex items-center justify-center bg-[#5a5f99] h-[45px] w-full">
                <div className="lg:container flex justify-between items-center">
                    <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
                        <Check /> chào mừng đến với đấu trường
                    </p>

                    <div className="navbar_top_right flex items-center gap-6">
                        <select defaultValue="Server location" className="h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-black">
                            <option>Tiếng Việt</option>
                            <option>English</option>
                        </select>

                        <Link to="/" className="text-sm text-black font-inter font-normal capitalize">
                            Bản đồ cửa hàng
                        </Link>
                        <Link to="/" className="flex items-center text-sm text-black font-inter font-normal capitalize">
                            <Info /> Trợ Giúp
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navbar middle */}
            <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
                <div className="lg:container grid grid-cols-3 items-center">
                    <div className="logo_wrapper">
                        <Link to="/" className="flex items-center">
                            <img src="/src/assets/logo.png" alt="Logo" className="w-28 h-28" />
                        </Link>
                    </div>

                    <div className="search_box">
                        <form action="#" className="max-w-[443px] h-[44px] relative">
                            <input type="text" placeholder="Search here..." className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4" />
                            <button type="button" className="absolute top-1/2 right-4 -translate-y-1/2">
                                <Search size="22px" color="#5a5f99" />
                            </button>
                        </form>
                    </div>

                    {/* Navbar middle right */}
                    <div className="navbar_middle_right flex items-center gap-4">
                        <button className="btn capitalize">
                            <ShoppingCart /> Giỏ hàng
                            <div className="badge badge-sm bg-[#029fae]">0</div>
                        </button>
                        <button className="btn capitalize">
                            <Heart />
                        </button>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link to="/account">Tài Khoản</Link></li>
                                <li><Link to="/logout">Đăng Xuất</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar bottom */}
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
        </div>
    );
};

export default Navbar;   