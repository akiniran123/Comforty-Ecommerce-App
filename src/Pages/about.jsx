import React from "react";
import aboutImg from "../assets/anh.jpg";

const About = () => {
  return (
    <div className="p-10 max-w-8xl mx-auto bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      
      <img
        src={aboutImg}
        alt="Ảnh minh họa"
        className="w-150 h-auto float-left mr-6 mb-4 rounded-lg shadow"
      />

      <p className="text-lg leading-relaxed">
  <strong className="block text-xl font-semibold mt-6 mb-2">Về chúng tôi</strong>
  Chúng tôi là một nhóm các lập trình viên, nhà thiết kế và nhà sáng lập trẻ có chung niềm đam mê với công nghệ và đổi mới. Dự án này được phát triển với mong muốn tạo ra một nền tảng hiện đại, dễ sử dụng và mang tính ứng dụng cao cho người dùng trong và ngoài nước.

  <strong className="block text-xl font-semibold mt-6 mb-2">Sứ mệnh</strong>
  Sứ mệnh của chúng tôi là đơn giản hóa trải nghiệm công nghệ cho mọi người. Chúng tôi tin rằng bất kỳ ai cũng có thể tận hưởng những lợi ích mà công nghệ mang lại mà không cần phải hiểu biết chuyên sâu về kỹ thuật. Dự án được thiết kế để giúp người dùng tiếp cận các tiện ích thông minh một cách nhanh chóng và hiệu quả.

  <strong className="block text-xl font-semibold mt-6 mb-2">Tầm nhìn</strong>
  Trong 5 năm tới, chúng tôi đặt mục tiêu trở thành một trong những nền tảng hàng đầu tại khu vực Đông Nam Á trong lĩnh vực công nghệ số và dịch vụ trực tuyến. Với sự phát triển bền vững và cải tiến không ngừng, chúng tôi hy vọng có thể mở rộng quy mô và tác động tích cực đến hàng triệu người dùng.

  <strong className="block text-xl font-semibold mt-6 mb-2">Giá trị cốt lõi</strong>
  - <strong>Người dùng là trung tâm:</strong> Mọi thiết kế và tính năng đều xoay quanh trải nghiệm người dùng.  
  - <strong>Đổi mới liên tục:</strong> Chúng tôi luôn cập nhật công nghệ mới và tối ưu hóa hiệu suất hệ thống.  
  - <strong>Minh bạch & Uy tín:</strong> Xây dựng niềm tin bằng chất lượng và sự trung thực.  
  - <strong>Hợp tác và phát triển:</strong> Mở rộng đối tác và cùng phát triển hệ sinh thái công nghệ toàn diện.

  <strong className="block text-xl font-semibold mt-6 mb-2">Đội ngũ phát triển</strong>
  Dự án được xây dựng bởi những thành viên tâm huyết, có kinh nghiệm trong các lĩnh vực: thiết kế giao diện người dùng (UI/UX), lập trình frontend/backend, quản lý sản phẩm và chiến lược kinh doanh. Mỗi thành viên đều mang đến một màu sắc riêng, nhưng cùng hướng tới một mục tiêu chung: tạo ra sản phẩm chất lượng cao.

  <strong className="block text-xl font-semibold mt-6 mb-2">Cam kết với khách hàng</strong>
  Chúng tôi cam kết không ngừng cải tiến và lắng nghe phản hồi từ người dùng để mang lại trải nghiệm tốt nhất. Sự hài lòng của bạn là động lực lớn nhất để chúng tôi tiếp tục hoàn thiện và phát triển dự án.
</p>


      <div className="clear-both mt-10" />
    </div>
  );
};

export default About;
