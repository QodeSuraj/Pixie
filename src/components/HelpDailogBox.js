const HelpDialog = ({ activeDialog, toggleDialog }) => {
  return (
    <>
      <div className="relative group">
        <div className="absolute mt-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 shadow-lg z-20 ">
          Help
          <div className="absolute w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800 left-1/2 transform -translate-x-/2 -top-3"></div>
        </div>

        {activeDialog === "help" && (
          <div className="absolute -left-44 right-12 mt-6 bg-white shadow-lg  py-4 w-[250px] sm:w-[290px] z-10">
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
                  <p className="text-[10px] text-gray-600">loremkdgfkjdsgf</p>
                </div>
              </div>
              <div className="hover:bg-gray-200 ">
                <div className="flex flex-col mx-4 py-2">
                  <h3 className=" text-[13px] ">
                    Getting Started with Client Gallery
                  </h3>
                  <p className="text-[10px] text-gray-600">loremkdgfkjdsgf</p>
                </div>
              </div>
              <div className="hover:bg-gray-200 ">
                <div className="flex flex-col mx-4 py-2">
                  <h3 className=" text-[13px]">
                    Getting Started with Client Gallery
                  </h3>
                  <p className="text-[10px] text-gray-600">loremkdgfkjdsgf</p>
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
    </>
  );
};

export default HelpDialog;
