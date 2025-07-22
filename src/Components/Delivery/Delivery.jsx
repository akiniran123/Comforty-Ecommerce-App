import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
    return (
        <div className="lg:container bg-white mx-auto shadow-md p-7 rounded-2xl">
            <div className="grid grid-cols-4">
                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Percent size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#5a5f99] capitalize font-inter font-medium mb-2.5">Giảm giá</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Doanh số bán hàng mỗi tuần</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Truck size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#5a5f99] capitalize font-inter font-medium mb-2.5">Giao hàng miễn phí</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Miễn phí 100% cho tất cả các đơn hàng</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Clock3 size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#5a5f99] capitalize font-inter font-medium mb-2.5">Hỗ trợ 24/7</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Chúng tôi quan tâm đến trải nghiệm của bạn</p>
                        </div>
                    </div>
                </div>


                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><ShieldCheck size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#5a5f99] capitalize font-inter font-medium mb-2.5">Thanh toán an toàn</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Phương thức thanh toán an toàn 100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;