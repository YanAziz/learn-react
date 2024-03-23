import ButtonFull from "../Elements/Button/ButtonFull";
import InputForm from "../Elements/Input/MergeInput";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="email" placeholder="example@mail.com"></InputForm>
      <InputForm label="Password" name="password" type="password" placeholder="******"></InputForm>
      <ButtonFull type="submit">Login</ButtonFull>
    </form>
  );
};

export default FormLogin;
