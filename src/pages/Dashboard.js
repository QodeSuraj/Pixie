import React from "react";
import { Link } from "react-router-dom";
import Dashboardbaner from "../assets/images/dashboard banner.jpg";
import clientprofile from "../assets/images/profile_images/client_gallery_profile.png";

const DashboardPage = () => {
  return (
    <div className="dashboard flex font-monsterrat">
      <div className="left_side w-1/6 bg-light-400 pl-6 pr-4 py-4 border-r-2 gap-x-5 border-dashboard_border min-h-lvh	sticky">
        <div className="category_section flex justify-between">
          <div className="flex items-center gap-2">
            <img src={clientprofile} className="w-5" />
            <p className="font-semibold text-sm active_tab">Client Gallery</p>
            <svg
              className="svg-inline--fa fa-angle-down w-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              as="span"
              hasHover="false"
            >
              <path
                class=""
                fill="currentColor"
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              ></path>
            </svg>{" "}
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-regular fa-circle-question"></i>
            <i className="fa-regular fa-bell"></i>{" "}
            <p className="w-8	h-8	font-bold text-xs text-center rounded-full hover:border-2 border-link bg-slate-100 flex items-center justify-center">
              S
            </p>
          </div>
        </div>
      </div>

      <div className="right_side flex flex-col align-center justify-center gap-8 w-5/6 px-6 py-4 ">
        <div className="flex flex-col">
          <p className="text-sm font-normal text-small_text text-center mb-2">
            Get Started
          </p>
          <p className="text-xl font-medium text-black text-center mb-4">
            Create beautiful photo collections in 3 steps
          </p>

          <Link
            to="#"
            className="w-auto	mx-auto px-5 py-3 text-xs font-semibold text-white bg-btn_color hover:bg-btn_hover focus:outline-none"
          >
            Get Started with Sample Photos
          </Link>
        </div>

        <div>
          <img src={Dashboardbaner} className="w-1/2 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
