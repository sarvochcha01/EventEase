import React from 'react'
import { useState,useEffect } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {auth,provider} from "../../firebaseConfig"
import {signInWithPopup,signInWithEmailAndPassword,signOut} from "firebase/auth"
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../store/authSlice'


const Signin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [error, setError] = useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const authStatus=useSelector((state)=>(state.auth.status))

        const gauth=async(e)=>{
          try{
         const user=await signInWithPopup(auth, provider)
         if(user){
          dispatch(login(user))
          navigate("/")
         }}catch(error){
          console.error("Error signing in: ", error);
         }
      }
      useEffect(() => {
        console.log(authStatus);
      }, [authStatus]);

      const handleSignIn = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);

        } catch (error) {
          console.error("Error signing in: ", error);
          setError(error.message)
        }
      };
    
      const handleSignOut = async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error("Error signing out: ", error);
        }
      };

  return (
    <div className="w-full flex flex-col mx-auto items-center mt-16 bg-gray-100 rounded-lg py-8 lg:max-w-screen-2xl">
    <div className="text-5xl font-normal">Welcome!</div>
    <div className="text-lg">Sign in to continue</div>
    <div className="flex flex-col gap-12 mt-12">
      <div className="flex flex-col gap-2 border-b-2 border-gray-950">
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
          onChange={(event) => setEmail(event.target.value)
            
          }
        />
      </div>
      <div className="flex flex-col gap-2 border-b-2 border-gray-950">
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Link className=" w-32 text-sm p-0 mt-[-8px]" to="/reset-password">
        Forgot Password?
      </Link>
      <button
        className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
        onClick={handleSignIn}
      >
        
        Log In
      </button>
      <span className="self-center text-center mt-[-32px]">
        Don't have an account?
        <Link to="/signup" className="font-extrabold underline pl-2">
          Sign Up
        </Link>
        
        <div className="mt-4 flex justify-center">
        <button className="flex pr-5 justify-center text-center hover:border-slate-400 border-2 border-slate-600 rounded-lg h-7 w-50" onClick={gauth}>
        <img src="google.png " alt="" className="h-6 m-auto pl-1" />
        Sign Up with Google</button>
        </div>
      </span>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  </div>
  
  )
}

export default Signin
