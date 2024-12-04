import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase'; // Adjust the import based on your folder structure
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup=() =>
{
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  //const notify = () => toast.success("Registered Successfully..!!!");

  const handleRegister = async (e) => 
  {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try 
    {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      toast.success("Registered Successfully..!!!");
      setTimeout(() => {
        navigate('/'); // Redirect to a dashboard or homepage after registration
      }, 1500);  
    } 
    catch (err) 
    {
      console.log(err.message);
      
      setError('Failed to create an account.');
    }
  };

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center", margin:"20px"}}>

      <form class="form-container" onSubmit={handleRegister}>
        <h2>Register Form</h2>

        <div class="name">          
            <input type="text" value={fname} id="fname" placeholder="First Name" onChange={(e) => setfname(e.target.value)}required />
            <input type="text" value={lname} id="lname" placeholder="Last Name" onChange={(e) => setlname(e.target.value)}required />
        </div>

        <input type="email" value={email} id="email" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" value={password} id="password1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}required/>
        <input type="password" value={confirmPassword} id="password2" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}required />
        
        <div class="terms">
        </div>
        
        {error && <p>{error}</p>}
        <button type="submit" class="butn">Register</button>
        {/* <input type="button" class="butn" value="Sign Up"/> */}

        <p>
            Already have an account?
            <a href="/"> Login Now</a>
        </p>        
      </form>
      <ToastContainer 
        position="top-right"
        autoClose={20000}
        theme="light"/>
    </div>
  )
}

export default Signup