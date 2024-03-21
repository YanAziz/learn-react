import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/MergeInput";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" name="text" type="email" placeholder="Insert your fullname"></InputForm>
      <InputForm label="Email" name="email" type="email" placeholder="example@mail.com"></InputForm>
      <InputForm label="Password" name="password" type="password" placeholder="******"></InputForm>
      <InputForm label="Confirm Password" name="cnofirmPassword" type="password" placeholder="******"></InputForm>
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
