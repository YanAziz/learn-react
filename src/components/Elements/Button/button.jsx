import PropTypes from "prop-types";

const Button = (props) => {
  const { children, classname = "bg-blue-700" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md text-white ${classname}`} type="submit">
      {children}
    </button>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
