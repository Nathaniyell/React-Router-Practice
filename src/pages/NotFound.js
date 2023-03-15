import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, minima.</p>

        <p>Go to <Link to='/'>Home Page</Link>.</p>
    </div>
  )
}

export default NotFound