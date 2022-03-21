import {useState,createContext} from 'react';
import axios from 'axios';


export const AppContext = createContext();


const AuthenticationProvider = (props) => {

	//Form Submission Handler
		const handleSubmit = async e =>{
    	e.preventDefault();
    	let url = '/api/User/Post';
    	if(!e.target.ConfirmPassword.value){
    		var cf = e.target.Password.value;
    		url ='/api/User/Login'
    	}
	    const User = {
	      "email":e.target.Email.value,
	      "password":e.target.Password.value,
	      "confirmPassword":cf
	  	}
			try{
				var res = await axios.post(url,User);
				localStorage.setItem('xsrf-token',res.data);
				console.log(res.data);
			}
			catch(e){
			    console.error(e);
			}
	  }
	  const [jobs,setJobs] = useState([]);
	  const [job,setJob] = useState();
  return (
    <AppContext.Provider value={{handleSubmit,jobs, setJobs,job,setJob}}>
    	{props.children}
    </AppContext.Provider>
  )
}

export default AuthenticationProvider;