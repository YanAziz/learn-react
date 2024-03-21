import PropTypes from "prop-types";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={props.name} text={props.children}>
        {label}
      </Label>
      <Input name={name} type={props.type} placeholder={props.placeholder} />
      <br />
    </div>
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputForm;
