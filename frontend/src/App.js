import "./App.css";
import React from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
// import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
    console.log(stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());// prevent from inspect
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          exact
          path="/account"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile></UpdateProfile>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/password/update"
          element={
            <ProtectedRoute>
              <UpdatePassword></UpdatePassword>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/shipping"
          element={
            <ProtectedRoute>
              <Shipping></Shipping>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/confirm"
          element={
            <ProtectedRoute>
              <ConfirmOrder></ConfirmOrder>
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/process/payment"
          element={
            stripeApiKey && (
              <Elements stripe={loadStripe(stripeApiKey)}>
                {" "}
                <ProtectedRoute>
                  <Payment></Payment>
                </ProtectedRoute>
              </Elements>
            )
          }
        />
        <Route
          exact
          path="/success"
          element={
            <ProtectedRoute>
              <OrderSuccess></OrderSuccess>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders></MyOrders>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetails></OrderDetails>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/products"
          element={
            <ProtectedRoute isAdmin={true}>
              <ProductList></ProductList>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/product"
          element={
            <ProtectedRoute isAdmin={true}>
              <NewProduct></NewProduct>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/product/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <UpdateProduct></UpdateProduct>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/orders"
          element={
            <ProtectedRoute isAdmin={true}>
              <OrderList></OrderList>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/order/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <ProcessOrder></ProcessOrder>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/users"
          element={
            <ProtectedRoute isAdmin={true}>
              <UsersList></UsersList>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/user/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <UpdateUser></UpdateUser>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/reviews"
          element={
            <ProtectedRoute isAdmin={true}>
              <ProductReviews></ProductReviews>
            </ProtectedRoute>
          }
        />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
           path="/*"
          element={
            window.location.pathname === "/process/payment" ? null : <NotFound/>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

//=============================================================================
// import "./App.css";
//

//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
// import NewProduct from "./component/Admin/NewProduct";
//
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UpdateUser from "./component/Admin/UpdateUser";
//
//
// 

// function App() {

//

//
//   }, []);

//

//   return (
//     <Router>
//       <Header />

//

//
//         <Elements stripe={loadStripe(stripeApiKey)}>
//           <ProtectedRoute exact path="/process/payment" component={Payment} />
//         </Elements>
//       )}

//       <Switch>
//
//         <Route exact path="/product/:id" component={ProductDetails} />
//         <Route exact path="/products" component={Products} />
//

//

//         <Route exact path="/contact" component={Contact} />

//         <Route exact path="/about" component={About} />

//

//         <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

//         <ProtectedRoute
//           exact
//           path="/password/update"
//           component={UpdatePassword}
//         />

//

//

//

//         <Route exact path="/cart" component={Cart} />

//         <ProtectedRoute exact path="/shipping" component={Shipping} />

//         <ProtectedRoute exact path="/success" component={OrderSuccess} />

//         <ProtectedRoute exact path="/orders" component={MyOrders} />

//         <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

//         <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

//         <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/dashboard"
//           component={Dashboard}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/products"
//           isAdmin={true}
//           component={ProductList}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/product"
//           isAdmin={true}
//           component={NewProduct}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/product/:id"
//           isAdmin={true}
//           component={UpdateProduct}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/orders"
//           isAdmin={true}
//           component={OrderList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/order/:id"
//           isAdmin={true}
//           component={ProcessOrder}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/users"
//           isAdmin={true}
//           component={UsersList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/user/:id"
//           isAdmin={true}
//           component={UpdateUser}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/reviews"
//           isAdmin={true}
//           component={ProductReviews}
//         />

//         
//       </Switch>

//
//     </Router>
//   );
// }

// export default App;
