/* eslint-disable react/prop-types */
/**
 *
 * @param {Object} user
 * @param {Function} handleLogout
 * @returns
 */

export function Navbar({ user }) {
  const Firstname = user?.firstName;
  const Lastname = user?.lastName;
  const login = user?.login;
  const campus = user?.campus;
  //   const attrs = user?.attrs;
  // console.log(attrs);

  return (
    <nav className="bg-white px-4 py-2.5 shadow-blue-500/50 lg:px-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-9"
            alt="01Talent Dashboard Logo"
          />
          <h6 className="whitespace-nowrap font-semibold lg:text-base">
            Welcome to 01Talent Dashboard {Firstname} {Lastname}
          </h6>
          <br />
          <p className="whitespace-nowrap font-light lg:text-base">
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
            onClick={() => {
              localStorage.removeItem("token");
              location.href = "/";
            }}
            className="mr-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-2.5"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}
