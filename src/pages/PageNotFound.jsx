import React from 'react'
import {Link } from 'react-router-dom'
function PageNotFound() {
  return (
    <div className='text-center' style={{marginTop:'100px'}}>
      <img style={{marginBottom:'20px', marginTop:'20px'}} src="https://tse3.mm.bing.net/th/id/OIP.j4Sj2FEkJG0FPPmdnfpPcwHaEo?pid=Api&P=0&h=180" alt="" />
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn't find the page</p>
      <Link to="/" className='btn btn-primary' style={{marginBottom:'200px'}}>Back to Home</Link>
    </div>
  )
}

export default PageNotFound
