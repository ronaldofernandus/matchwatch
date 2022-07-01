import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { register, get_profile_user } from "../../action/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const [user_birthdate, setBirthdate] = useState("");
  const [user_gender, setGender] = useState("");
  const [user_avatar, setAvatar] = useState(null);
  const [user_type, setType] = useState("");

  const { registerResult } = useSelector((state) => state.userReducer);

  const handleChange = (e) => {
    console.log(e.target.files);
    let uploaded = e.target.files;
    setAvatar(uploaded);
  };

  const addHandler = (data) => {
    dispatch(register(data));
    Swal.fire({
      icon: "success",
      title: "Register Success!",
      text: `You've successfully register!`,
    });
    navigate("/login");
  };

  const submitPostHandler = () => {
    let formData = new FormData();
    formData.append("username", user_name);
    formData.append("email", user_email);
    formData.append("password", user_password);
    formData.append("birthday", user_birthdate);
    formData.append("gender", user_gender);
    formData.append("avatar", user_avatar);

    addHandler(formData);
  };

  useEffect(() => {
    if (registerResult) {
      // console.log("5. Masukk Component did update");
      dispatch(get_profile_user());
    }
  }, [registerResult, dispatch]);

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
                      onChange={handleChange}
                      id="formFile"
                      type="file"
                      className="opacity-0"
                      accept="image/*"
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
                  value={user_name}
                  onChange={(event) => setName(event.target.value)}
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
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  value={user_password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">BirthDate</label>
                <input
                  value={user_birthdate}
                  onChange={(event) => setBirthdate(event.target.value)}
                  type="date"
                  placeholder="Birthdate"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Gender</label>
                <input
                  value={user_gender}
                  onChange={(event) => setGender(event.target.value)}
                  type="text"
                  placeholder="Gender"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Type</label>
                <input
                  value={user_type}
                  onChange={(event) => setType(event.target.value)}
                  type="text"
                  placeholder="user_type"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex">
                <button
                  onClick={() => submitPostHandler()}
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
