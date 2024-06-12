import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "./../Redux/Actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
  const totalLoanPrice = cartItems
    .reduce((a, i) => a + i.qty * i.loanPrice, 0)
    .toFixed(2);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, "buy"));
    }
  }, [dispatch, productId, qty]);

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  const checkOutHandlerLoan = () => {
    localStorage.removeItem("cartItems");
    dispatch(addToCart(productId, qty, "loan"));
    history.push("/login?redirect=shipping");
  };

  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id));
  };

  const showPrice = (price) => {
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  console.log(cart);

  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {cartItems.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
            Hiện tại chưa có sản phẩm trong giỏ hàng
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "15px",
              }}
            >
              Mua hàng ngay....
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Danh sách sản phẩm trong giỏ hàng của bạn
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems.map((item) => (
              <div className="cart-iterm row">
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>Số lượng</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>Đơn giá</h6>
                  <h4 style={{ fontSize: "16px" }}>
                    Khi mua : {showPrice(item.price)}
                  </h4>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginTop: "10px",
                      color: "red",
                    }}
                  >
                    Khi mượn : {showPrice(item.loanPrice)}
                  </h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            <div className="total">
              <span className="sub">Tổng mua:</span>
              <span className="total-price">{total} VND</span>
            </div>
            <div className="total">
              <span className="sub">Tổng mượn:</span>
              <span className="total-price" style={{ color: "red" }}>
                {totalLoanPrice} VND
              </span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-4 ">
                <button class="">Mua hàng thêm</button>
              </Link>
              {total > 0 && (
                <div className="col-md-4 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Thanh toán ngay</button>
                </div>
              )}
              <div className="col-md-4 d-flex justify-content-md-end mt-3 mt-md-0">
                <button onClick={checkOutHandlerLoan}>Thuê Ngay</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;
