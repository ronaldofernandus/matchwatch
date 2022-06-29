import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./tabel.css";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { getCart } from "../../Axios/cartAxios";

const CartList = () => {
  const {
    getListCartResult,
    getListCartLoading,
    getListCartError,
    deleteCartReducer,
  } = useSelector((state) => state.cartListReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (deleteCartReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getCart());
    }
  }, [deleteCartReducer, dispatch]);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal Di buat</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {getListCartResult ? (
                getListCartResult.map((cart, index) => {
                  return (
                    <>
                      <tr key={cart.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{cart.shop_created_on}</td>
                        <td>{cart.shop_status}</td>
                      </tr>
                    </>
                  );
                })
              ) : getListCartLoading ? (
                <p>Loading...</p>
              ) : (
                <p>{getListCartError ? getListCartError : "Data Kosong"}</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartList;
