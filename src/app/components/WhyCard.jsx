export const WhyCard = ({ count, header, paragraph }) => {
  return (
    <div className="w-full my-6 xl:w-1/3 mr-10 h-5342 xl:h-fit bg-gray-700 hover:bg-[#cda45e] py-10 px-10 text-white rounded-lg transition-transform transform hover:scale-105 duration-600 ease-in-out">
      <span>{count}</span>
      <h1>{header}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
