import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

export default AuthRequired;
