import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col" id="error-page">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-slate-500 my-5 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-500 text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
