import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Start = () => {
    let navigate = useNavigate()
    let myQuestions = JSON.parse(localStorage.questions)
    const submit = () => {
        if (myQuestions !== [] ){
            navigate("/takeQuiz")
        } else {
            alert("No Question is available, please navigate to the dashboard to set questions")
        }
    }
  return (
      <>
            <div className="container">
              <div className="row my-5 d-flex justify-content-center">
                  <div className="col-md-6 shadow my-5 py-4 px-4 rounded">
                      {/* <p>Select the number of questions
                          <input type="number" className='form-control' />
                      </p>
                      <p>Set timeout
                          <input type="time" className='form-control'/>
                      </p> */}
                      <h4 className='pt-4'>Instructions</h4>
                      <p>General Instructions</p>
                      <p>
                          1. The test consist of 10 multiple choice questions with
                          options A-D. Each of which there is ONLY one correct option.
                      </p>
                      <p>
                          2. Every correct answer is awarded 10 marks and every wrong 
                          answer is penalised with 2.5 marks. There are no negative marks for 
                          unattempted questions
                      </p>
                      <p>
                          3. use of any electronic gadgets like calculations,
                          mobile phone, etc. are strictly prohibited.
                      </p>
                      <center>
                              <button onClick={submit} className='btn btn-sm text-white'>Start Test</button>
                      </center>
                  </div>
        </div>
      </div>
      </>
  )
}

export default Start