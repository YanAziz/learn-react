import "./App.css";
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

function ButtonBlack() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
      Buy now
    </button>
  );
}

const ButtonRed = () => {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white" type="submit">
      Buy now
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-blue-300 items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button></Button>
        <ButtonRed />
        <ButtonBlack />
      </div>
    </div>
  );
}

export default App;