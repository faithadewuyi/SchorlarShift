import React from 'react'
import { IoIosSchool } from 'react-icons/io';
import {IoIosSearch} from 'react-icons/io'
import {IoIosLogIn} from 'react-icons/io'
import {IoIosLogOut} from 'react-icons/io'
import {useAuth0} from '@auth0/auth0-react'
import {Link} from 'react-router-dom';
import './Nav.css'


const Nav = ({search, setSearch, searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated,} = useAuth0();
  return (
    <>
      <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <IoIosSchool/>
            </div>
            <div className='info'>
                <p>Easy learning here</p>
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                <img src='images/use1.png' alt='logo'></img>
            </div>
<div className='search_box'>
  <input type='text' value={search} placeholder='Search' onChange ={(e) =>setSearch(e.target.value)}></input>
                <button onClick={searchproduct}><IoIosSearch/></button>
                
            </div>
            { isAuthenticated ?
            <div className='user'>
            <div className='icon'>
                <IoIosLogOut/>
            </div>
        
        <div className='btn'>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Logout</button>
        </div>
        </div>
        :
        <div className='user'>
                <div className='icon'>
                    <IoIosLogIn/>
                </div>
            
            <div className='btn'>
                <button onClick={() => loginWithRedirect()} > Login</button>
            </div>
            </div>
        }
            
            
            
        </div>
        <div className='last_header'>
            <div className='user_profile'>
{
                isAuthenticated ? 
                <>
                <div className='info'>
                <div className='icon'>

                </div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                </div>
                </>
                :
                <>
                 <div className='info'>
                    <h2>Please Login</h2>

                    </div>
                </>
}
            </div>
            <div className='nav'>
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='/courses' className='link'>Courses</Link></li>
                    <li><Link to='/cart' className='link'>Cart</Link></li>
                    <li><Link to='/contact' className='link'>Contact Us</Link></li>
                </ul>
            </div>
            <div className='offer'>
                <p>Happy learning!  </p>
            </div>

        </div>
      </div>
    </>
  )
}

export default Nav
