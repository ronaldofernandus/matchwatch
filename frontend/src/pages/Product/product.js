import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faInfo } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import picture1 from "./picture1.png";

import { Link } from "react-router-dom";
import { getproduct, get_product_detail } from "../../action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addorder } from "../../action/OrderAction";
import { useNavigate, useParams } from "react-router-dom";

function Product() {
  const [search, setSearch] = useState("");
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
  const { id } = useParams();
  useEffect(() => {
    dispatch(getproduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getproduct(+id));
  }, [dispatch]);
  return (
    <>
      <div className="banner-home">
        <img
          className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
          src={picture1}
          alt=""
        ></img>
      </div>
      <div className="bg-color-product">
        <div className="container">
          <br></br>

          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required=""
              />
            </div>
          </form>

          <br></br>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {getProductResult ? (
              getProductResult

                .filter((product) => {
                  if (search === "") {
                    return product;
                  } else if (
                    product.prod_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return product;
                  } 
                })

                .map((e) => {
                  return (
                    <>
                      <div className="col">
                        <div className="card h-100">
                          {e ? (
                            e.product_images.length === 0 ? (
                              <img
                                src="https://via.placeholder.com/150"
                                alt=""
                              />
                            ) : (
                              <img
                                src={`http://localhost:4000/images/${e.product_images[0].prim_filename}`}
                                alt=""
                              />
                            )
                          ) : (
                            <img src="https://via.placeholder.com/150" alt="" />
                          )}

                          <div className="card-body">
                            <h5 className="card-title">{e.prod_name}</h5>
                            <p className="card-text">
                              <span>Rp </span> {e.prod_price}
                            </p>
                            <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                              <Link
                                className="btn btn-sm btn btn-outline-primary"
                                onClick={() =>
                                  dispatch(get_product_detail(e.id))
                                }
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
