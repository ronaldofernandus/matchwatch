import React, { useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faInfo } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import image_2 from "./img-2.jpg";
import image_3 from "./img-3.png";
import { Link } from "react-router-dom";
import { getproduct, get_product_detail } from "../../action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addorder } from "../../action/OrderAction";
import { useNavigate } from "react-router-dom";

function Product() {
  const { getProductResult, getProductLoading, getProductError } = useSelector(
    (state) => state.productReducer
  );
  const { postorderResult } = useSelector((state) => state.orderReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (postorderResult) {
      Swal.fire("Order Successfully!", "Clicked the button!", "success");
      navigate("/order");
    }
  });

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getproduct());
  }, [dispatch]);
  return (
    <>
      <div className="banner-home">
        <img
          className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
          src={image_3}
          alt=""
        ></img>
      </div>
      <div className="bg-color-product">
        <div className="container">
          <br></br>
          <h1 className="product-title">All Products</h1>
          <br></br>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {getProductResult ? (
              getProductResult.map((e) => {
                return (
                  <>
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src={require(`../../images/${e.product_images[0].prim_filename}`)}
                          className="card-img-top img-thumbnail"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{e.prod_name}</h5>
                          <p className="card-text">
                            <span>Rp </span> {e.prod_price}
                          </p>
                          <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link
                              className="btn btn-sm btn btn-outline-primary"
                              onClick={() => dispatch(get_product_detail(e.id))}
                              to={`detail/${e.id}`}
                            >
                              <span>
                                <FontAwesomeIcon
                                  icon={faInfo}
                                ></FontAwesomeIcon>
                              </span>{" "}
                              Detail
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-success"
                              onClick={() =>
                                dispatch(
                                  addorder(
                                    localStorage.getItem("access_token"),
                                    e.id
                                  )
                                )
                              }
                            >
                              <span>
                                <FontAwesomeIcon
                                  icon={faPlus}
                                ></FontAwesomeIcon>
                              </span>{" "}
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : getProductLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getProductError ? getProductError : "Data Kosong"}</p>
            )}
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
