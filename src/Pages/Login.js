import React, { useState } from 'react';
import Axios from "axios";
import {useNavigate } from "react-router-dom";
import  '../css/index.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginSatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.token) {
            // Store the token in local storage
            localStorage.setItem('token', data.token);
  
            if (data.email_verified_at === null) {
              // Email is not verified, navigate to EmailVerification
              navigate('/EmailVerification', { state: { email: email } });
              alert("Your account email has not been verified yet, please find the verification code on your email account. Click 'OK' to continue");
            } else {
              // Email is already verified, you can navigate to another page
              navigate('/main'); // Replace 'MainPage' with the desired page
            }
          } else {
            alert("Token not received");
          }
        } else {
          alert("Bad data");
        }
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        alert(error);
      });
  };
  
  

  const EmailVerification = () => {
    // Programmatically navigate to a specific route
    navigate('/EmailVerification');
  };

  const SignUpForm = () => {
    // Programmatically navigate to a specific route
    navigate('/register');
  };
//<</form>button type="button" onClick={SignUpForm}>Sign Up</button>
  return (
    <div className='content'>
      <form>

      <p class="title">Логін</p>

      <div className='registration_container_left'>

        <div>
        <p className='registration_text'>Email</p>
          <input className='registration_input'
            type="text"
            name="email"
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        
        <div>
           <p className='registration_text'>Password</p>
          <input className='registration_input'
            type="password"
            name="password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>

        <div>
            <button className='registration_button' type="submit" onClick={login}>Login</button>
              <div>
              <p className='registration_text'>Don't have an account?</p>
              <a onClick={SignUpForm} className='login_link'>Register</a>
              </div>
        </div>

        </div>
      </form>
    </div>
  );
}

export default Login;