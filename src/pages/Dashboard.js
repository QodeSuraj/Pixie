import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardBanner from "../assets/images/dashboard banner.jpg";
import clientProfile from "../assets/images/profile_images/client_gallery_profile.png";
import Website from "../assets/images/profile_images/website_profile.png";

import Store from "../assets/images/profile_images/product_profile.png";

import StdioManager from "../assets/images/profile_images/studiomanager_profile.png";
import MobileGallary from "../assets/images/profile_images/mobilegallery_profile.png";

import folderIcon from "../assets/images/icons/folder-image.svg";
import starIcon from "../assets/images/icons/star-icon.svg";
import browserIcon from "../assets/images/icons/browser-icon.svg";
import settingIcon from "../assets/images/icons/settings-icon.svg";
import ProfileDialog from "../components/ProfileDailogBox";
import NotificationDialog from "../components/NotificationDailog";
import HelpDialog from "../components/HelpDailogBox";
import DropdownMenu from "../components/DropDownMenu";

const navItems = [
  { title: "Collections", image: folderIcon, link: "#" },
  { title: "Starred", image: starIcon, link: "#" },
  { title: "Homepage", image: browserIcon, link: "#" },
  { title: "Settings", image: settingIcon, link: "#" },
];
const menuItems = [
  {
    icon: clientProfile,
    title: "Client Gallery",
    description: "somenthing is there",
  },
  {
    icon: Website,
    title: "Profile Settings",
    description: "somenthing is there",
  },
  {
    icon: Store,
    title: "Logout",
    description: "somenthing is there",
  },
  {
    icon: StdioManager,
    title: "Logout",
    description: "somenthing is there",
  },
  {
    icon: MobileGallary,
    title: "Logout",
    description: "somenthing is there",
  },
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
  const [activeNotification, setActiveNotification] = useState(false);
  const [usedSpace, setUsedSpace] = useState(0);
  const [totalSpace, setTotalSpace] = useState(100);
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0].title); // Default menu item

  const helpDialogRef = useRef(null);
  const notificationDialogRef = useRef(null);
  const profileDialogRef = useRef(null);

  const toggleDialog = (dialogName) => {
    if (activeDialog === dialogName) {
      setActiveDialog(null);
      setActiveNotification(false);
    } else {
      setActiveDialog(dialogName);
    }
  };

  const handleNotification = () => {
    setActiveNotification(!activeNotification);
  };

  const handleMenuSelect = (item) => {
    setSelectedMenu(item.title);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDialog && 
          !(
            (helpDialogRef.current && helpDialogRef.current.contains(event.target)) ||
            (notificationDialogRef.current && notificationDialogRef.current.contains(event.target)) ||
            (profileDialogRef.current && profileDialogRef.current.contains(event.target))
          )
      ) {
        setActiveDialog(null);
      }

      if (
        activeNotification &&
        notificationDialogRef.current &&
        !notificationDialogRef.current.contains(event.target)
      ) {
        setActiveNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDialog, activeNotification]);


  return (
    <div className="dashboard grid lg:grid-cols-gridDashboard md:grid-cols-mobilegridDashborad font-monsterrat">
      {/* Left Sidebar */}
      <div className="left_side flex flex-col lg:gap-12 md:gap-0 bg-light-400 border-r-0 lg:border-r-2 md:border-r-0 sm:border-r-0 gap-x-5 border-dashboard_border lg:min-h-lvh md:min-h-full sticky">
        {/* Category Section */}
        <div className="category_section flex justify-between pl-6 pr-4 py-2 lg:py-4 md:py-4 sm:py-2 lg:bg-white md:bg-dashboard_border sm:bg-dashboard_border">
          <div className="flex items-center gap-2 w-[200px]">
            <DropdownMenu
              options={menuItems}
              onSelect={handleMenuSelect}
              defaultValue={selectedMenu}
            />
          </div>
          <div className="flex items-center gap-3 relative">
            <div
              onClick={() => toggleDialog("help")}
              className="relative group"
              ref={helpDialogRef}
            >
              <i className="fa-regular fa-circle-question cursor-pointer"></i>
              <HelpDialog
                activeDialog={activeDialog}
                toggleDialog={toggleDialog}
              />
            </div>
            <div className="relative group" ref={notificationDialogRef}>
              <i
                className="fa-regular fa-bell cursor-pointer"
                onClick={() => toggleDialog("notifications")}
              ></i>
              <NotificationDialog
                activeDialog={activeDialog}
                toggleDialog={toggleDialog}
                activeNotification={activeNotification}
                handleNotification={handleNotification}
              />
            </div>
            <div className="relative" ref={profileDialogRef}>
              <p
                className="w-8 h-8 font-bold text-xs text-center rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:border-2 border-link"
                onClick={() => toggleDialog("profile")}
              >
                S
              </p>
              <ProfileDialog
                activeDialog={activeDialog}
                toggleDialog={toggleDialog}
              />
            </div>
          </div>
        </div>

        {/* Navigation Items */}
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

        {/* Storage Section */}
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
                    {usedSpace} GB of {totalSpace} GB used
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
            <img
              src={DashboardBanner}
              className="w-1/2 mx-auto"
              alt="Dashboard Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
