import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardBanner from "../assets/images/dashboard banner.jpg";
import clientProfile from "../assets/images/profile_images/client_gallery_profile.png";
import folderIcon from "../assets/images/icons/folder-image.svg";
import starIcon from "../assets/images/icons/star-icon.svg";
import browserIcon from "../assets/images/icons/browser-icon.svg";
import settingIcon from "../assets/images/icons/settings-icon.svg";

const navItems = [
  { title: "Collections", image: folderIcon, link: "#" },
  { title: "Starred", image: starIcon, link: "#" },
  { title: "Homepage", image: browserIcon, link: "#" },
  { title: "Settings", image: settingIcon, link: "#" },
];

const CollectionItem = ({ title, image, link }) => (
  <Link
    to={link}
    className="collection flex gap-3 items-center hover:bg-slate-100 pl-2 pr-2 py-2 lg:py-4 lg:pl-6 lg:pr-4 md:py-2"
  >
    <img
      src={image}
      className="w-5 lg:flex md:hidden sm:hidden xs:hidden"
      alt=""
    />
    <h4 className="app-nav-title text-xs lg:text-md md:text-sm sm:text-sm font-medium text-app_nav_color">
      {title}
    </h4>
  </Link>
);

const CircularStorageChart = ({ usedSpace, totalSpace }) => {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const usedPercentage = (usedSpace / totalSpace) * 100;
  const strokeDashoffset =
    circumference - (usedPercentage / 100) * circumference;

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
  const [activeDialog, setActiveDialog] = useState("");
  const [activeNotifaction, setActiveNotifaction] = useState(false);

  const [usedSpace, setUsedSpace] = useState(0);
  const [totalSpace, setTotalSpace] = useState(100);

  const toggleDialog = (dialogType) => {
    setActiveDialog((prev) => (prev === dialogType ? null : dialogType));
  };

  const handleNotification = () => {
    setActiveNotifaction(!activeNotifaction);
  };
  return (
    <div className="dashboard grid lg:grid-cols-gridDashboard md:grid-cols-mobilegridDashborad font-monsterrat">
      {/* Left Sidebar */}
      <div className="left_side flex flex-col lg:gap-12 md:gap-0 bg-light-400 border-r-0 lg:border-r-2 md:border-r-0 sm:border-r-0 gap-x-5 border-dashboard_border lg:min-h-lvh md:min-h-full sticky">
        {/* Category Section */}
        <div className="category_section flex justify-between pl-6 pr-4 py-2 lg:py-4 md:py-4 sm:py-2 lg:bg-white md:bg-dashboard_border sm:bg-dashboard_border">
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
          <div className="flex items-center gap-3 relative">
            <div className="relative ">
              <i
                className="fa-regular fa-circle-question cursor-pointer "
                onClick={() => toggleDialog("help")}
              ></i>

              {activeDialog === "help" && (
                <div className="absolute right-0 mt-6 bg-white shadow-lg  py-4 w-72 z-10">
                  <div className="flex flex-col gap-4  w-full ">
                    <div className="hover:bg-gray-200 ">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="pl-10 pr-4 py-2  w-full focus:outline-none focus:border-transparent"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          <i className="fas fa-search"></i>
                        </span>
                      </div>
                    </div>
                    <div className="hover:bg-gray-200 ">
                      <div className="flex flex-col mx-4 py-2">
                        <h3 className=" text-[13px]">
                          Getting Started with Client Gallery
                        </h3>
                        <p className="text-[10px] text-gray-600">
                          loremkdgfkjdsgf
                        </p>
                      </div>
                    </div>
                    <div className="hover:bg-gray-200 ">
                      <div className="flex flex-col mx-4 py-2">
                        <h3 className=" text-[13px] ">
                          Getting Started with Client Gallery
                        </h3>
                        <p className="text-[10px] text-gray-600">
                          loremkdgfkjdsgf
                        </p>
                      </div>
                    </div>
                    <div className="hover:bg-gray-200 ">
                      <div className="flex flex-col mx-4 py-2">
                        <h3 className=" text-[13px]">
                          Getting Started with Client Gallery
                        </h3>
                        <p className="text-[10px] text-gray-600">
                          loremkdgfkjdsgf
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h3 className="px-3 text-gray-800 text-[13px] underline py-4 cursor-pointer">
                        Browser Help Contact
                      </h3>
                    </div>
                    <div className="hover:bg-gray-200 py-4 ">
                      <div className="flex items-center justify-center   ">
                        <h3 className=" text-[10px]">
                          {" "}
                          <i className="fas fa-comment-dots"></i> Contact Us
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <i
                className="fa-regular fa-bell cursor-pointer "
                onClick={() => toggleDialog("notifications")}
              ></i>
              {activeDialog === "notifications" && (
                <div className="absolute right-0 lg:-left-56 mt-6 bg-white shadow-lg shadow-gray-300 p-4 w-72 z-10  ">
                  <div className="flex items-center justify-between py-4">
                    <h4 className="font-semibold text-gray-800">
                      Notifications
                    </h4>
                    <div className="relative">
                      <h4
                        className=" text-bold cursor-pointer"
                        onClick={() => handleNotification()}
                      >
                        ...
                      </h4>
                      {activeNotifaction && (
                        <div className="absolute -left-24  mt-14 bg-white shadow-lg shadow-gray-300 p-4 w-44 z-10  ">
                          <div className="flex items-center justify-between py-4">
                            <h4 className="font-semibold text-gray-800">
                              Notifications
                            </h4>
                            <div className="relative"></div>
                          </div>
                          <hr></hr>
                          <div className="flex items-center justify-center py-2 text-[12px]">
                            <p>You have no notification</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="flex items-center justify-center py-4 text-[12px]">
                    <p>You have no notification</p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative ">
              <p
                className="w-8 h-8 font-bold text-xs text-center rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:border-2 border-link "
                onClick={() => toggleDialog("profile")}
              >
                S
              </p>
              {activeDialog === "profile" && (
                <div className="absolute right-0 mt-4 bg-white py-4 w-60 z-10 shadow-lg shadow-gray-400 rounded-lg">
                  <div className="flex flex-col  gap-2">
                    <div className="flex items-center gap-4 px-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full">
                        <h2 className="text-2xl text-green-400">S</h2>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p className="font-semibold text-black">Ram Katwal</p>
                        <p className="text-xs">ram@gmail.com</p>
                      </div>
                    </div>
                    <div className="py-2 hover:bg-gray-200 w-full flex justify-center cursor-pointer">
                      <p className="text-[14px] text-black ">
                        Invite Friends & get
                        <span className=""> $20</span>
                      </p>
                    </div>
                    <hr></hr>

                    <ul className="w-full text-gray-600 flex flex-col  text-[12px] ">
                      <li className="py-2 px-14  hover:bg-gray-200 cursor-pointer ">
                        Profile
                      </li>
                      <li className="py-2 px-14  hover:bg-gray-200 cursor-pointer ">
                        Account
                      </li>
                      <li className="py-2 px-14  hover:bg-gray-200 cursor-pointer ">
                        Billing
                      </li>
                      <li className="py-2 px-14 hover:bg-gray-200 cursor-pointer ">
                        Advance Settings
                      </li>
                      <li className="py-2 px-14 hover:bg-gray-200 cursor-pointer ">
                        Logout
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="app-nav flex lg:flex-col md:py-2 sm:py-2 justify-between md:justify-between sm:justify-between">
          {navItems.map((item, index) => (
            <CollectionItem
              key={index}
              title={item.title}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>

        <div className="storage_section ml-6 mr-4 mb-4 lg:block mt-auto md:hidden sm:hidden xs:hidden">
          <div className="bg-storage_color px-5 py-3 rounded-lg sticky bottom-0">
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
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="right_side px-6 py-4 pt-16">
        <div className="flex flex-col align-center justify-center gap-8">
          <div className="flex flex-col">
            <p className="text-sm font-normal text-small_text text-center mb-2">
              Get Started
            </p>
            <p className="text-2xl font-medium text-black text-center mb-4">
              Create beautiful photo collections in 3 steps
            </p>
            <Link
              to="#"
              className="w-auto mx-auto px-5 py-3 text-xs font-semibold text-white bg-btn_color hover:bg-btn_hover focus:outline-none"
            >
              Get Started with Sample Photos
            </Link>
          </div>

          <div>
            <img src={DashboardBanner} className="w-1/2 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
