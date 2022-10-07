import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { useSelector } from "react-redux";
const Admin = () => {
  let currentUser = JSON.parse(localStorage.currentUser);
 
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link
                to="/"
                className="d-flex align-items-center pb-3 link text-decoration-none"
              >
                <i className=" fs-5 fa fa-bars" aria-hidden="true"></i>
                <span className="fs-5 d-none d-sm-inline my-4 mx-2">
                  My School Quiz
                </span>
              </Link>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle px-0 link mt-5">
                    <i className="fa fa-home" aria-hidden="true"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle link my-2"
                  >
                    <i className="fa fa-dashboard" aria-hidden="true"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link px-0 align-middle link my-2">
                    <i className="fa fa-user" aria-hidden="true"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/setQuestion" className="nav-link px-0 align-middle link my-2">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Add Question</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link px-0 align-middle link my-2">
                    <i className="fa fa-folder" aria-hidden="true"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Documents</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link px-0 align-middle link my-2">
                    <i className="fa fa-cog" aria-hidden="true"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Settings</span>{" "}
                  </Link>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3 bg-light">
            <div className="container my-4">
              <div className="row">
                <div className="col-md-6">
                  <h5>Welcome {currentUser.firstname}...</h5>
                </div>
                <div className="col-md-6 text-end">
                  <Link to="/" className="text-dark">
                    <i
                      className="fa fs-5 fa-address-card mx-4"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <Link to="/" className="text-dark">
                    <i
                      className="fa fs-5 fa-bell-o mx-4 "
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <Link to="/" className="text-dark">
                    <i
                      className="fa fs-5 fa-envelope mx-4 "
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <Link to="/" className="text-dark">
                    <i className="fa fs-5 fa-cog mx-4 " aria-hidden="true"></i>
                  </Link>
                  <small className="rounded-circle border">images</small>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row d-flex justify-content-between">
                {/* <div className="col-md-6 shadow rounded bg-danger"></div> */}
                <Link to="/setQuestion" className="text-decoration-none">
                  <div className="col-md-12 animate__animated animate__bounce animate__delay-2s bg-dark text-center p-5 text-white rounded">
                    <h4> Set your Question <i className="fa fa-plus-circle" aria-hidden="true"></i></h4>
                  </div>
                </Link>
                <Link to="/start" className="text-decoration-none my-3">
                  <div className="col-md-12 animate__animated animate__bounce animate__delay-2s bg-primary text-center p-5 text-white rounded">
                    <h4>Take Quiz Test</h4>
                  </div>
                </Link>
                <Link to="/" className="text-decoration-none">
                  <div className="col-md-12 animate__animated animate__bounce animate__delay-2s dashColor text-center p-5 text-white rounded">
                    <h4>Set your Question</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
