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
            <a href="https://www.facebook.com/Minhanh7220/">
            <p>Thùy Tiên</p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Vị trí</h5>
            <a href="https://goo.gl/maps/1BtmWsWyZQBZMrdB9">
            <p className="location">41A - Phú Diễn - BTL - Hà Nội</p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Zalo</h5>
            <a href="https://zalo.me/0359206636">
            <p>0359 206 636</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
