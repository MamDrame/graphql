import { useState } from "react";
/*
    * @param {object} props - The props object
    * @param {string} props.username - The username of the user
    * @returns {JSX.Element} - The Navbar component
    * @description - The Navbar component
 */

export function Navbar() {
    const [, setToken] = useState(null);

    const handleLogout = () => {
      localStorage.removeItem("token");
        setToken(null);
        location.href = "/";
    }
  return (
    <header>
  <nav className="bg-white px-4 py-2.5 shadow-blue-500/50 lg:px-6">
    <div className="mx-auto flex max-w-screen-xl items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-9"
          alt="01Talent Dashboard Logo"
        />
        <p className="whitespace-nowrap text-xl font-semibold lg:text-base">
          01TALENT DASHBOARD
        </p>
      </div>
      <div className="flex items-center lg:order-2">
        <p className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 lg:px-5 lg:py-2.5">
          Mamour Ousmane Dramé
        </p>
        <button onClick={handleLogout} className="mr-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-2.5">
          Log Out
        </button>
      </div>
    </div>
  </nav>
</header>
  )
}
