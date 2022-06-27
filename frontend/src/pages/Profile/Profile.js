import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faVenusMars,
  faCalendarDays,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import profile from "./profile-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { get_profile_user } from "../../action/UserAction";

function Profile() {
  const { getDetailUserResult, getDetailUserLoading, getDetailUserError } =
    useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(get_profile_user(localStorage.getItem("access_token")));
  }, [dispatch]);
  return (
    <div className="color-full-page">
      <div className="container-sm">
        <div className="row row-bg ">
          <div className="col-md-6 offset-md-3 line-white"></div>
          <br></br>
          <div className="col-md-6 offset-md-3 col-bg justify-content-center">
            {getDetailUserResult ? (
              getDetailUserResult.map((e) => {
                return (
                  <>
                    <img
                      className="img-fluid img-thumbnail mx-auto h-25 d-block rounded-circle"
                      src={e.user_avatar}
                      alt=""
                    />

                    <div className="card border-warning">
                      <div className="card-body" style={{ width: "18rem" }}>
                        <h5 className="card-title">
                          <span>
                            <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
                          </span>{" "}
                          Name
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {e.user_name}
                        </h6>
                      </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="card border-success">
                      <div className="card-body" style={{ width: "18rem" }}>
                        <h5 className="card-title">
                          <span>
                            <FontAwesomeIcon
                              icon={faVenusMars}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Gender
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {e.user_gender}
                        </h6>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="card border-primary mb-3">
                      <div className="card-body" style={{ width: "18rem" }}>
                        <h5 className="card-title">
                          <span>
                            <FontAwesomeIcon
                              icon={faCalendarDays}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Birthdate
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {e.user_birthdate}
                        </h6>
                      </div>
                    </div>
                    <br></br>

                    <div className="card border-danger">
                      <div className="card-body" style={{ width: "18rem" }}>
                        <h5 className="card-title">
                          <span>
                            <FontAwesomeIcon
                              icon={faEnvelope}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Email
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {e.user_email}
                        </h6>
                      </div>
                    </div>
                  </>
                );
              })
            ) : getDetailUserLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getDetailUserError ? getDetailUserError : "Data Kosong"}</p>
            )}

            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
