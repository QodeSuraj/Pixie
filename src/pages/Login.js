import React from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../assets/images/google-logo.svg";
import AppleLogo from "../assets/images/apple-logo-black.svg";

const LoginPage = () => {
  return (
    <div className="form_section w-full xl:w-1/4 lg:w-1/3 md:w-2/4 sm:w-4/5 flex-wrap mx-auto flex items-center justify-center min-h-80 px-4 py-16">
      <div className="w-full flex flex-col">
        <div className="head_section pb-9">
          <h4 className="text-2xl font-medium text-center pb-3">
            Log in to Pixieset
          </h4>
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-link">
              Sign up
            </Link>
          </p>
        </div>
        <form action="#" className="w-full flex flex-col space-y-5">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2.5">
              <Link
                to="#"
                className="flex items-center justify-center p-3 space-x-2 group border border-boder hover:bg-link focus:outline-none"
              >
                <span>
                  <img src={GoogleLogo} className="w-5" alt="" />
                </span>
                <p className="text-base font-bold text-social group-hover:text-white">
                  Continue with Google
                </p>
              </Link>
              <Link
                to="#"
                className="flex items-center justify-center p-3 space-x-2 group border border-boder hover:bg-link focus:outline-none"
              >
                <span>
                  <img src={AppleLogo} className="w-5" alt="Apple Logo" />
                </span>
                <p className="text-base font-bold text-social group-hover:text-white">
                  Continue with Apple
                </p>
              </Link>
            </div>
          </div>
          <p className="email_section text-sm font-normal text-content text-center py-2">
            Or use your email
          </p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            autoFocus
            className="text-lg px-4 py-3 font-semibold border border-boder focus:border-transparent focus:outline-none focus:ring-1 focus:ring-input_focus"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoFocus
            className="text-lg px-4 py-3 font-semibold border border-boder focus:border-transparent focus:outline-none focus:ring-1 focus:ring-input_focus"
          />
          <div className="flex items-center justify-between px-2">
            <div className="flex space-x-1 items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-3 h-4 rounded focus:ring-0"
              />
              <label
                htmlFor="remember"
                className="text-xs font-semibold text-small_text"
              >
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-xs font-semibold text-link">
                Lost Password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-5 py-3 text-sm font-normal text-white bg-link hover:bg-btn_hover focus:outline-none"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
