import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, we couldn't find this page.
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold rounded-full bg-cyan-400 hover:bg-cyan-500 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
