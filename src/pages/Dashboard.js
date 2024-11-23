import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardBanner from "../assets/images/dashboard banner.jpg";
import clientProfile from "../assets/images/profile_images/client_gallery_profile.png";
import folderIcon from "../assets/images/icons/folder-image.svg";
import starIcon from "../assets/images/icons/star-icon.svg";
import browserIcon from "../assets/images/icons/browser-icon.svg";
import settingIcon from "../assets/images/icons/settings-icon.svg";
import plusIcon from "../assets/images/icons/plus-icon.svg";

const navItems = [
  { title: "Collections", image: folderIcon, link: "#" },
  { title: "Starred", image: starIcon, link: "#" },
  { title: "Homepage", image: browserIcon, link: "#" },
  { title: "Settings", image: settingIcon, link: "#" },
];

const CollectionItem = ({ title, image, link }) => (
  <Link
    to={link}
    className="collection flex gap-3 items-center hover:bg-slate-100 pl-6 pr-4 py-4"
  >
    <img src={image} className="w-5" alt="" />
    <h4 className="app-nav-title text-md font-normal text-app_nav_color">
      {title}
    </h4>
  </Link>
);

const CircularStorageChart = ({ usedSpace, totalSpace }) => {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2; // Adjusted radius
  const circumference = normalizedRadius * 2 * Math.PI; // Circle circumference
  const usedPercentage = (usedSpace / totalSpace) * 100; // Used space percentage
  const strokeDashoffset =
    circumference - (usedPercentage / 100) * circumference; // Offset

  return (
    <svg width="40px" height="40px" viewBox="0 0 120 120">
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#36A2EB"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const DashboardPage = () => {
  const [usedSpace, setUsedSpace] = useState(0);
  const [totalSpace, setTotalSpace] = useState(100);

  return (
    <div className="dashboard grid grid-cols-gridDashboard font-monsterrat">
      {/* Left Sidebar */}
      <div className="left_side flex flex-col gap-12 bg-light-400 border-r-2 gap-x-5 border-dashboard_border min-h-lvh sticky">
        {/* Category Section */}
        <div className="category_section flex justify-between pl-6 pr-4 py-4">
          <div className="flex items-center gap-2">
            <img src={clientProfile} className="w-5" alt="" />
            <p className="font-semibold text-xs active_tab">Client Gallery</p>
            <svg
              className="svg-inline--fa fa-angle-down w-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-regular fa-circle-question"></i>
            <i className="fa-regular fa-bell"></i>
            <p className="w-8 h-8 font-bold text-xs text-center rounded-full hover:border-2 border-link bg-slate-100 flex items-center justify-center">
              S
            </p>
          </div>
        </div>

        <div className="app-nav flex flex-col">
          {navItems.map((item, index) => (
            <CollectionItem
              key={index}
              title={item.title}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>

        <div className="storage_section ml-6 mr-4 mb-4 block mt-auto">
          <div className=" bg-storage_color px-5 py-3 rounded-lg sticky bottom-0">
            <Link to="#">
              <div className="flex items-center gap-2">
                <CircularStorageChart
                  usedSpace={usedSpace}
                  totalSpace={totalSpace}
                />

                <div className="storage_about">
                  <h4 className="text-sm font-semibold text-app_nav_color">
                    Storage
                  </h4>
                  <p className="text-xs text-app_nav_color">
                    0 GB of 3 GB used
                  </p>
                </div>
                {/* <button
                onClick={() =>
                  setUsedSpace((prev) => Math.min(prev + 10, totalSpace))
                }
                className="mt-4 bg-btn_color text-white px-4 py-2 rounded"
              >
                Increase Space Used
              </button> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* End of Left Content/Sidebar */}

      {/* Right Content */}
      <div className="right_side px-6 py-4">
        <div className="flex flex-col align-center justify-center gap-8">
          {/* Intro Section */}
          <div className="flex flex-col">
            <p className="text-sm font-normal text-small_text text-center mb-2">
              Get Started
            </p>
            <p className="text-xl font-medium text-black text-center mb-4">
              Create beautiful photo collections in 3 steps
            </p>

            <Link
              to="#"
              className="w-auto mx-auto px-5 py-3 text-xs font-semibold text-white bg-btn_color hover:bg-btn_hover focus:outline-none"
            >
              Get Started with Sample Photos
            </Link>
          </div>

          {/* Dashboard Banner */}
          <div>
            <img src={DashboardBanner} className="w-1/2 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
