import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }
  })
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto px-3 py-4 shadow signin">
            <p className="signText">Sign in</p>
            <form action="">
              <input
                type="email"
                className="form-control mt-5"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Password"
              />
              <small className="link text-center">Or Sign in with</small>
              <p className="my-2 text-center">
                <Link to="/facebook.com">
                  <i
                    className="fa fa-facebook fa-beat mx-3 shadow p-2 rounded text-primary"
                    aria-hidden="true"
                  ></i>
                </Link>
                <Link to="/google.com">
                  <i
                    className="fa fa-google mx-3 shadow p-2 rounded text-danger"
                    aria-hidden="true"
                  ></i>
                </Link>
                <Link to='/'>
                  <i
                    className="fa fa-twitter mx-3 shadow p-2 rounded text-info"
                    aria-hidden="true"
                  ></i>
                </Link>
              </p>
              <button className="btn form-control shadow text-light mt-4">
                Sign in
              </button>
              <p className="my-2">
                Don't have an account?
                <Link to="/" className="link">
                  <small>Create a new account</small>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
