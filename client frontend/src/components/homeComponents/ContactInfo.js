import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Facebook</h5>
            <a href="https://www.facebook.com/profile.php?id=100068046214518">
            <p>THCS Phú Diễn</p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Vị trí</h5>
            <a href="https://maps.app.goo.gl/WQa3moGWnDkYrkBJA">
            <p className="location">886 Đ. Cầu Diễn, Cầu Diễn, Từ Liêm, Hà Nội</p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Zalo</h5>
            <a href="https://zalo.me/0327565878">
            <p>0327 565 878</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
