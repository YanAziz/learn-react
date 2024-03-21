import PropTypes from "prop-types";

const Input = (props) => {
  const { type, placeholder, name } = props;
  return <input type={type} className="text-sm border rounded py-2 px-3 w-full text-slate-700 placeholder: opacity-50" id="email" placeholder={placeholder} name={name} />;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
