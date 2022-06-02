import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-end my-5">
          <Link to='/add' className="btn btn-outline-dark">Add</Link>
        </div>
      </div>
    </div>
  )
}

export default Home