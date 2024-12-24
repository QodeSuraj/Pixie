import React, { useState } from "react";

const DropdownMenu = ({ options = [], onSelect, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    title: "Dashboard",
    icon: "",
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Store the entire selected option
    setIsOpen(false);
    if (onSelect) onSelect(option); // Trigger the callback if provided
  };

  const handleDashboard = () => {
    setSelectedOption({ title: "Dashboard", icon: "" }); // Reset to Dashboard
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption.icon && (
            <img
              src={selectedOption.icon}
              alt="icon"
              className="inline-block w-4 h-4 mr-1"
            />
          )}
          <p className="text-xs">

          {selectedOption.title}
          </p>
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
                  {option.icon && (
                    <img
                      src={option.icon}
                      alt="icon"
                      className="inline-block w-7 h-7"
                    />
                  )}
                  <div>
                    <p className="text-xs font-semibold">{option.title}</p>
                    <p className="text-[10px]">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
            <div className="flex justify-center" onClick={handleDashboard}>
              <button className="flex items-center justify-center py-2">
                <div className="flex gap-x-2">
                  <img src="" alt="" />
                  <p className="text-gray-600 text-sm">View Dashboard</p>
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
