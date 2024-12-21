import React from "react";
import { FaCrown } from "react-icons/fa";

const Table = ({ data }) => {
  if (!data || !data.headers || !data.features) {
    return <div>No pricing data available</div>;
  }

  return (
    <div className="w-full">
      {/* Mobile view */}
      <div className="sm:hidden">
        {data.headers.map((header, headerIndex) => (
          <div
            key={headerIndex}
            className="mb-4 border rounded-lg overflow-hidden shadow-sm"
          >
            <div
              className={`p-4 ${
                headerIndex === 2 ? "bg-green-50" : ""
              } text-center`}
            >
              <h3 className="text-lg font-semibold">{header.title}</h3>
              <div className="mt-2 text-3xl font-bold">
                {header.title === "The Suit" ? (
                  <span className="flex items-center justify-center">
                    ${header.price}
                    <FaCrown className="text-yellow-500 ml-2 text-xl" />
                  </span>
                ) : (
                  < >
                    <span className="text-lg align-top">$</span>
                   <span className="text-6xl font-medium">
                   {header.price}
                    </span> 
                    <span className="text-sm text-gray align-bottom">/mo</span>

                  </>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{header.billing}</p>
            </div>
            {data.features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-t">
                <h4 className="font-semibold p-4 bg-gray-50 text-sm">
                  {category.category}
                </h4>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-4 border-t">
                    <div className="flex justify-between items-center">
                      <h5 className="font-medium text-sm">{item.name}</h5>
                      <span className="text-sm font-semibold">
                        {item.values[headerIndex].amount}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.values[headerIndex].description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
            <div className="p-4 border-t">
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-green-600 transition duration-300">
                START FREE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop and Tablet view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-gray-700">
              <th className="p-4 text-left"></th>
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  className={`p-4 text-center ${
                    index === 2 ? "bg-green-50" : ""
                  } ${index === data.headers.length - 1 ? "hidden lg:table-cell" : ""}`}
                >
                  <div className="flex flex-col gap-y-2">
                    <span
                      className={`text-xs ${
                        index === 2 ? "text-green-500 font-semibold" : ""
                      }`}
                    >
                      {index === 2 ? "Most Popular" : ""}
                    </span>
                    <span className="text-lg font-semibold">
                      {header.title}
                      {header.title === "The Suit" && (
                        <FaCrown className="text-yellow-500 ml-2 inline-block" />
                      )}
                    </span>
                    <div className="text-3xl  mt-2">
                      <span className="text-lg align-top">$</span>
                      <span className="text-[56px]">  {header.price} </span>
                      <span className="text-xs align-bottom">/mo</span>

                    </div>
                    <span className="text-sm text-gray-600">{header.billing}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.features.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <tr className="bg-gray-50">
                  <td
                    colSpan={data.headers.length + 1}
                    className="p-4 font-semibold text-sm"
                  >
                    {category.category}
                  </td>
                </tr>
                {category.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="border-b">
                    <td className="p-4 font-medium text-sm">{item.name}</td>
                    {item.values.map((value, valueIndex) => (
                      <td key={valueIndex} className={`p-4 text-center ${valueIndex === item.values.length - 1 ? "hidden lg:table-cell" : ""}`}>
                        <div className="flex flex-col gap-y-2">
                          <span className="font-semibold h-6 overflow-hidden">{value.amount}</span>
                          <span className="text-xs text-gray-500 w-full">
                            {value.description}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr>
              <td className="p-2"></td>
              {data.headers.map((_, index) => (
                <td key={index} className={`p-2 ${index === data.headers.length - 1 ? "hidden lg:table-cell" : ""}`}>
                  <button className="w-full bg-green-400 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-green-600 transition duration-300">
                    START FREE
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
