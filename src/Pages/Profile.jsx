import { getAuth, signOut } from "firebase/auth";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../components/store/authSlice";
import { useEffect } from "react";
const Profile = () => {
  const profile = useLoaderData();
  const dispatch=useDispatch()
  const auth = getAuth();
  const navigate = useNavigate();
  const authStatus=useSelector((state)=>(state.auth.status))

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout())
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(authStatus);
  }, [authStatus]);

  return (
    <div>
      <div>{`${profile.email} is logged In`}</div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Profile;
