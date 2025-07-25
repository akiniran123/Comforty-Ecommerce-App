import React from "react";

const newsList = [
  {
    id: 1,
    title: "Ra mắt bộ sưu tập mùa hè 2025",
    date: "25/07/2025",
    content:
      "Chúng tôi tự hào giới thiệu bộ sưu tập thời trang mùa hè 2025 với những thiết kế hiện đại, chất liệu thoáng mát và màu sắc tươi sáng. Hãy nhanh tay sở hữu những món đồ giới hạn trong mùa này!",
    image:
      "https://source.unsplash.com/600x400/?fashion,summer",
  },
  {
    id: 2,
    title: "Chương trình ưu đãi tháng 8",
    date: "20/07/2025",
    content:
      "Từ ngày 01/08 đến 15/08, khách hàng sẽ được giảm giá đến 50% cho nhiều sản phẩm. Áp dụng cả online và tại cửa hàng. Đừng bỏ lỡ!",
    image:
      "https://source.unsplash.com/600x400/?sale,discount",
  },
  {
    id: 3,
    title: "Comforty chính thức có mặt tại Đà Nẵng",
    date: "10/07/2025",
    content:
      "Chúng tôi rất vui mừng thông báo cửa hàng Comforty đầu tiên tại miền Trung đã khai trương tại Đà Nẵng! Hãy đến tham quan và nhận nhiều phần quà hấp dẫn.",
    image:
      "https://source.unsplash.com/600x400/?store,grandopening",
  },
];

const News = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Tin Tức Mới Nhất
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">{news.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {news.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {news.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

