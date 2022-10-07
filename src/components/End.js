import React, { useEffect } from "react";
import { useState } from "react";
const end = () => {
  let myScore = JSON.parse(localStorage.setScore)
  // const [result, setresult] = useState('');
  // let result = JSON.parse(localStorage.setScore)
  // useEffect(() => {
  //   setresult(myScore)
  // }, [])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <center>
            <div className="col-md-4 shadow mt-5">
              <p className="pt-5">Congratulations, you had {myScore.score} out of {myScore.quizNo }</p>
              <a href='/takeQuiz'>
                <button className="btn btn-sm text-light my-4">Take Quiz Again</button>
              </a>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default end;
