import { Armchair, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";


const Footer = () => {
    return (
        <footer>




            <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
                <div className="lg:container mx-auto">

                    <div className="grid grid-cols-4">

                        <div>
                            {/* logo wrapper  */}
                            <div className="logo_wrapper mb-7">
                                <Link to='/' className="text-xl text-[#a3a8e0] font-inter font-medium capitalize flex items-center gap-2"><Armchair size='2rem' color="#029fae" /> sự thoải mái</Link>
                            </div>

                            <p className="text-base text-[#5a5f99] font-inter font-normal mb-4 max-w-[350px]">Chúng tôi luôn đặt chất lượng và sự thoải mái của khách hàng lên hàng đầu, cam kết mang đến những sản phẩm tốt nhất với dịch vụ tận tâm và chuyên nghiệp</p>

                            <div className="footer_social flex items-center gap-3">
                                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]"><Facebook size='1.5rem' color="#007580" /></Link>


                                <Link className="p-3 inline-block"><Twitter size='1.5rem' color="#007580" /></Link>


                                <Link className="p-3 inline-block"><Instagram size='1.5rem' color="#007580" /></Link>


                                <Link className="p-3 inline-block"><Youtube size='1.5rem' color="#007580" /></Link>
                            </div>
                        </div>

                        <div className="footer_wrapper">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">Sản phẩm</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Ghế êm</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Ghế</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Ghế cách</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Bàn ghế</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Ghế  gỗ</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Ghế đá công viên</Link></li>
                            </ul>
                        </div>

                        <div className="footer_wrapper">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">Hỗ trợ</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Trợ giúp câu hỏi</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Điều khoản & điều kiện</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Chính sách bảo mật</Link></li>
                                <li><Link className="text-base text-[#5a5f99] font-inter font-normal capitalize">Giúp đỡ</Link></li>
                            </ul>
                        </div>

                        <div className="newsletter">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">Hộp thư</h3>
                            <form action="#" className="max-w-[424px] w-full flex items-center gap-2">
                                <input type="email" placeholder="Email của bạn ..." className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2" />
                                <button type="submit" className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer">Đặt</button>
                            </form>
                        </div>
                    </div>



                </div>
            </div>


            <div className="footer_bottom w-full h-[75px] flex items-center justify-center ">
                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                           <p className="text-base text-[#9a9caa] font-normal font-inter">@ 2025 NexLoot- Sáng tạo & phát triển bởi đội ngũ của chúng tôi <span className="text-[#5a5f99]">nhóm x</span></p> 
                        </div>
                        <div className="flex items-center gap-3.5">
                            <p className="flex items-center gap-2 text-[#9a9caa] text-xl">Ngân hàng <Banknote size='2rem' /></p>

                            <p className="flex items-center gap-2 text-[#9a9caa] text-xl">Thẻ tín dụng <CreditCard size='2rem' /></p>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    );
};

export default Footer;