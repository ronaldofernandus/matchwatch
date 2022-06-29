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

import { getItem } from "../../Axios/itemAxios";

const OrderList = () => {
  const {
    getListItemResult,
    getListItemLoading,
    getListItemError,
    deleteItemReducer,
  } = useSelector((state) => state.itemReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  useEffect(() => {
    if (deleteItemReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getItem());
    }
  }, [deleteItemReducer, dispatch]);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Line Quantity</th>
                <th>Line Status</th>
                <th>Product</th>
                <th>Harga Produk</th>
                <th>Shop Cart</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {getListItemResult ? (
                getListItemResult.map((item, index) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.line_qty}</td>
                        <td>{item.line_status}</td>
                        <td>{item.product.prod_name}</td>
                        <td>{item.product.prod_price}</td>
                        <td>{item.shopping_cart.shop_status}</td>
                        <td>{item.order.order_subtotal}</td>
                      </tr>
                    </>
                  );
                })
              ) : getListItemLoading ? (
                <p>Loading...</p>
              ) : (
                <p>{getListItemError ? getListItemError : "Data Kosong"}</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
