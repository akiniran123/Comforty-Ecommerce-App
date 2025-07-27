import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="navbar_top flex items-center justify-center bg-[#5a5f99] h-[45px] w-full">
      <div className="lg:container flex justify-between items-center">
        <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
          <Check /> chào mừng đến với đấu trường
        </p>

        <div className="navbar_top_right flex items-center gap-6">
          <select
            defaultValue="Server location"
            className="h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-black"
          >
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
  );
};

export default NavbarTop;
