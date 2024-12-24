import React from "react";
import clientProfile from "../assets/images/profile_images/client_gallery_profile.png";
import Website from "../assets/images/profile_images/website_profile.png";
import Store from "../assets/images/profile_images/product_profile.png";
import StdioManager from "../assets/images/profile_images/studiomanager_profile.png";
import MobileGallary from "../assets/images/profile_images/mobilegallery_profile.png";

const DashboardPagesss = () => {
  const menuItems = [
    {
      icon: clientProfile,
      title: "Client Gallery",
      description: "Something is there",
      subDescription: [
        "Manage Collection",
        "Create Collection",
        "View Homepage",
        "Setting",
      ],
    },
    {
      icon: Website,
      title: "Profile Settings",
      description: "Something is there",
      subDescription: ["Edit WebSite"],
    },
    {
      icon: Store,
      title: "Store",
      description: "Something is there",
      subDescription: ["Views Orders", "Setting"],
    },
    {
      icon: StdioManager,
      title: "Studio Manager",
      description: "Something is there",
      subDescription: [
        "Manage Contact",
        "New Project",
        "New Document",
        "New Session",
        "View Payments",
      ],
    },
    {
      icon: MobileGallary,
      title: "Mobile Gallery",
      description: "Something is there",
      subDescription: ["Manage App", "Crate New App", "Setting"],
    },
  ];

  return (
    <div className="bg-white max-w-full mx-4 h-auto sm:max-w-[80%] sm:mx-auto md:max-w-[61%] lg:w-[65%]">
      <div className="px-10">
        <div>
          <h1 className="text-xl text-gray-900 mt-10">Dashboard</h1>
          <div>
            <h2 className="text-gray-500 mt-8 uppercase text-xs">Products</h2>
          </div>
        </div>

        <div className="mt-10 py-4 flex flex-col  lg:flex-row  ">
          {menuItems.map((item, index) => {
            return (
              <div key={index} className="w-[355px]  flex flex-col  ">
                <div className="flex py-4 flex-row gap-8 md:gap-4 sm:gap-2 items-center sm:w-auto lg:flex-col">
                  <img
                    className="h-9 w-9 lg:h-12 lg:w-12 "
                    src={item.icon}
                    sm
                    alt={item.title}
                  />
                  <h2 className="text-sm font-medium">{item.title}</h2>
                </div>


                {item.subDescription.map((description, index) => (
                  <div key={index} className=" hidden lg:block  ">
                    <ul className="hover:bg-gray-100 py-3 ">
                      <li className=" ">
                        <p className="text-[10px] px-0 text-center text-gray-600  ">
                          {description}
                        </p>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div>
          <p className="text-gray-500 uppercase tracking-wider text-sm">
            Quick Access
          </p>

          <div className="grid lg:grid-cols-2 mt-10 gap-2">
            <div className="p-3 text-gray-400 bg-gray-200 ">
              <div className="flex items-center gap-2 py-1">
                <img className="h-6 w-6" src={clientProfile} alt="" />
                <p>Recent Collection</p>
              </div>
              <div className="flex flex-col gap-y-4 justify-center h-[250px] items-center bg-white rounded-sm">
                <h4 className="text-black">Crate Your First Colection</h4>
                <p className="text-[12px]">
                  Crate your Beautiful Client Gallary in S step
                </p>
                <button className="bg-green-400 p-2 text-white">
                  Get Started
                </button>
              </div>
            </div>
            <div className="p-3 text-gray-400 bg-gray-200 ">
              <div className="flex items-center gap-2 py-1">
                <img className="h-6 w-6" src={Store} alt="" />
                <p>Recent Collection</p>
              </div>
              <div className="flex flex-col gap-y-4 justify-center h-[250px] items-center bg-white rounded-sm">
                <h4 className="text-black">Crate Your First Colection</h4>
                <p className="text-[12px]">
                  Crate your Beautiful Client Gallary in S step
                </p>
                <button className="bg-green-400 p-2 text-white">
                  Get Started
                </button>
              </div>
            </div>
            <div className="p-3 text-gray-400 bg-gray-200 ">
              <div className="flex items-center gap-2 py-1">
                <img className="h-6 w-6" src={clientProfile} alt="" />
                <p>Notifaction</p>
              </div>
              <div className="flex flex-col gap-y-4 justify-center h-[250px] items-center bg-white rounded-sm">
                <h4 className="text-black">Your latest Notifaction</h4>
                <p className="text-[12px]">
                  Crate your Beautiful Client Gallary in S step
                </p>
              </div>
            </div>
            <div className="p-3 text-gray-400 bg-gray-200 ">
              <div className="flex items-center gap-2 py-1">
                <img className="h-6 w-6" src={clientProfile} alt="" />
                <p>Quick Link</p>
              </div>
              <div className="flex flex-col gap-y-4 justify-center h-[250px] items-center bg-white rounded-sm">
                <h4>Crate Your First Colection</h4>
                <p className="text-[12px]">
                  Crate your Beautiful Client Gallary in S step
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 py-10 ">
            <div className=" tracking-wide uppercase text-xs">
              <p className="text-gray-400">More From PixieSet</p>
            </div>

            <div className="grid lg:grid-cols-2 mt-10 ">
              <div className="h-[250px] bg-gray-200"></div>
              <div className="h-[250px] bg-gray-100">
                <div className="p-4 px-6">
                  <p className="text-gray-400 text-xs uppercase">
                    Pixieset Blog
                  </p>

                  <div className="py-6 text-s  tracking-wide">
                    <p>News in Stdio Manager Booking Coupons,</p>
                    <span>Inbox and Email Templets</span>
                  </div>

                  <p className="text-xs text-gray-400">
                    Studio Manager has become the backbone of the business
                    workflow for many photographers, and now it’s even more
                    powerful. You can offer session discounts, send emails
                    directly from your dashboard, and manage all client
                    communication in one place.
                  </p>
                  <div className=" py-4 text-xs">
                    <p className="text-gray-400">2024-12-25</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 my-10 py-10">
              <div className="h-[200px] flex flex-col gap-y-7">
                <div className="flex items-center justify-center sm:flex-none">
                  <img></img>
                </div>
                <p>We're Here for You</p>
                <p className="text-[12px]">
                  Ask questions, browse articles & find answers. Visit the
                  Pixieset Help Center.
                </p>
              </div>
              <div className="h-[200px] flex flex-col gap-y-7 ">
                <div className="flex items-center justify-center lg:flex-none">
                  <img></img>
                </div>
                <p>Invite friends & get $20</p>
                <p className="text-[12px]">
                  Spread the love and earn referral credits for every friend you
                  refer. Invite friends now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPagesss;
