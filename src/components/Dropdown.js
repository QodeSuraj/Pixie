import React, { useState } from "react";
import clientProfile from "../assets/images/profile_images/client_gallery_profile.png";

const data = [
  { id: 0, label: "Istanbul, TR (AHL)", content: "", image: "", link: "#" },
];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleItemClick = (id) => {
    setSelectedItem(id);import React, { useState } from "react";

    const DropdownMenu = ({ options = [], onSelect, defaultValue }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState("Dashboard");
    
      const handleOptionClick = (option) => {
        setSelectedOption(option.title);
        setIsOpen(false);
      };
    
      const handleDashboard = () => {
        setSelectedOption("Dashboard");
        setIsOpen(false);
      };
    
      return (
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white   focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption === "Dashboard" ? "Dashboard" : selectedOption}
              <svg
                className="w-5 h-5 ml-2 -mr-1 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
    
          {isOpen && (
            <div className="absolute right-10 -left-6 z-10 w-[300px] sm:w-[350px] mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 shadow-lg focus:outline-none">
              <div className="py-2 flex flex-col gap-1">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className="block w-full px-4 py-4 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="flex items-center gap-2">
                      <div>
                        {option.icon && (
                          <img
                            src={option.icon}
                            alt="icon"
                            className="inline-block w-7 h-7 mr-2"
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-xs">{option.title}</p>
                        <p className="text-[10px]">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
                <div className="flex justify-center" onClick={handleDashboard}>
                  <button className="flex items-center justify-center py-2">
                    <div className="flex gap-x-2">
                      <img src="" alt="" />
                      <p className="text-gray-600 text-sm">View Dashobard</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    export default DropdownMenu;
    
    setOpen(false); // Close dropdown after selecting an item
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem !== null
          ? data.find((item) => item.id === selectedItem).label
          : "Select your destination"}
        <i className={`fa fa-chevron-right icon ${isOpen ? "open" : ""}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-body">
          {data.map((item) => (
            <div
              key={item.id} // Ensure each item has a unique key
              className={`dropdown-item ${
                selectedItem === item.id ? "selected" : ""
              }`}
              onClick={() => handleItemClick(item.id)} // Properly handle the click
            >
              <span
                className={`dropdown-item-dot ${
                  selectedItem === item.id ? "selected" : ""
                }`}
              >
                {" "}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

            // <p className="font-semibold text-xs active_tab">Client Gallery</p>
            // <svg
            //   className="svg-inline--fa fa-angle-down w-2"
            //   aria-hidden="true"
            //   focusable="false"
            //   data-prefix="fas"
            //   data-icon="angle-down"
            //   role="img"
            //   xmlns="http://www.w3.org/2000/svg"
            //   viewBox="0 0 448 512"
            // >
            //   <path
            //     fill="currentColor"
            //     d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            //   ></path>
            // </svg>

export default Dropdown;
