/* eslint-disable react/prop-types */
export function Form({
  username,
  setUsername,
  password,
  setPassword,
  error,
  handleSubmit,
}) {
  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      {/* Username Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required={true}
          value={username}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autoComplete="off"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required={true}
          value={password}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      {/* Error Message */}
      {error && (
        <div className="items-center w-full bg-red-100 border border-red-400 rounded-md py-2 px-3 mb-4 text-red-700">
          <strong className="font-bold">Wrong Credentials </strong>
          <br />
          <span className="block sm:inline">Invalid username or password</span>
        </div>
      )}
      {/* Login Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 font-semibold rounded-md py-2 px-4 w-full"
      >
        Log In
      </button>
    </form>
  );
}
