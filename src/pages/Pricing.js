import Table from '../components/Table';

const fakeData = {
  features: [
    "Unlimited projects",
    "API access",
    "24/7 support",
  ],
  plans: [
    { name: "Free", price: "$0", bgColor: "" },
    { name: "Basic", price: "$8", bgColor: "" },
    { name: "Plus", price: "$12", bgColor: "" },
    { name: "Pro", price: "$18", bgColor: "bg-green-50" },
    { name: "Ultimate", price: "$40", bgColor: "" },
  ]
};

const Pricing=()=> {
  return (
    <div>
      <Table features={fakeData.features} plans={fakeData.plans} />
    </div>
  );
}

export default Pricing;
