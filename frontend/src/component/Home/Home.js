import React, { Fragment, useEffect } from "react";
import "./Home.css";
// import { CgMouse } from "react-icons/all";
import { CiSaveDown1 } from "react-icons/ci";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import girlImg from "../../images/homegirl.png";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Mobile Shop" /> {/*show in browser when search*/}
          <div className="banner">
            <div className="headingDiv1">
              <p>WELCOME TO ONLINE MOBILE SHOP</p>
              <h1>FIND AMAZING PRODUCTS BELOW</h1>

              <a href="#container">
                <button>
                  <span style={{ position: "relative" }}>
                    Scroll{" "}
                    <CiSaveDown1
                      style={{
                        position: "absolute",
                        marginLeft: ".3em",
                        top: ".1em",
                      }}
                    />
                  </span>
                </button>
              </a>
            </div>

            <img src={girlImg} alt="" className="girlImg1" />
          </div>
          <h2 className="homeHeading">FEATURED PRODUCTS</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Home;

//===================================================================

// const Home = () => {

/*

            */

//   return (

//
//
//       )}
//     </Fragment>
//   );
// };

// export default Home;
