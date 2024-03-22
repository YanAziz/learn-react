import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium texs-slate-500">Welcome, Please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

AuthLayouts.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-500 text-sm mt-5 text-center">
        Dont have an account?
        <Link to="/register" className="text-blue-600 font-bold ms-1">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-500 text-sm mt-5 text-center">
        Already have an account?
        <Link to="/" className="text-blue-600 font-bold ms-1">
          Login
        </Link>
      </p>
    );
  }
};

Navigation.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthLayouts;
