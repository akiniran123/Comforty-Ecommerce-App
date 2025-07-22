import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "Tất cả",
            product: 'Tất cả'
        },
        {
            id: 1,
            title: "Mới nhất",
            product: 'Mới nhất'
        },
        {
            id: 2,
            title: "Xu hướng",
            product: 'Xu hướng'
        },
        {
            id: 3,
            title: "Bán chạy nhất",
            product: 'Bán chạy nhất'
        },
    ];


const products = [
    {
        title: 'Ghế đôn thư viện',
        status: 'Mới',
        price: '250.000₫',
        image: '/src/assets/products/product_1.png',
        currentPrice: '200.000₫',
        product: 'newest',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_2.png',
        product: 'newest',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Mới',
        price: '250.000₫',
        image: '/src/assets/products/product_3.png',
        currentPrice: '200.000₫',
        product: 'newest',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_4.png',
        product: 'newest',
    },

    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_5.png',
        product: 'trending',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Mới',
        price: '250.000₫',
        image: '/src/assets/products/product_6.png',
        currentPrice: '200.000₫',
        product: 'trending',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_7.png',
        product: 'trending',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_8.png',
        product: 'trending',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Mới',
        price: '250.000₫',
        image: '/src/assets/products/product_1.png',
        currentPrice: '200.000₫',
        product: 'best_seller',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_2.png',
        product: 'best_seller',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_3.png',
        product: 'best_seller',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_5.png',
        product: 'best_seller',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_6.png',
        product: 'featured',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_7.png',
        product: 'featured',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_8.png',
        product: 'featured',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_1.png',
        product: 'featured',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_2.png',
        product: 'all',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_3.png',
        product: 'all',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_4.png',
        product: 'all',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_5.png',
        product: 'all',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_6.png',
        product: 'all',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_7.png',
        product: 'all',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_8.png',
        product: 'all',
    },
    {
        title: 'Ghế đôn thư viện',
        status: 'Khuyến mãi',
        price: '250.000₫',
        image: '/src/assets/products/product_1.png',
        product: 'all',
    },
];


    const productFilter = products.filter(product => product.product === active?.product);
    console.log(productFilter);


    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'Sản phẩm của chúng tôi'} textAlign={'center'} mb={'mb-5'}></SectionTitle>


                <div className="flex items-center justify-center gap-6 mb-11">
                    {
                        productTitle?.map((title, indx) => (
                            <button key={title?.id}

                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}
                                className={`text-base font-black uppercase font-inter cursor-pointer ${active?.id === indx ? 'text-[#9a9caa]' : 'text-[#9a9caa]'
                                    }`}>
                                {title?.title}
                            </button>
                        ))
                    }
                </div>
            </div>


            <div className="grid grid-cols-4 items-center gap-6">
                {

                    productFilter?.map((product, index) => (
                        <div key={index} className="p-4">
                            <div className="feature_image mb-4 relative">
                                <img className="w-full max-h-[312px] rounded-lg object-cover" src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                            <button className="text-sm font-inter font-normal">{product?.status}</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="feature_content">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{product?.title}</h4>
                                    <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff" /></span>
                                </div>
                                <p className="text-xl flex items-center gap-2 text-[#5a5f99] font-semibold font-inter ">
                                    {product?.price}
                                    {
                                        product?.currentPrice && (
                                            <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;