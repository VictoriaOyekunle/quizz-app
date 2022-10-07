import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <>
          <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {/* <img src={error} alt="" className='w-100'/> */}
        </div>
        <div className="col-md-4">
          <h1 className='brandText my-5'>Page 404</h1>
          <p className='brandText2'>Not Found</p>
          <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolor
             blanditiis omnis nobis soluta nisi possimus, id ab
             consectetur necessitatibus obcaecati modi odio ipsa quae architecto 
             mollitia ducimus exercitationem quasi.</small> <br />
             <Link to = '/' className='text-decoration-none textColor icon'>
              <button className='btn text-light my-5'>Go to Home Page</button>
            </Link>
        </div>
      </div>
    </div></>
  )
}

export default NotFound