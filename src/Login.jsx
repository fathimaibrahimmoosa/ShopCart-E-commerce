import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase'; // Adjust the import based on your folder structure
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login=()=>
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  //const notify = () => toast.success("Login Successfully..!!!");

  const handleLogin = async (e) => 
  {
    e.preventDefault();
    try 
    {     
      await signInWithEmailAndPassword(auth, email, password);       
      toast.success("Login Successfully..!!!");
      setTimeout(() => {
        navigate('/Home'); // Redirect to a dashboard or homepage after login   
      }, 1500);      
    }
    catch (err) 
    {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center", margin:"20px"}}>

      <form class="form-container" onSubmit={handleLogin}>
        <h2>Login Form</h2>

        <input type="email" value={email} placeholder="Email Id" onChange={(e) => setEmail(e.target.value)}required />
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}required/>
    
        {/* <input type="button" class="butn" value="Login"/> */}
        {error && <p>{error}</p>}
        <button type="submit" class="butn">Login</button>

        <p id="warning" style={{color:"rgb(241, 48, 48);"}}></p>
        <p>Forgot password?</p>
        <p>
            Not a member?<a href="/signup" > signup Now</a>
        </p>
       
    </form>
    <ToastContainer />
      {/* // position="top-right"
      // autoClose={20000}
      // theme="light"/> */}
    </div>
  )
}

export default Login