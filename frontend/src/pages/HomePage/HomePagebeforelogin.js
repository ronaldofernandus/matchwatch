import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket,faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function HomePagebeforelogin() {
  return (
    <>
      <nav className="bg-image">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 className="text-center text-style-h1">Welcome to Distro</h1>
              <h4 className="text-center text-style-h4">
                Kami menyediakan segala jenis baju dengan harga yang bisa
                dijangkau semua kalangan masyarakat
              </h4>
              <br></br>
              <h5 className="text-center text-style-h4">
                Daftarkan Diri Anda dan Dapatkan Diskon Menarik
              </h5>
              <br></br>
              <br></br>
            </div>
            <div class="col-3 offset-md-2">
              <div className=" input-group flex-nowrap submit-btn input-align">
                <Link to="/login">
                  <button className="btn text-add">
                    <span>
                      <FontAwesomeIcon
                        icon={faRightToBracket}
                      ></FontAwesomeIcon>
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
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                      ></FontAwesomeIcon>
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
      </nav>
    </>
  );
}

export default HomePagebeforelogin;
