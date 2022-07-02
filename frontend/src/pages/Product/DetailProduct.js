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
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import image_2 from "./img-2.jpg";
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
                    {e.product_images

                      .slice(indexOfFirstImages, indexOfLastImages)
                      .map((imgResult) => {
                        return (
                          <>
                            <img
                              src={`http://localhost:4000/images/${imgResult.prim_filename}`}
                              alt=""
                              align="center"
                            />
                          </>
                        );
                      })}

                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        {pageNumber.map((page) => {
                          return (
                            <>
                              <li className="page-item" key={page}>
                                <button
                                  onClick={() => paginate(page)}
                                  className="page-link"
                                  href=""
                                >
                                  {page}
                                </button>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </nav>
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
