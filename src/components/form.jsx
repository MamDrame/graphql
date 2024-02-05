export function Form() {
    return (
        <form action="#" method="POST">
            {/* Username Input */}
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autoComplete="off"
                />
            </div>
            {/* Password Input */}
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autoComplete="off"
                />
                <img onClick={handleEye} id="Eye" src="../src/assets/eye.svg" alt="eye icon" className="absolute right-[-10px] bottom-[-10px] w-[28px] h-[28px] transform translate-x-[-50%] translate-y-[-50%] cursor-pointer"/>
            </div>
            {/* Login Button */}
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                onSubmit={handleSubmit}
            >
                Log In
            </button>
        </form>
    );
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted');
}

// let isHidden = true;
function handleEye(e) {
    console.log('Eye Clicked');
    console.log(e.target);
//     isHidden = !isHidden;
// e.target.previousElementSibling.type = isHidden ? "password" : "text";
// e.target.src = isHidden
//   ? "../static/assets/eye.svg"
//   : "../static/assets/eye-off.svg";
}