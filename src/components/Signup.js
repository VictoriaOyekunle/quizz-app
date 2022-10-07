import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/student";
import { useEffect } from "react";

const Signup = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const [allStudent, setallStudent] = useState([])
  let getApplicant = []
  if (localStorage.applicantArr != null){
    getApplicant = JSON.parse(localStorage.applicantArr)
  }else {
    getApplicant = []
  }

  useEffect(() => {
    setallStudent(getApplicant)
  }, [])
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      passport: "",
    },
    onSubmit: (values) => {
      setallStudent([...allStudent, values])
      let studentArr = [...allStudent, values]
      localStorage.applicantArr = JSON.stringify(studentArr)
      console.log(values, studentArr);
      dispatch(addStudent(values))
      navigate('/signin');
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .required("This field is required")
        .min(3, "Must be more or equal than 3"),
      lastname: yup
        .string()
        .required("This field is required")
        .min(3, "Too short"),
      email: yup.string()
        .email("Invalid Email")
      .required("This field is reqiured"),
      phonenumber: yup
        .number()
        .required("This field is required")
        .min(11, "Must be eleven digit"), 
        // .max(11, "Must be eleven digit"),
      password: yup
        .string()
        .required("This field is required")
        .min(6, "Min of 6 chars")
        .max(10, "Max of 10 chars"),
      passport: yup 
          .string()
          .required("This field is required"),
    }),
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto  px-3 py-3 shadow signup">
            <p className="signText">Sign Up</p>
            <form action="" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                className="form-control mt-4"
                placeholder="First Name"
                name="firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <small className="text-danger">{formik.errors.firstname}</small>
              ) : (
                ""
              )}
              <input
                type="text"
                className="form-control my-2"
                placeholder="Last Name"
                name="lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname ? (
                <small className="text-danger">{formik.errors.lastname}</small>
              ) : (
                ""
              )}
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
                type="number"
                className="form-control my-2"
                placeholder="Phone Number"
                name="phonenumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phonenumber ? (
                <small className="text-danger">
                  {formik.errors.phonenumber}
                </small>
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
              )}
              <input
                type="file"
                className="form-control"
                name="passport"
                onChange={formik.handleChange}
                onBlur={ formik.handleBlur} />
              {formik.touched.passport ? (
                <small className="text-danger">{formik.errors.passport}</small>
                ) : (
                  ""
                  )}
                  <br />
              <input type="checkbox" name="" id="" required />{" "}
              <small className="text-dark">
                By signing up, you agree with the
                <span className="text-danger"> terms of service </span>
                and <span className="text-danger">private policy</span>
              </small>
              <button type="submit" className="btn form-control shadow mt-2 text-light">
                Sign Up
              </button>
              <small>
                Already a user? &nbsp;
                <Link to="/signin" className="text-decoration-none linkSign fs-6">
                 Login
              </Link></small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
