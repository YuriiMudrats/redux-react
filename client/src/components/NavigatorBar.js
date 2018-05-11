import React from 'react'
import {Link} from 'react-router-dom'

export default ()=>{
    return(
         <nav class='navbar navbar-default'>
         <div className='container-fluid'>
         <div className='navbar-header'>
            <Link to='/'>
             <a className='navbar-brand' href='#'>Facecube</a>
            </Link>
          </div>
          <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav navbar-right'>
             <li>
                 <Link to='/login'><a href='#'> Login </a></Link>
             </li>
             <li>
                 <Link to='/signup'><a href='#'> Sing Up</a></Link>
             </li>
            </ul>
           </div>      
         </div>
          </nav>   
    )
}