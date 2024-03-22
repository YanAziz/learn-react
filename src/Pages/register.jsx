import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-slate-500 text-sm mt-5 text-center">
        Have an account?{" "}
        <Link to="/" className="text-blue-600 font-bold ms-1">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
