import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/MergeInput";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" name="email" type="email" placeholder="example@mail.com"></InputForm>
      <InputForm label="Password" name="password" type="password" placeholder="******"></InputForm>
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
