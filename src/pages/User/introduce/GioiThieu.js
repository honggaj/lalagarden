import React from 'react';
import './GioiThieu.css'; // Tạo file CSS để trang trí cho trang này
import NavBar from '../home/Navbar'; 

const GioiThieu = () => {
  return (
   <div>
         <NavBar></NavBar>
  
    <div className="gioithieu-shop-container">
   
    <div className="gioithieu-shop-section">
    
        <div className="gioithieu-shop-content">
          <p>
         <h3> Cây cảnh </h3>có vai trò quan trọng trong việc cải thiện không khí trong nhà, giảm căng thẳng, và tăng cường sự sáng tạo. Nhiều nghiên cứu đã chỉ ra rằng cây xanh có khả năng hấp thụ khí độc và cung cấp oxy, tạo ra một môi trường sống trong lành hơn. Ngoài ra, việc chăm sóc cây cũng là một hoạt động thú vị giúp con người thư giãn và gắn kết với thiên nhiên hơn.          </p>
          <p>
          <h3>LaLaGarden</h3> là một cửa hàng cây cảnh chuyên cung cấp những sản phẩm chất lượng nhằm mang lại không gian sống xanh và tươi mới cho gia đình. Ra đời từ niềm đam mê với thiên nhiên, LaLaGarden không chỉ cung cấp cây cảnh đẹp mà còn đem lại nhiều lợi ích cho sức khỏe như cải thiện chất lượng không khí và giảm căng thẳng. 
          </p>
          <p>
          <h3>Cây cảnh</h3> giúp lọc bụi bẩn, cung cấp oxy, đồng thời tạo ra môi trường sống trong lành hơn. Với dịch vụ tư vấn chuyên nghiệp, LaLaGarden cam kết sẽ giúp bạn lựa chọn cây phù hợp, từ đó nâng cao chất lượng cuộc sống của bạn.
          </p>
        </div>
      </div>

      <div className="gioithieu-shop-section">
        <div className="gioithieu-shop-image">
          <img src="/images/banner2.jpg" alt="Cây cảnh của shop" />
        </div>
        <div className="gioithieu-shop-content">
          <h3>
          Khám Phá Vẻ Đẹp Tự Nhiên Tại LaLaGarden
          </h3>
          <p>
            Với hơn 10 năm kinh nghiệm trong ngành, LaLa Garden tự hào mang đến cho khách hàng sự đa dạng 
            về chủng loại cây từ các giống cây dễ chăm sóc như lưỡi hổ, kim ngân cho đến các loại cây quý hiếm.
          </p>
          <p>
            Đến với chúng tôi, bạn không chỉ mua một chậu cây, mà còn mang về một phần của thiên nhiên.
            Hãy đến LaLa Garden để cùng chúng tôi "xanh hóa" không gian sống của bạn!
          </p>
        </div>
      </div>

      {/* Thêm phần giới thiệu thứ hai */}
      <div className="gioithieu-shop-section">
     
        <div className="gioithieu-shop-content">
          <h3>
          Nơi Khởi Đầu Câu Chuyện Xanh!
        
          </h3>
          <p>
          Không chỉ dừng lại ở việc cung cấp cây cảnh, LaLa Garden còn tổ chức nhiều chương trình tư vấn 
            chăm sóc cây miễn phí cho khách hàng. Chúng tôi mang đến các buổi hướng dẫn cách chăm cây sao cho hiệu quả, 
            giúp cây phát triển khỏe mạnh và làm xanh hơn không gian sống của bạn.  
                    </p>
          <p>
            Hơn thế nữa, chúng tôi luôn cập nhật xu hướng mới nhất trong việc chọn lựa cây phù hợp với từng loại kiến trúc nhà ở 
            và môi trường làm việc, nhằm mang lại cảm giác thư thái và tăng sự thẩm mỹ cho không gian sống.
          </p>
        
        </div>
        <div className="gioithieu-shop-image">
          <img src="/images/banner2.jpg" alt="Cây cảnh khác" />
        </div>
      </div>

      {/* Thêm phần giới thiệu thứ ba */}
      <div className="gioithieu-shop-section">
        <div className="gioithieu-shop-image">
          <img src="/images/banner2.jpg" alt="Dịch vụ cây cảnh" />
        </div>
        <div className="gioithieu-shop-content">
          <h3>
          Đến Với LaLaGarden- Cảm Nhận Không Gian Xanh!
          </h3>
          <p>
          Chúng tôi chuyên cung cấp các loại cây cảnh chất lượng, giúp bạn tạo nên không gian sống trong lành và đầy sức sống.
           Với nhiều năm kinh nghiệm trong lĩnh vực cây cảnh, chúng tôi cam kết mang đến cho bạn sản phẩm tốt nhất cùng dịch vụ chăm sóc khách hàng tận tâm.
            Hãy ghé thăm chúng tôi để tìm cho mình những người bạn xanh thật ý nghĩa!
          </p>
        </div>
      </div>

      {/* Thêm phần giới thiệu thứ tư */}
      <div className="gioithieu-shop-section">
     
        <div className="gioithieu-shop-content">
          <h3>
          Điểm Đến Lý Tưởng Cho Tín Đồ Cây Cảnh!
          </h3>
          <p>
          Nếu bạn đang tìm kiếm những chậu cây độc đáo để tô điểm cho không gian sống, LaLagardens chính là nơi lý tưởng dành cho bạn. 
          </p>
        </div>
        <div className="gioithieu-shop-image">
          <img src="/images/banner2.jpg" alt="Sản phẩm độc đáo" />
        </div>
      </div>

    </div>
    </div>
  );
};

export default GioiThieu;
