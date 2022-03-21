import './App.css';
import AuthenticationProvider from './Provider/AuthenticationProvider';
import Login from './Components/Login'
import JobList from './Components/JobList'
import axios from 'axios'
import JobApply from './Components/JobApply'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('xsrf-token');
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = "https://localhost:7179/";

  if(localStorage.getItem('xsrf-token')){
      axios.defaults.headers.common = {
        'Authorization': localStorage.getItem('xsrf-token')};
  }

  return (
        <div className="App container">
          <AuthenticationProvider>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="index" element={<JobList />} />
                <Route path="apply/:jobId" element={<JobApply />} />
              </Routes>
          </BrowserRouter>
          </AuthenticationProvider>
        </div>
  );
}

export default App;
