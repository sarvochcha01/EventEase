import { Outlet, redirect } from "react-router-dom";

const LoginPageLoader = () => {
  const user = auth.currentUser;

  console.log(user);

  return <Outlet />;
};

export default LoginPageLoader;
