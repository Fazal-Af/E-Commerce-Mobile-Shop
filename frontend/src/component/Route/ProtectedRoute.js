import React, {Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route,Outlet } from "react-router-dom";


// const ProtectedRoute = ({isAdmin,isAuthenticated,user}) => {
//   const { loading } = useSelector((state) => state.user);
//   if (isAuthenticated === false) {
//     return <Navigate to="/login" />;
//   }

//   if (isAdmin === true && user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <Fragment>
//       {loading===false && (<Outlet/>)}

//     </Fragment>
    
//   )
// };
const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticated, user } = useSelector(state => state.user)

  if (loading===false && isAuthenticated === false) {
      return <Navigate to='/login' />
  }

  if (loading===false && isAdmin === true && user.role !== 'admin') {
      return <Navigate to='/login' />
  }

  return <Fragment>{loading === false ? children : null}</Fragment>
}

export default ProtectedRoute;
