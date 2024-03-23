import PropTypes from "prop-types";

const ButtonFull = (props) => {
  const { children, classname = "bg-blue-700", onClick = () => {}, type = "button" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md w-full text-white ${classname}`} type={type} onClick={() => onClick()}>
      {children}
    </button>
  );
};

ButtonFull.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default ButtonFull;
