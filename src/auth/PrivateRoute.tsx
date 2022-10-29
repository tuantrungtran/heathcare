import { Navigate, Outlet } from "react-router-dom";
import { AUTH } from "../utils/contants";

const PrivateRoute = (props: any) => {
  const token = localStorage.getItem(AUTH);

  return token ? <Outlet /> : <Navigate replace to="/" />;
};

export default PrivateRoute;
