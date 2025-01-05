import React, { useEffect, useRef, useState } from "react";
import HelpDialog from "./HelpDailogBox";
import NotificationDialog from "./NotificationDailog";
import ProfileDialog from "./ProfileDailogBox";
import DropdownMenu from "./DropDownMenu";
import { menuItems } from "../data/menuItem";

const DashboardNavbar = () => {
  const [activeDialog, setActiveDialog] = useState("");
  const [activeNotifaction, setActiveNotifaction] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0].title); // Default menu item

  const dialogRef = useRef(null);

  const toggleDialog = (dialogType) => {
    setActiveDialog((prev) => (prev === dialogType ? "" : dialogType));
  };

  const handleNotification = () => {
    setActiveNotifaction(!activeNotifaction);
  };

  const handleMenuSelect = (item) => {
    setSelectedMenu(item.title);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setActiveDialog("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex justify-between  bg-gray-200 py-2  px-4 sm:px-11 items-center">
      <div className="flex gap-8 items-center">
        <div>
          <h2 className="uppercase  text-[18px] text-gray-500">PIXISET</h2>
        </div>
        <div>
          <DropdownMenu
            options={menuItems}
            onSelect={handleMenuSelect}
            defaultValue={selectedMenu}
          />{" "}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div>
          <div className="relative group" ref={dialogRef}>
            <i
              className="fa-regular fa-circle-question cursor-pointer"
              onClick={() => toggleDialog("help")}
            ></i>
            <HelpDialog
              activeDialog={activeDialog}
              toggleDialog={toggleDialog}
            />
          </div>
        </div>
        <div>
          <div className="relative group" ref={dialogRef}>
            <i
              className="fa-regular fa-bell cursor-pointer"
              onClick={() => toggleDialog("notifications")}
            ></i>
            <NotificationDialog
              activeDialog={activeDialog}
              toggleDialog={toggleDialog}
              activeNotifaction={activeNotifaction}
              handleNotification={handleNotification}
            />
          </div>{" "}
        </div>
        <div>
          {" "}
          <div className="relative" ref={dialogRef}>
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
    </div>
  );
};

export default DashboardNavbar;
