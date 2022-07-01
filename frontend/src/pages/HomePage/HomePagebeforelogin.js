import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function HomePagebeforelogin() {
  return (
    <div className="bg-[url('/images/picture.jpg')]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-center text-style-h1">Welcome to MatchWatch</h1>

            <br></br>
            <br></br>
          </div>
          <div class="col-3 offset-md-2">
            <div className=" input-group flex-nowrap submit-btn input-align">
              <Link to="/login">
                <button className="btn text-add">
                  <span>
                    <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                  </span>{" "}
                  Login
                </button>
              </Link>
            </div>
            <br></br>
            <br></br>
          </div>
          <div class="col-3 offset-md-2">
            <div className=" input-group flex-nowrap submit-btn input-align">
              <Link to="/register">
                <button className="btn text-add">
                  <span>
                    <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                  </span>{" "}
                  Register
                </button>
              </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePagebeforelogin;
