import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faShirt,
  faCalendarDays,
  faMagnifyingGlass,
  faShapes,
  faWarehouse,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

import { useDispatch, useSelector } from "react-redux";
import { get_product_detail } from "../.././action/ProductAction";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage, setPostPerPage] = useState(1);

  const indexOfLastImages = currentPage * postPerPage;
  const indexOfFirstImages = indexOfLastImages - postPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const {
    getDetailProductResult,
    getDetailProductLoading,
    getDetailProductError,
  } = useSelector((state) => state.productReducer);

  const pageNumber = [];

  for (
    let i = 1;
    i <= Math.ceil(getDetailProductResult.length / postPerPage);
    i++
  ) {
    pageNumber.push(i);
  }

  const { id } = useParams();

  console.log(+id);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(get_product_detail(+id));
  }, [dispatch]);
  return (
    <div className="bg-color-product">
      <br></br>
      <br></br>
      <div className="container-fluid row-bg-color">
        <br></br>
        {console.log(getDetailProductResult)}
        {getDetailProductResult ? (
          getDetailProductResult.map((e) => {
            return (
              <>
                <div className="row justify-content-center ">
                  <div className="col-6">
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src={`http://localhost:4000/images/${e.product_images[0].prim_filename}`}
                            alt=""
                            className="xzoom"
                            xoriginal={`http://localhost:4000/images/${e.product_images[0].prim_filename}`}
                            style={{
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src={`http://localhost:4000/images/${e.product_images[1].prim_filename}`}
                            alt=""
                            className="xzoom"
                            xoriginal={`http://localhost:4000/images/${e.product_images[1].prim_filename}`}
                            style={{
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src={`http://localhost:4000/images/${e.product_images[2].prim_filename}`}
                            alt=""
                            className="xzoom"
                            xoriginal={`http://localhost:4000/images/${e.product_images[2].prim_filename}`}
                            style={{
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="card-body">
                      <h5 className="card-title">{e.prod_name}</h5>
                      <p className="card-text">{e.prod_desc}</p>
                      <p className="card-text">
                        <span>Rp.</span>
                        {e.prod_price}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon
                              icon={faWarehouse}
                            ></FontAwesomeIcon>{" "}
                            Jumlah Stock :{" "}
                          </span>
                          {e.prod_stock}{" "}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon
                              icon={faWeightHanging}
                            ></FontAwesomeIcon>{" "}
                            Berat Barang:{" "}
                          </span>{" "}
                          {e.prod_weight}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon
                              icon={faCalendarDays}
                            ></FontAwesomeIcon>{" "}
                            Expire:{" "}
                          </span>{" "}
                          {e.prod_expire}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon>{" "}
                            Brand:{" "}
                          </span>{" "}
                          {e.prod_brand}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faShapes}></FontAwesomeIcon>{" "}
                            Category:{" "}
                          </span>{" "}
                          {e.prod_category}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon
                              icon={faMagnifyingGlass}
                            ></FontAwesomeIcon>{" "}
                            Condition:{" "}
                          </span>{" "}
                          {e.prod_condition}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>{" "}
                            Views:{" "}
                          </span>{" "}
                          {e.prod_views}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <br></br>
              </>
            );
          })
        ) : getDetailProductLoading ? (
          <p>Loading</p>
        ) : (
          <p>{getDetailProductError ? getDetailProductError : "Data Kosong"}</p>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default DetailProduct;
