import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SetTimer from "./SetTimer";
const TakeQuiz = () => {
  const [quiz, setquiz] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [scores, setscores] = useState(1  );
  const [quizArr, setquizArr] = useState({});
  const [showScore, setshowScore] = useState([]);
  const [showIndex, setshowIndex] = useState();
  const [correctOption, setcorrectOption] = useState('')
  const minSecs = {minutes: 5, seconds: 0}
  let navigate = useNavigate();
  let currentUser = JSON.parse(localStorage.currentUser);
  let getQuiz = JSON.parse(localStorage.questions);
  let answer = quizArr.correctOption;
  const getRandomQuestion = getQuiz.sort(
    () =>
      // let n = 3
      0.5 - Math.random()
  ); /* .slice(0, 3) */
  localStorage.randomQuestion = JSON.stringify(getRandomQuestion);
  const getQuestion = JSON.parse(localStorage.randomQuestion);

  useEffect(() => {
    setquiz(getQuestion);
    setquizArr(getQuestion[0]); // start quiz
  }, []);
  const nextQuestion = () => {
    console.log(showScore);
    console.log(showIndex);
    let next = activeIndex + 1;
    if (next === quiz.length + 1) {
      return alert(`
      You have gotten to the last question,
      you can either SUBMIT or go to the previous question
      by pressing the PREV button`);
    }
    setActiveIndex(next);
    console.log(next);
    console.log(quiz[activeIndex]);
    setquizArr(quiz[activeIndex]);
  };

  const prevQuestion = (e) => {
    let prev = activeIndex - 1;
    if (activeIndex === 1) {
      return e.preventDefault();
    }
    setActiveIndex(prev);
    console.log(prev);
    console.log(quiz[prev - 1]);
    setquizArr(quiz[prev - 1]);
  };
  const options =  (e, i) => {
    let addScore = scores + 1;
    if (e === answer) {
      setscores(addScore);
      setshowScore((prev) => [...prev, e])
      setshowIndex(i)
      setcorrectOption('true');
      // console.log(showScore);
    } else {
      setcorrectOption('false');
    }
  };
  const submitQuiz = () => {
    if (activeIndex === quiz.length) {
      localStorage.setScore = JSON.stringify({
        score: showScore.length,
        quizNo: quiz.length,
      });
      navigate("/end");
    }
    else {
      alert('You have not finished you quiz')
    }
  };
//   const setTime = () => {
//     let myDate = new Date();
//     setTimeout(() => {
//       myDate.getHours()
//     }, 1000);

// }
  return (
    <>
      <div className="container my-5">
        <div className="row my-4 d-flex justify-content-center">
          <div className="col-md-6 shadow my-4 py-4 px-4 rounded">
            <h6 className="my-1">Welcome {currentUser.firstname}...</h6>
            <p className="smallText my-4">
              You have {quiz.length} questions to answer and your time start
              immediatly, wishing you the best in your attempt.
            </p>
            <b className=" fs-4 rounded sideText text-center float-end ">
              {/* {startTimer} */} <SetTimer minSecs={minSecs}/>
            </b>
            {/* Quiz questons */}
            <div className="my-4 py-3">
              <p className="h6 sideText my-2">Question {activeIndex}/{quiz.length}</p>
              <h6 className="p-4 shadow rounded-pill mt-4 text-center border">
                {quizArr.question}
              </h6>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <p
                       onClick={(e) => options(e.target.innerText, 1)}
                       className={(showIndex === 1 && correctOption === 'true' || correctOption === 'false') ? "p-2 px-3 shadow rounded-pill sideNav border" :
                      "p-2 px-3 shadow rounded-pill border"}
                      // className={(showIndex === 1 && correctOption === 'true' || correctOption === 'false') ? "p-2 px-3 shadow rounded-pill bg-secondary my-4 border" :
                      //   "p-2 px-3 shadow rounded-pill my-4 border"}
                    >
                      {/* <input
                        type="radio"
                        value={quizArr.optionA}
                        name="option"
                        onClick={options}
                      />&nbsp; */}
                      {quizArr.optionA}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p
                       onClick={(e) => options(e.target.innerText, 2)}
                       className={(showIndex === 2 && correctOption === 'true' || correctOption === 'false') ? "p-2 px-3 shadow rounded-pill bg-secondary border" :
                      "p-2 px-3 shadow rounded-pill border"}
                      // className={(showIndex === 2 && correctOption === 'true' || correctOption === 'false') ? "p-2 px-3 shadow rounded-pill bg-secondary border" :
                      // "p-2 px-3 shadow rounded-pill border"}
                    >
                      {/* <input
                        type="radio"
                        value={quizArr.optionB}
                        name="option"
                      />{" "}
                      &nbsp; */}
                      {quizArr.optionB}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p
                       onClick={(e) => options(e.target.innerText, 3)}
                       className={(showIndex === 3 && correctOption === 'true' || correctOption === 'false') ? "p-2 px-3 shadow rounded-pill bg-secondary border" :
                      "p-2 px-3 shadow rounded-pill border"}
                      // className={(showIndex === 3 && correctOption === 'true' || correctOption === 'false') ? "p-2 px-3 shadow rounded-pill bg-secondary border" :
                      // "p-2 px-3 shadow rounded-pill border"}
                    >
                      {/* <input
                        type="radio"
                        value={quizArr.optionC}
                        name="option"
                      />{" "}
                      &nbsp; */}
                      {quizArr.optionC}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p
                       onClick={(e) => options(e.target.innerText, 4)}
                       className={(showIndex === 4) ? "p-2 px-3 shadow rounded-pill bg-secondary border" :
                      "p-2 px-3 shadow rounded-pill border"}
                      // className={(showIndex === 4 && correctOption === 'true' || correctOption === 'false') ? "p-2 px-3 shadow rounded-pill bg-secondary border" :
                      // "p-2 px-3 shadow rounded-pill border"}
                    >
                      {/* <input
                        type="radio"
                        name="option"
                        value={quizArr.optionD}
                      />{" "}
                      &nbsp; */}
                      {quizArr.optionD}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <button
              className="btn btn-sm border text-light"
              onClick={() => prevQuestion()}
            >
              Prev
            </button>
                </div>
                <div className="col-4">
            <center>
              {" "}
              <button
                className="btn btn-sm text-white bg-success "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Submit
              </button>
            </center>
                </div>
                <div className="col-4">
                  {/* <center> */}
                  <button
              className="btn btn-sm border text-light float-end"
              onClick={() => nextQuestion()}
            >
              Next
            </button>
               {/* </center> */}

                </div>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Please note:
              </h5>
              <button
                type="button"
                className="btn-close bg-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to submit finally?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-danger text-light btn-sm"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn bg-success text-light btn-sm "
                data-bs-dismiss="modal"
                onClick={submitQuiz}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeQuiz;
