import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getOrder } from "../../Axios/orderAxios";

const Cart = () => {
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.productReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <>
      <div className="col-12 my-2">
        
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Cart;
