import { Form } from "../components/form.jsx";
import { Landing } from "../components/landing-page.jsx";

export default function Home() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
    {/* Left: Image */}
    <Landing/>
    {/* Right: Login Form */}
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <Form/>
      {/* Sign up  Link */}
      <div className="mt-6 text-blue-500 text-center">
        <a href="https://learn.zone01dakar.sn/" className="hover:underline">
          Sign up Here
        </a>
      </div>
    </div>
  </div>  
  )
}
