import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { addUser } from "../../action/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Swal from "sweetalert2";

function Register() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_birthday: "",
    user_gender: "",
    user_avatar: null,
  });

  const { addUserResult } = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    console.log("1.Mulai");
    e.preventDefault();
    let formData = new FormData();
    formData.append("user_name", form.user_name);
    formData.append("user_email", form.user_email);
    formData.append("user_password", form.user_password);
    formData.append("user_birthday", form.user_birthday);
    formData.append("user_gender", form.user_gender);
    formData.append("user_avatar", form.user_avatar);

    dispatch(addUser(formData));
  };

  useEffect(() => {
    if (addUserResult) {
      Swal.fire("Register Successfully!", "Clicked the button!", "success");
      navigation("/");
    }
  }, [addUserResult, dispatch]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-blueNavy">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div class="flex justify-center mt-8">
            <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
              <div class="m-4">
                <label class="inline-block mb-2 text-gray-500">
                  Upload Foto Profile
                </label>
                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Select a photo
                      </p>
                    </div>
                    <input
                      onChange={(e) => {
                        setForm({ ...form, user_avatar: e.target.files[0] });
                      }}
                      id="file-upload"
                      type="file"
                      className="opacity-0"
                      name="image"
                      accept="image"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center">Register</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" for="Name">
                  Name
                </label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, user_name: e.target.value })
                  }
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block" for="email">
                  Email
                </label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, user_email: e.target.value })
                  }
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, user_pasword: e.target.value })
                  }
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">BirthDate</label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, user_birthdate: e.target.value })
                  }
                  type="date"
                  placeholder="Birthdate"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Gender</label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, user_gender: e.target.value })
                  }
                  type="text"
                  placeholder="Gender"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Type</label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, user_type: e.target.value })
                  }
                  type="text"
                  placeholder="user_type"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex">
                <button
                  onClick={() => handleSubmit()}
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 bg-blueNavy"
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <Link className="text-blue-600 hover:underline" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
