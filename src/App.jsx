import "./App.css";
import Button from "./components/Elements/Button/button.jsx";

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
        <Button></Button>
        <ButtonRed />
        <ButtonBlack />
      </div>
    </div>
  );
}

export default App;
