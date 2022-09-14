import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
    },
    onSubmit: (values) => {
      localStorage.applicantArr = {... values}
      console.log(values);
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
        .email("Invalid Email, must include @"),
      phonenumber: yup
        .number()
        .required("This field is required")
        .min(11, "Must be eleven digit"),
      password: yup
        .string()
      .matches(/^[\w]{6}$/, "Must be between 6 characters")
    }),
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto  px-3 py-4 shadow signup">
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
              {/* <small className="text-danger">{formik.errors.firstname }</small> */}
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
              <br />  
              <input type="checkbox" name="" id="" required />{" "}
              <small className="text-dark">
                By signing up, you agree with the
                <span className="text-danger"> terms of service </span>
                and <span className="text-danger">private policy</span>
              </small>
              <button type="submit" className="btn form-control shadow my-2 text-light">
                Sign Up
              </button>
              <Link to="/signin" className="link">
                Already a user? Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
