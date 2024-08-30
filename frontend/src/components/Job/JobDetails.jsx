import React,{useContext,useState} from 'react'
import {useParams,useParams} from 'react-router-dom'
import {Context} from "../../main"
const JobDetails = () => {
  const {id} = useParams()
  const [job, setJob]=useState({})
  const navigateTo = useNavigate()
  const { isAuthorized, user} =useContext(Context)
  return 
    <div>


    </div>
  
}

export default JobDetails