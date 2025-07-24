import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";

const Client = () => {

    const clientSays = [
        {
            id: 1,
            description: 'Cuộc sống luôn thay đổi từng ngày với nhiều cơ hội và thách thức. Mỗi người đều có một hành trình riêng để khám phá bản thân và thế giới xung quanh. Hãy sống với đam mê, kiên trì theo đuổi ước mơ và tận hưởng từng khoảnh khắc quý giá trong cuộc đời.',
            name: 'Nguyễn Tuấn Nghĩa',
            position: 'Chủ sở hữu & đồng sáng lập NexLoot',
        },
        {
            id: 2,
            description: 'Mỗi khó khăn và thử thách đều là một cơ hội để chúng ta nhìn lại, học hỏi và trưởng thành. Tầm nhìn của tôi là không ngừng đổi mới, để thương hiệu luôn là lựa chọn hàng đầu và mang lại trải nghiệm tuyệt vời cho khách hàng',
            name: 'Trần Đức Anh',
            position: 'Chủ sở hữu & đồng sáng lập NexLoot',
        },
        {
            id: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. lorem50 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. lorem50 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. lorem50 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. lorem50',
            name: 'philip nguyễn',
            position: 'CEO, NexLoot',
        },
        {
            id: 4,
            description: 'I believe that dedication, honesty and creativity are the core elements that help a business develop sustainably. We do not only want to serve our customers, but also want to accompany and become a part of their success',
            name: 'John nathan',
            position: 'CEO, NexLoot',
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="lg:container mx-auto ">

            <SectionTitle title="Tầm Nhìn & Giá Trị

" mb='mb-11'></SectionTitle>

            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                        clientSays?.map((client, index) => (
                            <div key={index} className="p-12 border-[1px] border-[#e1e1e3] rounded-lg">
                                <p className="text-2xl mb-4 text-[#636270] font-inter font-normal client_say_description">{client?.description}</p>
                                <div className="flex items-center">
                                    <h4><User size='4rem' /></h4>
                                    <div>
                                        <h4 className="text-2xl text-[#5a5f99] font-inter font-medium capitalize mb-1.5">{client?.name}</h4>
                                        <p className="text-base text-[#9a9caa] font-inter capitalize font-normal">{client?.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Client;