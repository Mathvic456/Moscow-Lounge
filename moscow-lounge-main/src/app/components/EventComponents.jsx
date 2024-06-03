export const EventComponent = () => {
  return (
    <section className="w-full h-fit xl:h-[350px] flex flex-col xl:flex-row">
<div className="w-full xl:w-1/2 h-[350px] xl:h-full bg-gray-600 mr-10 rounded-md"></div>
      <section className="w-full xl:w-1/2 text-white flex flex-col h-full">
        <h1 className="text-2xl text-[#cda45e]">Private Parties</h1>
        <span className="border-b-2 w-fit pb-1 my-4 border-[#cda45e]">$99</span>
        <p className="italic my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li className="my-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li className="my-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li className="my-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </ul>
        <p className="my-4"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    </section>
  );
};
