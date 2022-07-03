import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import EditOrder from "./Order/EditOrder";
import Order from "./Order/Order";
import DetailProduct from "./Product/DetailProduct";
import Product from "./Product/product";
import Profile from "./Profile/Profile";
import Succes from "./Succes/index";


function MainPageAfterLogin() {
  return (
    <>
      <NavbarAfterLogin></NavbarAfterLogin>
      <Routes>
        <Route path="">
          <Route path="" element={<Product></Product>}></Route>

         

          <Route path="detail">
            <Route path=":id" element={<DetailProduct></DetailProduct>}></Route>
          </Route>

          <Route path="order">
            <Route path="" element={<Order></Order>}></Route>
            <Route path="edit">
              <Route path=":id" element={<EditOrder></EditOrder>}></Route>
            </Route>
            <Route path="delete">
              <Route path=":id"></Route>
            </Route>
            <Route path="checkout">
              <Route path=":id" element={<Succes></Succes>}></Route>
            </Route>
          </Route>
        </Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </>
  );
}

export default MainPageAfterLogin;
