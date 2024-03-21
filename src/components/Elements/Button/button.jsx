import PropTypes from "prop-types";

const Button = (props) => {
  const { children = "Register", variant = "bg-blue-700" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md text-white ${variant}`} type="submit">
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string, // Define the 'variant' prop as a string
  children: PropTypes.string,
};

export default Button;
