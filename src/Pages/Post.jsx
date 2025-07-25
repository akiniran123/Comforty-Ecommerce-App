import React from "react";

const posts = [
  {
    id: 1,
    title: "Bán iPhone 13 Pro Max 128GB - Like New",
    price: "17.500.000đ",
    location: "Hà Nội",
    image: "https://via.placeholder.com/300x200?text=iPhone",
    description: "Máy đẹp 99%, chính hãng VN/A, còn bảo hành 5 tháng.",
    date: "25/07/2025",
    status: "Đã sử dụng",
  },
  {
    id: 2,
    title: "Laptop ASUS TUF Gaming F15 RTX 4060 mới 100%",
    price: "25.000.000đ",
    location: "TP. Hồ Chí Minh",
    image: "https://via.placeholder.com/300x200?text=Laptop",
    description: "Máy mới mua, chưa bóc seal, full box, bảo hành 2 năm.",
    date: "23/07/2025",
    status: "Mới 100%",
  },
  {
    id: 3,
    title: "Ghế gaming công thái học màu đen đỏ",
    price: "1.200.000đ",
    location: "Đà Nẵng",
    image: "https://via.placeholder.com/300x200?text=Ghe+Gaming",
    description: "Ghế mua 3 tháng, còn rất mới, bán vì chuyển nhà.",
    date: "21/07/2025",
    status: "Đã sử dụng",
  },
];

const Post = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-20 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-10">Tin Đăng Mua Bán</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-red-500 font-bold text-base">{post.price}</p>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="flex items-center justify-between text-xs mt-2 text-gray-500">
                <span>{post.location}</span>
                <span>{post.date}</span>
              </div>
              <div className="text-sm mt-1">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                  {post.status}
                </span>
              </div>
              <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
