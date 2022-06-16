import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useState } from "react";

const Orders = (props) => {
  const { orders } = props;
  const [orderS, setOrderS] = useState(orders);

  useEffect(() => {
    setOrderS(orders);
  }, [props.orders]);

  const showPrice = (price) => {
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  const renderStatus = (order) => {
    let ip = "";
    if (order === "dahoanthanh") {
      ip = <span className="badge btn-success">Đã hoàn thành</span>;
    } else if (order === "dachomuon") {
      ip = <span className="badge btn-info">Đã Cho mượn</span>;
    } else if (order === "datrasach") {
      ip = <button className="badge btn-warning">Đã Trả Sách</button>;
    } else {
      ip = <button className="badge btn-danger">Chờ xử lí</button>;
    }
    return ip;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tên KH</th>
          <th scope="col">Email</th>
          <th scope="col">Tổng tiền</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Thể loại</th>
          <th scope="col">Thời gian</th>
          <th>Trạng thái</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orderS.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user && order.user.name}</b>
            </td>
            <td>{order.user && order.user.email}</td>
            <td>${order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Paid At {moment(order.paidAt).format("MMM Do YY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  Not Paid
                </span>
              )}
            </td>
            <td>
              {order.typePay === "buy" ? (
                <span className="badge rounded-pill alert-success">Mua</span>
              ) : (
                <span className="badge rounded-pill alert-success">Mượn</span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM Do YY")}</td>
            <td>{renderStatus(order.status)}</td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}

        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
