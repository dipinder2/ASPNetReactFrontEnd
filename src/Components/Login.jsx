import {useContext} from 'react';
import {AppContext} from "../Provider/AuthenticationProvider";


const Login = props => {
  const {handleSubmit} = useContext(AppContext);


  return (
    <form onSubmit={handleSubmit}>
    	<input placeholder="email" name="Email"/><br/>
    	<input placeholder="password" name="Password"/><br/>
    	<input placeholder="confirm password" name="ConfirmPassword"/><br/>
    	<input type="submit" value="Login"/><br/>
    </form>
  )
}

export default Login;