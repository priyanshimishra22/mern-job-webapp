import React,{useContext} from 'react'
import {Context} from '../../main'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaYoutube, FaLinkedin, FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
const Footer = () => {
  const {isAuthorized} = useContext(Context)
  return (
    <footer className={isAuthorized? "footerShow":"footerHide"}>
<div>
  &copy; All Rights Reserved by PriyanshiMishra
</div>
<div>
  <Link to={'/https://www.facebook.com/'} target="_blank"><FaFacebookF/></Link>
  <Link to={'/https://www.youtube.com/watch?v=6xRWaTWl2P0&t=8450s'} target="_blank"><FaYoutube/></Link>
  <Link to={'/https://in.linkedin.com/'} target="_blank"><FaLinkedin/></Link>
  <Link to={'/https://www.instagram.com/accounts/login/?hl=en'} target="_blank"><RiInstagramFill/></Link>
  
</div>
    </footer>
  )
}

export default Footer