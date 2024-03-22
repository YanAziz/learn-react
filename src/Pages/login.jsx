import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-slate-500 text-sm mt-5 text-center">
        Dont have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold ms-1">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
