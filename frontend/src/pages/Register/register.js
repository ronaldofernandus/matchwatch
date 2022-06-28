import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image_login from "../Login/image-login.jpg";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../action/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faFlag,
  faVenusMars,
  faImage,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Swal from "sweetalert2";

function Register() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const [user_birthdate, setBirthdate] = useState("");
  const [user_gender, setGender] = useState("");
  const [user_avatar, setAvatar] = useState("");
  const [user_type, setType] = useState("");

  const { addUserResult } = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,

        user_birthdate: user_birthdate,
        user_gender: user_gender,
        user_avatar: user_avatar,
        user_type: user_type,
      })
    );
  };

  useEffect(() => {
    if (addUserResult) {
      Swal.fire("Register Successfully!", "Clicked the button!", "success");
      navigation("/");
    }
  });
  return (
    <div className="bg-login">
      <br></br>
      <div className="container-md">
        <div className="row justify-content-center bg-row">
          <div className="col-6 bg-col">
            <img
              src={image_login}
              alt=""
              align="center"
              className="img-responsive"
            />
          </div>
          <div className="col-6 bg-col-1">
            <h1>Welcome</h1>
            <h4>Create Your Account</h4>
            <form>
              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="user_name"
                  value={user_name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="user_email"
                  value={user_email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="user_password"
                  value={user_password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Gender: Female or Male"
                  name="user_birthdate"
                  value={user_birthdate}
                  onChange={(event) => setBirthdate(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender: Female or Male"
                  name="gender"
                  value={user_gender}
                  onChange={(event) => setGender(event.target.value)}
                />
              </div>

              <div class="input-group mb-3 flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                </span>
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile01"
                  name="user_avatar"
                  value={user_avatar}
                  onChange={(event) => setAvatar(event.target.value)}
                ></input>
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type: Admin or User"
                  name="user_type"
                  value={user_type}
                  onChange={(event) => setType(event.target.value)}
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                <button
                  className="btn text-add"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Register;
