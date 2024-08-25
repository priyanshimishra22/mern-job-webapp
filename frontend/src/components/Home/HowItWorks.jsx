import React from 'react'
import {FaUserPlus} from 'react-icons/fa'
import {MdFindInPage} from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>Create Account</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quam consequatur rem iure nam quo dolorum ea, debitis sit nulla corrupti voluptate? Vitae esse, facere et laborum magni, sed hic in fugit architecto similique velit voluptatibus, nulla adipisci ut quisquam! Aspernatur laudantium, iure itaque quod error eum commodi quo corporis.</p>
          </div>
          <div className="card">
            <MdFindInPage/>
            <p>Find a Job/Post a Job</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quam consequatur rem iure nam quo dolorum ea, debitis sit nulla corrupti voluptate? Vitae esse, facere et laborum magni, sed hic in fugit architecto similique velit voluptatibus, nulla adipisci ut quisquam! Aspernatur laudantium, iure itaque quod error eum commodi quo corporis.</p>
          </div>
          <div className="card">
            <IoMdSend/>
            <p>Create Account</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quam consequatur rem iure nam quo dolorum ea, debitis sit nulla corrupti voluptate? Vitae esse, facere et laborum magni, sed hic in fugit architecto similique velit voluptatibus, nulla adipisci ut quisquam! Aspernatur laudantium, iure itaque quod error eum commodi quo corporis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks