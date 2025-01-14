import "../styles/View360Button.css";

const View360Button = () => {
  const handleView360 = () => {
    alert("360° View is under development!");
  };

  return (
    <div className="my-6">
      <button
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        onClick={handleView360}
      >
        View 360°
      </button>
    </div>
  );
};

export default View360Button;
