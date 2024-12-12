import { Check, X, Info, Star } from 'lucide-react'; 

const PricingPage = ({ features, plans }) => {
  return (
    <div className="container mx-auto py-12 px-4 flex justify-center">
      <div className="overflow-x-auto w-[80%]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 text-left font-bold"></th>
              {plans.map((plan, index) => (
                <th
                  key={index}
                  className={`relative px-4 py-16 text-center font-bold text-2xl ${plan.bgColor}`}
                >
                  <div className="text-lg font-bold mb-4">
                    {plan.name}
                  </div>
                  {plan.name === "Pro" && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-green-600 font-semibold px-4 py-2 rounded-md uppercase text-xs">
                      Most Popular
                    </div>
                  )}
                  <div className="relative flex items-center justify-center font-normal text-sm text-gray-600 mt-4">
                    <span className="absolute top-0 left-0 text-gray-400 font-bold">{plan.price[0]}</span>
                    <span className="text-black text-4xl font-bold px-4 lg:px-0">{plan.price.slice(1)}</span>
                    <span className="absolute bottom-0 left-8 top-9 text-sm text-gray-500">/month</span>
                  </div>
                </th>
              ))}
              <th className="p-4 text-left font-bold hidden md:table-cell">The Suit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-left">Client Gallery</td>
              {plans.map((plan, planIndex) => (
                <td key={planIndex} className={`p-4 text-center ${plan.bgColor}`}></td>
              ))}
              <td className="p-4 hidden md:table-cell"></td>
            </tr>

            {features.map((feature, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-4 text-left">{feature}</td>
                {plans.map((plan, planIndex) => (
                  <td key={planIndex} className={`p-4 text-center ${plan.bgColor}`}>
                    {(planIndex === 0 && index < 2) ||
                    (planIndex === 1 && index < 3) ||
                    (planIndex === 2 && index < 5) ||
                    (planIndex >= 3) ? (
                      <Check className="inline-block text-green-500" />
                    ) : null}
                  </td>
                ))}
                <td className="p-4 hidden md:table-cell">
                  {index === 0 ? (
                    <div className="flex items-center">
                      <X className="text-red-500 mr-2" />
                      <span>No Access</span>
                    </div>
                  ) : index === 1 ? (
                    <div className="flex items-center">
                      <Info className="text-blue-500 mr-2" />
                      <span>Limited Info</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-2" />
                      <span>Full Access</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            <tr className="border-b border-gray-200">
              <td className="p-4 text-left">STORE</td>
              {plans.map((plan, planIndex) => (
                <td key={planIndex} className={`p-4 text-center ${plan.bgColor}`}></td>
              ))}
              <td className="p-4 hidden md:table-cell"></td>
            </tr>

            {features.map((feature, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-4 text-left">{feature}</td>
                {plans.map((plan, planIndex) => (
                  <td key={planIndex} className={`p-4 text-center ${plan.bgColor}`}>
                    {(planIndex === 0 && index < 2) ||
                    (planIndex === 1 && index < 3) ||
                    (planIndex === 2 && index < 5) ||
                    (planIndex >= 3) ? (
                      <Check className="inline-block text-green-500" />
                    ) : null}
                  </td>
                ))}
                <td className="p-4 hidden md:table-cell">
                  <div className="flex items-center">
                    {index === 0 ? (
                      <Star className="text-yellow-500 mr-2" />
                    ) : (
                      <Check className="text-green-500 mr-2" />
                    )}
                    <span>{index === 0 ? "Premium Feature" : "Standard Feature"}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingPage;
