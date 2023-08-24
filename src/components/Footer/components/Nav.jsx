import React from 'react'

function Nav() {
  return (
    <>
        <nav className='navlist-container'>
            <ul className='nav-list-footer'>
              <li> <a href="#">About Us</a></li>
              <li> <a href="#">Jobs</a></li>
              <li> <a href="#">Press</a></li>
              <li> <a href="#">Blog</a></li>
            </ul>
            
            <ul className='nav-second-list-footer'>
              <li> <a href="#">Contact Us</a></li>
              <li> <a href="#">Terms</a></li>
              <li> <a href="#">Privacy</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav