import PropTypes from "prop-types";

const ButtonFull = (props) => {
  const { children = "Register", classname = "bg-blue-700" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md w-full text-white ${classname}`} type="submit">
      {children}
    </button>
  );
};

ButtonFull.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string,
};

export default ButtonFull;