export const FormComponent = () => {
  return (
    <form className="w-full flex flex-col mt-8">
      <div className="w-full flex flex-col md:flex-row">
        <input 
          placeholder="Your name" 
          className="rounded-md w-full md:w-1/3 my-3 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] mr-5 py-2 px-3 focus:outline-none" 
          type="text" 
        />
        <input 
          placeholder="Your email" 
          className="rounded-md w-full md:w-1/3 my-3 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] mr-5 py-2 px-3 focus:outline-none" 
          type="text" 
        />
        <input 
          placeholder="Your phone" 
          className="rounded-md w-full md:w-1/3 my-3 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] mr-5 py-2 px-3 focus:outline-none" 
          type="text" 
        />
      </div>
      <div className="w-full flex flex-col md:flex-row mt-5">
        <input 
          placeholder="Date" 
          className="rounded-md w-full md:w-1/3 my-3 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] mr-5 py-2 px-3 focus:outline-none" 
          type="text" 
        />
        <input 
          placeholder="Time" 
          className="rounded-md w-full md:w-1/3 my-3 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] mr-5 py-2 px-3 focus:outline-none" 
          type="text" 
        />
        <input 
          placeholder="# of people" 
          className="rounded-md w-full md:w-1/3 my-3 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] mr-5 py-2 px-3 focus:outline-none" 
          type="text" 
        />
      </div>
      <textarea 
        placeholder="Message" 
        className="rounded-md w-full bg-transparent text-white mt-5 border-[1px] border-gray-400 focus:border-[#cda45e] py-2 px-3 focus:outline-none" 
        name="message" 
        id="" 
        cols="30" 
        rows="10"
      ></textarea>
      <div className="w-full flex flex-row items-center my-2 justify-center mt-10">
        <button 
          className="text-white rounded-full bg-black w-fit py-2 px-6 transform transition-transform duration-200 ease-in-out hover:bg-[#cda45e] hover:shadow-lg hover:transition-colors hover:duration-500 active:scale-95"
        >
          Book a table
        </button>
      </div>
    </form>
  );
};
