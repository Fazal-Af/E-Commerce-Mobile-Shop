import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom';

const OrderSuccess = () => {
//    const navigate=useNavigate();
// const onClick=()=>{
//     navigate("/orders")
// }
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
      {/* <button onClick={onClick}>View ord</button> */}
      {/* <Navigate to="/orders">View Orders</Navigate> */}
    </div>
  );
};

export default OrderSuccess;