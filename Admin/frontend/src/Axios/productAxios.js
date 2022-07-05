import axios from "axios";
export const getListProduct = "getListProduct";
export const addProductReducer = "addProductReducer";
export const deleteProductReducer = "deleteProductReducer";
export const getDetailProduct = "getDetailProduct";
export const updateProductReducer = "updateProductReducer";
export const getProductByIdReducer = "getProductByIdReducer";

export const getProduct = () => {
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "getListProduct",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/products",
      timeout: 120000,

      headers: {
        access_token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListProduct",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListProduct",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addProduct = (data) => {
  // console.log("2.Masuk");
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "addProductReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "http://localhost:4000/products/add",
      timeout: 120000,
      data: data,

      headers: {
        access_token: access_token,
      },
    })
      .then((response) => {
        // console.log("3.Berhasi", response);
        dispatch({
          type: "addProductReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("3. Gagal", error);
        dispatch({
          type: "addProductReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteProduct = (id) => {
  console.log("2.Masuk");
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "deleteProductReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: "http://localhost:4000/products/" + id,
      timeout: 120000,

      headers: {
        access_token: access_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "deleteProductReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal", error);
        dispatch({
          type: "deleteProductReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailProduct = (data) => {
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "getDetailProduct",
      payload: {
        data: data,
        headers: {
          access_token: access_token,
        },
      },
    });
  };
};

export const updateProduct = (data) => {
  // console.log("2.Masuk");
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "updateProductReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "PUT",
      url: "http://localhost:4000/products/" + data.id,
      timeout: 120000,
      data: data,

      headers: {
        access_token: access_token,
      },
    })
      .then((response) => {
        // console.log("3.Berhasi", response);
        dispatch({
          type: "updateProductReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("3. Gagal", error);
        dispatch({
          type: "updateProductReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const get_product_detail = (data) => {
  console.log("2. Masuk Action");
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "getProductByIdReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/products/info_product" + data.id,
      timeout: 120000,

      headers: {
        access_token: access_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "getProductByIdReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3.Gagal", error);
        dispatch({
          type: "getProductByIdReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
