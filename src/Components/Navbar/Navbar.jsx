import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div >

            {/* nabvar top  */}
            <div className="navbar_top flex items-center justify-center bg-[#5a5f99] h-[45px] w-full">

                <div className="lg:container flex justify-between items-center">

                    <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize"><Check /> chào mừng đến với đấu trường</p>

                    <div className="navbar_top_right flex items-center gap-6">
                        <select defaultValue="Server location" className="bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-black ">
                            <option>Tiếng Việt</option>
                            <option>English</option>
                        </select>

                        <button><Link className="text-sm text-black font-inter font-normal capitalize">Bản đồ cửa hàng</Link></button>
                        <button><Link className="flex items-center text-sm text-black font-inter font-normal capitalize"><Info /> Trợ Giúp</Link></button>
                    </div>

                </div>
            </div>


            {/* navbar middle  */}
            <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
                <div className="lg:container grid grid-cols-3 items-center">

                    <div className="logo_wrapper">
                       <Link 
  to="/" 
  className="flex items-center"
>
  <img src="/src/assets/logo.png" alt="Logo" className="w-28 h-28" />
</Link>



                    </div>

                    <div className="search_box">
                        <form action="#" className="max-w-[443px] h-[44px] relative">
                            <input type="text" placeholder="Search here..." className="max-w-[443px] w-full h-full bg-white rounded-lg  pl-4" />

                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size='22px' color="#5a5f99" /></button>
                        </form>
                    </div>

                    {/* navbar middle right  */}
                    <div className="navbar_middle_right flex items-center gap-4">

                        <button className="btn capitalize">
                            <ShoppingCart />Giỏ hàng<div className="badge badge-sm bg-[#029fae]">0</div>
                        </button>
                        <button className="btn capitalize">
                            <Heart />
                        </button>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a><Link>Tài Khoản</Link></a></li>
                                <li><a><Link>Đăng Xuất</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            {/* navbar bottom  */}
            <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
                <div className="lg:container flex items-center justify-between">

                    <div className="navbar_bottom_left flex items-center gap-8">
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"> <Menu /> menu</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>PC</a></li>
                                <li><a>LapTop</a></li>
                                <li><a>Điện Thoại</a></li>
                                <li><a>Đồng hồ điện tử</a></li>
                                <li><a>xe máy điện</a></li>
                            </ul>
                        </div>

                        <nav className="flex items-center gap-8">
                            <NavLink to='/' className='text-sm text-[#029fae] font-inter font-medium capitalize'>Trang chủ</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>Giới thiệu</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>Tin tức</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>Chính sách</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>+ Đăng tin</NavLink>
                        </nav>
                    </div>


                    <div className="navbar_bottom_right">
                        <p className="text-sm text-[#636270] font-inter font-normal capitalize">Liên hệ: <span className="text-[#5a5f99]">0868576379</span></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;