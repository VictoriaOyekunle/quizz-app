import { useFormik, yupToFormErrors } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
const SetQuestions = () => {  
  const [allQuestion, setallQuestion] = useState([])

  let navigate = useNavigate()
  let getQuestion = []
  if (localStorage.questions != null){
    getQuestion = JSON.parse(localStorage.questions)
  }else {
    getQuestion = []
  }

  useEffect(() => {
    setallQuestion(getQuestion)
  }, [])
  const formik = useFormik({
    initialValues: {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctOption: "",
    },
    onSubmit: (values) => {
      setallQuestion([...allQuestion, values])
      let questionArr = [...allQuestion, values]
      localStorage.questions = JSON.stringify(questionArr)
      if (window.confirm('You have successfully set your question. Do you want to procced to the dashboard?') === true) {
       navigate('/admin')
     }
      // alert("Your question has been set");
      console.log(questionArr);
    },
    validationSchema: yup.object({
      question: yup.string().required("This field is required"),
      optionA: yup.string().required("This field is required"),
      optionB: yup.string().required("This field is required"),
      optionC: yup.string().required("This field is required"),
      optionD: yup.string().required("This field is required"),
      correctOption: yup.string().required("This field is required")
    }),
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto shadow rounded set">
            <form action="" onSubmit={formik.handleSubmit}>
              <center>
              <h5 className=" fs-5 my-4 text-center shadow p-2 rounded-pill w-75">
                Set your quiz questions here
              </h5>
             </center>
              <textarea
                className="form-control p-3"
                placeholder="Question here"
                name="question"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.question && formik.errors.question ? (
                <small className="text-danger">{formik.errors.question}</small>
              ) : (
                ""
              )}
              <input
                type="text"
                className="form-control mt-4"
                placeholder="Option A"
                name="optionA"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.optionA && formik.errors.optionA ? (
                <small className="text-danger">{formik.errors.optionA}</small>
              ) : (
                ""
              )}
              <input
                type="text"
                className="form-control my-2"
                placeholder="Option B"
                name="optionB"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

              />
              {formik.touched.optionB && formik.errors.optionB ? (
                <small className="text-danger">{formik.errors.optionB}</small>
              ) : (
                ""
              )}
              <input
                type="text"
                className="form-control my-2"
                placeholder="Option C"
                name="optionC"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.optionC && formik.errors.optionC ? (
                <small className="text-danger">{formik.errors.optionC}</small>
              ) : (
                ""
              )}
              <input
                type="text"
                className="form-control my-2"
                placeholder="Option D"
                name="optionD"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.optionD && formik.errors.optionD ? (
                <small className="text-danger">{formik.errors.optionD}</small>
              ) : (
                ""
              )}
              <input
                type="text"
                className="form-control my-2"
                placeholder="Correct Option"
                name="correctOption"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.correctOption && formik.errors.correctOption ? (
                <small className="text-danger">{formik.errors.correctOption}</small>
              ) : (
                ""
              )}
              <center>
                <button type="submit" className="btn text-light my-4">
                  Set Question
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetQuestions;
