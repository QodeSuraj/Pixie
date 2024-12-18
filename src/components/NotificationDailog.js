const NotificationDialog = ({ activeDialog, handleNotification, activeNotifaction, toggleDialog }) => {
    return (
      <div className="relative group">
      
      <div className="absolute mt-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 shadow-lg z-20 ">
                Notification
                <div className="absolute w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800 left-1/2 transform -translate-x-/2 -top-3"></div>
              </div>
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
    );
  };
  
  export default NotificationDialog;
  