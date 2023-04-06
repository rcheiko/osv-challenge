import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="grid h-screen place-items-center">
      <div>
        <h1>Oopsiiii!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>Error : {error.statusText || error.message}</i>
        </p>
        <a
          href="/"
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
        >
          Home Page {">"}
        </a>
      </div>
    </div>
  );
}
