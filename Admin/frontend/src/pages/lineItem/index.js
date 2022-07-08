import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getItem } from "../../Axios/itemAxios";

const LineItem = () => {
  const { getListItemResult, getListItemLoading, getListItemError } =
    useSelector((state) => state.itemReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  return (
    <>
      <div className="col-12 my-2">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default LineItem;
