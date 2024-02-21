import { useState } from "react";
import { QueryUserData } from "../api/query.js";
import { Form } from "../components/form.jsx";
import { Landing } from "../components/landing-page.jsx";
import { useFetch } from "../lib/hooks.js";
/**
 *
 * @param {function} navigateTo
 * @returns
 */
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  let [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    try {
      const response = await fetch(
        "https://learn.zone01dakar.sn/api/auth/signin",
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(data.username + ":" + data.password)}`,
            "Content-Type": "application/json",
          },
        }
      );
      token = await response.json();
      if (!response.ok) {
        setError(response.statusText);
        throw new Error(token.message);
      }
      setToken(token);
      localStorage.setItem("token", token);
      setError(null);
      // navigateTo("profile")
      location.href = "/profile";
    } catch (error) {
      console.log("Error:", error);
      //transform the error object into a string
      setError(error.toString());
    }
  };
  const { data } = useFetch(QueryUserData, token);
  console.log(data);
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <Landing />
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          handleSubmit={handleSubmit}
        />
        {/* Sign up  Link */}
        <div className="mt-6 text-blue-500 text-center">
          <a href="https://learn.zone01dakar.sn/" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
}
