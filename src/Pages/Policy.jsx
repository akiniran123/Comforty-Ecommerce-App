import React from "react";

const Policy = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Chính Sách & Điều Khoản
      </h1>

      <div className="space-y-10 text-sm md:text-base leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Chính Sách Đổi Trả</h2>
          <p>
            Khách hàng có thể đổi sản phẩm trong vòng <strong>7 ngày</strong> kể từ ngày nhận hàng nếu sản phẩm có lỗi từ nhà sản xuất hoặc không đúng mô tả.
            Sản phẩm đổi trả cần giữ nguyên nhãn mác, chưa qua sử dụng, và còn đầy đủ hóa đơn.
          </p>
          <p className="mt-2">
            Trong trường hợp đổi sang sản phẩm khác, nếu có chênh lệch giá, khách hàng sẽ thanh toán phần chênh lệch (nếu có).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Chính Sách Giao Hàng</h2>
          <p>
            Chúng tôi cung cấp dịch vụ giao hàng toàn quốc. Thời gian giao hàng từ <strong>2 – 5 ngày làm việc</strong> tùy khu vực. Phí vận chuyển sẽ được hiển thị rõ ràng tại bước thanh toán.
          </p>
          <p className="mt-2">
            Miễn phí vận chuyển cho đơn hàng từ <strong>500.000đ</strong> trở lên. Các đơn hàng ở vùng xa hoặc yêu cầu giao nhanh có thể phát sinh thêm phụ phí.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Chính Sách Bảo Hành</h2>
          <p>
            Các sản phẩm thuộc danh mục điện tử, đồ gia dụng sẽ được bảo hành từ <strong>6 – 12 tháng</strong> tùy vào từng sản phẩm. Chính sách bảo hành được áp dụng khi có hóa đơn mua hàng.
          </p>
          <p className="mt-2">
            Vui lòng liên hệ trung tâm hỗ trợ hoặc gửi email đến <strong>support@comforty.vn</strong> để được hướng dẫn chi tiết về quy trình bảo hành.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Chính Sách Bảo Mật Thông Tin</h2>
          <p>
            Comforty cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng. Dữ liệu sẽ chỉ được sử dụng cho mục đích giao dịch và chăm sóc khách hàng.
          </p>
          <p className="mt-2">
            Chúng tôi không chia sẻ, tiết lộ thông tin của khách hàng cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý rõ ràng từ phía khách hàng.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Điều Khoản Thanh Toán</h2>
          <p>
            Khách hàng có thể thanh toán bằng nhiều hình thức: tiền mặt khi nhận hàng (COD), chuyển khoản ngân hàng hoặc qua các cổng thanh toán điện tử (Momo, ZaloPay, VNPay,...).
          </p>
          <p className="mt-2">
            Tất cả giao dịch được mã hóa và bảo mật theo chuẩn PCI-DSS.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Liên Hệ Hỗ Trợ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về chính sách, xin vui lòng liên hệ:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Hotline: <strong>1900 9999</strong></li>
            <li>Email: <strong>cs@comforty.vn</strong></li>
            <li>Thời gian hỗ trợ: <strong>8h – 20h hàng ngày</strong></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Policy;
