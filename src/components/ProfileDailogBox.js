const ProfileDialog = ({ activeDialog, toggleDialog }) => {
    return (
      <div className="relative">
        
        {activeDialog === "profile" && (
          <div className="absolute right-0 mt-4 bg-white py-4 w-60 z-10 shadow-lg shadow-gray-400 rounded-lg">
            <div className="flex flex-col gap-2">
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
                <p className="text-[14px] text-black">
                  Invite Friends & get
                  <span className=""> $20</span>
                </p>
              </div>
              <hr />
              <ul className="w-full text-gray-600 flex flex-col text-[12px]">
                <li className="py-2 px-14 hover:bg-gray-200 cursor-pointer flex items-center">
                  <i className="fa-regular fa-user mr-2"></i> Profile
                </li>
                <li className="py-2 px-14 hover:bg-gray-200 cursor-pointer flex items-center">
                  <i className="fa-regular fa-id-card mr-2"></i> Account
                </li>
                <li className="py-2 px-14 hover:bg-gray-200 cursor-pointer flex items-center">
                  <i className="fa-solid fa-credit-card mr-2"></i> Billing
                </li>
                <li className="py-2 px-14 hover:bg-gray-200 cursor-pointer flex items-center">
                  <i className="fa-solid fa-cogs mr-2"></i> Advance Settings
                </li>
                <li className="py-2 px-14 hover:bg-gray-200 cursor-pointer flex items-center">
                  <i className="fa-solid fa-sign-out-alt mr-2"></i> Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ProfileDialog;
  