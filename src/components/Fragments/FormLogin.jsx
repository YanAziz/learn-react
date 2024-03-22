import ButtonFull from "../Elements/Button/ButtonFull";
import InputForm from "../Elements/Input/MergeInput";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" name="email" type="email" placeholder="example@mail.com"></InputForm>
      <InputForm label="Password" name="password" type="password" placeholder="******"></InputForm>
      <ButtonFull>Login</ButtonFull>
    </form>
  );
};

export default FormLogin;
