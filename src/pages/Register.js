import React from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../assets/images/google-logo.svg";
import AppleLogo from "../assets/images/apple-logo-black.svg";

const RegisterPage = () => {
  return (
    <div className="form_section w-full xl:w-1/4 lg:w-1/3 md:w-2/4 sm:w-4/5 flex-wrap mx-auto flex items-center justify-center min-h-80 px-4 py-16">
      <div className="w-full flex flex-col">
        <div className="head_section pb-9">
          <h4 className="text-2xl font-medium text-center pb-3">
            Create your free account
          </h4>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-link">
              Log in
            </Link>
          </p>
        </div>
        <form action="#" className="w-full flex flex-col space-y-5">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2.5">
              <Link
                to="#"
                className="flex items-center justify-center p-3 space-x-2 group border border-border hover:bg-link focus:outline-none"
              >
                <span>
                  <img src={GoogleLogo} className="w-5" alt="Google Logo" />
                </span>
                <p className="text-base font-bold text-social group-hover:text-white">
                  Continue with Google
                </p>
              </Link>
              <Link
                to="#"
                className="flex items-center justify-center p-3 space-x-2 group border border-border hover:bg-link focus:outline-none"
              >
                <span>
                  <img src={AppleLogo} className="w-5" alt="Apple Logo" />
                </span>
                <p className="text-base font-bold text-social group-hover:text-white">
                  Continue with Apple
                </p>
              </Link>
            </div>
            <p className="email_section text-sm font-normal text-content text-center py-2 space-x-2">
              Or use your email
            </p>
          </div>
          <input
            type="text"
            id="business_name"
            placeholder="Business Name"
            autoFocus
            className="text-lg px-4 py-3 font-semibold border border-border focus:border-transparent focus:outline-none focus:ring-1 focus:ring-input_focus"
          />
          <input
            type="url"
            id="website_url"
            placeholder="Website (optional)"
            className="text-lg px-4 py-3 font-semibold border border-border focus:border-transparent focus:outline-none focus:ring-1 focus:ring-input_focus"
          />
          <input
            type="email"
            id="email"
            placeholder="you@email.com"
            className="text-lg px-4 py-3 font-semibold border border-border focus:border-transparent focus:outline-none focus:ring-1 focus:ring-input_focus"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="text-lg px-4 py-3 font-semibold border border-border focus:border-transparent focus:outline-none focus:ring-1 focus:ring-input_focus"
          />
          <div>
            <button
              type="submit"
              className="w-full px-5 py-3 text-sm font-normal text-white bg-btn_color hover:bg-btn_hover focus:outline-none"
            >
              CREATE FREE ACCOUNT
            </button>
          </div>
          <p className="text-xs font-normal text-small_text text-center px-2">
            By creating an account, you agree to Pixieset's{" "}
            <Link to="#" className="text-link underline">
              Terms of Service
            </Link>{" "}
            and have read and understood the{" "}
            <Link to="#" className="text-link underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
