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
    setSelectedItem(id);
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
