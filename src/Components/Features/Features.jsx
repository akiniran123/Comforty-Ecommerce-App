import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {

    const features = [
        {
            title: 'ghế xịn',
            status: 'Mới',
            price: '250.000đ',
            image: '/src/assets/features/product_1.png',
            currentPrice: '200.000đ',
        },
        {
            title: 'ghế ngon nghẻ',
            status: 'giảm giá',
            price: '250.000đ',
            image: '/src/assets/features/product_2.png',
        },
        {
            title: 'ghế vip',
            price: '250.000đ',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'ghế bắc đẩu',
            status: 'Mới',
            price: '250.000đ',
            image: '/src/assets/features/product_4.png',
            currentPrice: '200.000đ',
        },
        {
            title: 'ghế thường',
            status: 'Mới',
            price: '250.000đ',
            image: '/src/assets/features/product_1.png',
            currentPrice: '200.000đ',
        },
        {
            title: 'ghế gỗ',
            status: 'Giảm giá',
            price: '250.000đ',
            image: '/src/assets/features/product_2.png',
        },
        {
            title: 'ghế da',
            price: '250.000đ',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'ghế nhựa',
            status: 'Mới',
            price: '250.000đ',
            image: '/src/assets/features/product_4.png',
            currentPrice: '200.000đ',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div>
            <div className="lg:container mx-auto ">
                <div className="mt-16">
  <SectionTitle title="Sản phẩm nổi bật" mb="mb-9"></SectionTitle>
</div>

                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {
                            features?.map((feature, index) => (
                                <div key={index} className="p-4">
                                    <div className="feature_image mb-4 relative">
                                        <img className="w-full h-full object-cover" src={feature?.image} alt={feature?.title} />
                                        {
                                            feature?.status && (
                                                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                                    <button className="text-sm font-inter font-normal">{feature?.status}</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="feature_content">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{feature?.title}</h4>
                                            <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff"  /></span>
                                        </div>
                                        <p className="text-xl flex items-center gap-2 text-[#a3a8e0] font-semibold font-inter ">
                                            {feature?.price} 
                                            {
                                                feature?.currentPrice && (
                                                    <span className="text-sm text-[#9a9caa] font-inter font-normal">{feature?.currentPrice}</span>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Features;