import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { signInWithGoogle, loginUser } = useContext(AuthContext);
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        toast.success("Successfully login");
        form.reset();

        // jwt token
        fetch("https://law-firm-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("JWT-Token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   google login
  const googleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Login");

        const currentUser = {
          email: user.email,
        };

        // jwt token
        fetch("https://law-firm-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("JWT-Token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 container mx-auto py-9">
      <div>
        <img
          src="https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png"
          alt=""
          className="w-full"
        />
      </div>
      <section className="lg:w-3/4 w-full mx-auto my-auto">
        <div className="w-full mx-auto  border shadow rounded px-4 py-9">
          <h1 className="text-4xl font-semibold text-center text-gray-900 py-4">
            Login
          </h1>
          <div className="pb-6 space-y-2 border-b border-gray-200">
            <button
              onClick={googleSignIn}
              className="w-full bg-cyan-400 hover:bg-cyan-500 rounded-full px-6 flex justify-center items-center py-3 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
              </svg>
              Continue with Google
            </button>
            <button className="w-full bg-cyan-400 hover:bg-cyan-500 rounded-full px-6 flex justify-center items-center py-3 font-semibold gap-2 ">
              <FaFacebook className="text-xl"></FaFacebook>
              Continue with Facebook
            </button>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block">
              <span className="block mb-1 font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input w-full rounded-full px-6 py-2"
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 font-medium text-gray-700">
                Your Password
              </span>
              <input
                className="form-input w-full rounded-full px-6 py-2"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </label>
            <input
              type="submit"
              className="w-full py-3 px-6 btn bg-cyan-400 hover:bg-cyan-500 rounded-full cursor-pointer font-semibold"
              value="Login"
            />
          </form>
          <div className="my-2 text-center">
            <p>
              Are your new?{" "}
              <Link
                className="text-sm text-gray-700 underline hover:text-purple-700 "
                to="/register"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
