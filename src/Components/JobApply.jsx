import {useEffect,useContext} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import {AppContext} from "../Provider/AuthenticationProvider";

const JobApply = () => {
  const {jobId} = useParams();
  const {setJob,job} = useContext(AppContext);
	useEffect(()=>{
		axios.get(`api/Job/Get/${jobId}`).then(res =>setJob(res.data)).catch(err => console.error(err));
    console.log(job)
	},[]);


  return (
    <div>
    	{jobId}
    </div>
  )
}

export default JobApply;