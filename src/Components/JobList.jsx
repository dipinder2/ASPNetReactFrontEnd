import {useEffect, useContext} from 'react';
import {AppContext} from "../Provider/AuthenticationProvider";
import axios from 'axios';
import Job from "./Job"
const JobList = (props) => {
	const {setJobs,jobs} = useContext(AppContext);

	// Here we set jobs list
	useEffect(()=>{
		try{
			axios.get('api/job/get').then(res=>{setJobs(res.data); console.log(res.data)}).catch(e=>console.log(e));
		}
		catch(err){
			console.log(err)
		}
	},[]);

  return (
    <table className="table">
    	{
				jobs&&jobs.map((job,i)=>{
		    			return (<Job keys={job.jobId} {...job}></Job>);
		    			})
    	}

    </table>
  )
}

export default JobList;