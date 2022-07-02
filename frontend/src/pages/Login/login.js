import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../../action/UserAction";
function Login() {
  const { loginResult } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datalogin, setDatalogin] = useState({
    user_email: "",
    user_password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      Swal.fire("Login Success!", "Welcome!", "success");
      navigate("/product");
      dispatch(login(datalogin));
    }
  }, [loginResult, dispatch]);

  const submitHandler = () => {
    dispatch(login(datalogin));
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-blueNavy">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>

          <div className="mt-4">
            <div>
              <label className="block" for="email">
                Email
              </label>
              <input
                onChange={(e) =>
                  setDatalogin({ ...datalogin, user_email: e.target.value })
                }
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="text-xs tracking-wide text-red-600">
                Email field is required{" "}
              </span>
            </div>

            <div className="mt-4">
              <label className="block">Password</label>
              <input
                onChange={(e) =>
                  setDatalogin({
                    ...datalogin,
                    user_password: e.target.value,
                  })
                }
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                onClick={() => submitHandler()}
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
                alt=""
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
