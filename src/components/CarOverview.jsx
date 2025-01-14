import "../styles/CarOverview.css";

const CarOverview = () => {
  const carDetails = {
    model: "Mahindra Thar",
    year: 2021,
    mileage: "20,000 km",
    price: "₹15,00,000",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8 mx-auto max-w-3xl">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Car Overview</h3>
      <ul className="space-y-2">
        {Object.entries(carDetails).map(([key, value], index) => (
          <li
            key={index}
            className="flex justify-between text-gray-600 font-medium hover:bg-gray-100 transition duration-200"
          >
            <span className="capitalize">{key}:</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarOverview;
