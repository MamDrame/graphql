import { useState } from "react";
import { useFetch } from "../lib/hooks.js";
/*
 * @param {object} props - The props object
 * @param {string} props.username - The username of the user
 * @returns {JSX.Element} - The Navbar component
 * @description - The Navbar component
 */

export function Navbar() {
  const query = {
    query: `
    {
      user {
        firstName
        lastName
        login
        campus
        auditRatio
        totalUp
        totalDown
      }
    }`,
  };
  const [data, error] = useFetch(
    "https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(query),
    }
  );
  error && console.error("Il y'a Erreur.");
  console.log(data);
  const user = data?.data?.user;
  const Firstname = user?.firstName;
  const Lastname = user?.lastName;
  const login = user?.login;
  const campus = user?.campus;
  //   const attrs = user?.attrs;
  // console.log(attrs);
  const [, setToken] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    location.href = "/";
  };
  return (
    <nav className="bg-white px-4 py-2.5 shadow-blue-500/50 lg:px-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-9"
            alt="01Talent Dashboard Logo"
          />
          <h6 className="whitespace-nowrap text-xl font-semibold lg:text-base">
            Welcome to 01Talent Dashboard {Firstname} {Lastname}.
          </h6>
          <br />
          <p className="whitespace-nowrap text-xs font-light lg:text-base">
            {" "}
            I am 01talent from Zone01 {campus} under the login name of {login}
            ,and here are my stats.
          </p>
        </div>
        <div className="flex items-center lg:order-2">
          <p className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 lg:px-5 lg:py-2.5">
            {Firstname} {Lastname}
          </p>
          <button
            onClick={handleLogout}
            className="mr-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-2.5"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}
