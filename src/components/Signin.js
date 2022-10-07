import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser } from "../redux/student";
import { useState } from "react";
const Signin = () => {
  const [allCurrentUser, setallCurrentUser] = useState([])
  let navigate = useNavigate()
  let dispatch = useDispatch()
  // let currentUser = useSelector((state) => state.students.allStudents);
  let currentUser = JSON.parse(localStorage.applicantArr)
  // console.log(currentUser[1])
  const formik = useFormik({
    initialValues: {
      email: "",
      // phonenumber: "",
      password: "",
    },
    onSubmit: (values) => {
      let val = currentUser.find(val => val.email == values.email && val.password == values.password)
      console.log(val)
      if (val) {
        // let currentUserArr = [...allCurrentUser, values]
        setallCurrentUser([...allCurrentUser, values])
        localStorage.currentUser = JSON.stringify(val)
        alert('Login successful, you can now proceed to the dashboard.')
        navigate('/admin')
        dispatch(addCurrentUser(val));
      } else {
        alert("Wrong details, cannot sign in.")
      }
    },
    validationSchema: yup.object({
      email: yup.string()
        .required("This field is required")
        .email("Invalid Email"),
      password: yup
        .string()
        .required("This field is required")
        .min(6, "Min of 6 chars")
        .max(10, "Max of 10 chars"),
    }),
  });
  // console.log(state.students.allStudents.email);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto px-3 py-4 shadow signin">
            <p className="signText">Sign in</p>
            <form action="" onSubmit={formik.handleSubmit}>
              <input
                type="email"
                className="form-control my-2"
                placeholder="E-mail"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email ? (
                <small className="text-danger">{formik.errors.email}</small>
              ) : (
                ""
              )}
           
              <input
                type="text"
                className="form-control my-2"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password ? (
                <small className="text-danger">{formik.errors.password}</small>
              ) : (
                ""
              )} <br />
              <small className="linkSign text-center">Or Sign in with</small>
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
                <Link to="/">
                  <i
                    className="fa fa-twitter mx-3 shadow p-2 rounded text-info"
                    aria-hidden="true"
                  ></i>
                </Link>
              </p>
              <button
                type="submit"
                className="btn form-control shadow text-light mt-4"
              >
                Sign in
              </button>
              <p className="my-2">
                Don't have an account?
                <Link to="/" className="linkSign">
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
