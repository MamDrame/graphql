/* eslint-disable react/prop-types */
/**
 *
 * @param {Object} user
 * @returns
 */

export function Navbar({ user }) {
  const Firstname = user[0]?.firstName;
  const Lastname = user[0]?.lastName;
  const login = user[0]?.login;
  const campus = user[0]?.campus;

  return (
    <nav className=" py-2.5 lg:px-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex flex-col">
          <div className="box-content text-lg flex flex-row items-center justify-start sm:text-sm">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-9"
              alt="01Talent Dashboard Logo"
            />
            <h6 className="whitespace-nowrap font-semibold uppercase">
              Welcome to 01Talent Dashboard {Firstname} {Lastname}
            </h6>
          </div>
          <p className="ml-12 whitespace-nowrap font-light text-sm sm:text-xs">
            I am 01talent from Zone01 {campus} under the login name of {login},
            and here are my stats.
          </p>
        </div>
        <div className="flex items-center lg:order-2">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${Firstname}${Lastname}`}
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <p className="mr-2 rounded-lg px-4 py-2 text-sm font-medium lg:px-5 lg:py-2.5">
            {Firstname} {Lastname}
          </p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              location.href = "/";
            }}
            className="mr-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-1"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}
