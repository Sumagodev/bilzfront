import { useEffect } from 'react';
import './App.css';
import Router from './Router'
import axios from 'axios';
function App() {
  // useEffect(()=>{
  //   console.log(process.env.REACT_APP_API_BASE_URL);
  //   axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
  // },[])

  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
 
  return (
    <>
      <Router />
    </>
  );
}

export default App;
