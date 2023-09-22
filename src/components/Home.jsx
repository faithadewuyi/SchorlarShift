import React, { useState }  from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Homeproduct from './Home_products'
import {IoIosEye} from 'react-icons/io'
import {IoIosHeart} from 'react-icons/io'
import {BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagramAlt} from 'react-icons/bi'


const Home = () => {
    const [trendingProducts, setTrendingProduct]= useState(Homeproduct)
    const filtercate =(x) =>
    {
        const filterproduct = Homeproduct.filter((curlElm) =>
        {
            return curlElm.type === x

        })
        setTrendingProduct(filterproduct)
    }
    const allLatestCourses = () =>
    {
        setTrendingProduct(Homeproduct)
    }
  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='content'>
            
            <h2>SchorlarShift</h2>
            <p>Affordable Resources for you</p>
            <Link to='/courses' className='link'>Learn Now</Link>
          </div>
        </div>
        <div className='latest'>
        <div className='container'>
            <div className='left_box'>
                <div className='header'>
                   <div className='heading'>
                    <h2 onClick={() => allLatestCourses ()}>Latest Courses</h2>
                    </div> 
                    <div className='category'>
                        <h3 onClick={() => filtercate('technology')}>Technology</h3>
                        <h3 onClick={() => filtercate('vocation')}>Vocational</h3>
                        <h3 onClick={() => filtercate('softskills')}>Soft Skills</h3>
                    </div>
                </div>
                <div className='products'>
                    <div className='container'>
                       {
                        trendingProducts.map((curlElm)=>
                        {
                            return(
                                <>
                                <div className='box'>
                                    <div className='img-box'>
                                    <img src={curlElm.images} alt=''></img>
                                    <div className='icon'>
                                        <div className='icon_box'>
                                        <IoIosEye/>
                                        </div>
                                        <div className='icon_box'>
                                        <IoIosHeart/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='info'>
                                        <h3>{curlElm.name}</h3>
                                        <p>#{curlElm.price}</p>
                                        <button className='btn'>Add To Cart</button>
                                    </div>
                                </div>
                                </>

                            )
                        })
                       }
                    </div>
                    <button>Show More</button>
                </div>
            </div>
            <div className='right_box'>
                <div className='right_container'>
                <div className='testimonial'>
                    <div className='head'>
                        <h3>Our Testimonial</h3>
                    </div>
                    <div className='details'>
                        <div className='img_box'>
                            <img src='images/faith.jpg' alt='testimonial'></img>
                        </div>
                        <div className='info'>
                            <h3>Faith Adewuyi</h3>
                            <h4>100level Student</h4>
                            <p>I wish I had discovered this site earlier! It's been an incredible help in understanding what to expect and how to thrive in university. Highly recommended!</p>
                        </div>
                    </div>
                </div>
                <div className='newsletter'>
                    <div className='head'>
                        <h3>Newsletter</h3>
                    </div>
                    <div className='form'>
                        <p>Join Our Mailing Lists</p>
                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                        <button>Subscribe</button>
                        <div className='icon_box'>
                            <div className='icon'>
                            <BiLogoFacebook/>
                        </div>
                        <div className='icon'>
                        <BiLogoTwitter/>
                        </div>
                        <div className='icon'>
                        <BiLogoInstagramAlt/>
                        </div>
                        <div className='icon'>
                        <BiLogoYoutube/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div> 
        </div>
        <div className='banners'>
            <div className='container'>
                <div className='left_box'>
                    <div className='box'>
                        <img src='images/t2.jpg' alt='banner'></img>
                    </div>
                    <div className='box'>
                        <img src='images/t2a.jpg' alt='banner'></img>
                    </div>
                </div>
                {/* <div className='right_box'> */}
                    {/* <div className='top'> */}
                        {/* <img src='images/t1.jpg' alt=''></img> */}
                        {/* <img src='images/t3.jpg' alt=''></img> */}
                    {/* </div> */}
                    {/* <div className='bottom'> */}
                        {/* <img src='images/t2.jpg' alt=''></img> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
        {/* <div className='product_type'>
            <div className='container'>
                <div className='box'>
                    <div className='header'>
                        <h2>Articles</h2>
                    </div>
                </div>
            </div>
        </div> */}
      </div>
    </>
  )
}

export default Home
