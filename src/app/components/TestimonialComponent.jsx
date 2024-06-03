"use client";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
export const TestimonialComponent = ({testimony, testifier, description}) => {
  return (
    <div className="w-full xl:w-1/3 flex flex-col mr-5">
    <div className="w-[95%] min-h-[200px] bg-white p-4 rounded-md">
      <RiDoubleQuotesL size={26} className="inline mr-3"></RiDoubleQuotesL>
      <span className="italic">
       {testimony}
      </span>
      <RiDoubleQuotesR size={26} className="inline ml-3"></RiDoubleQuotesR>
    </div>
    <div className="relative -top-10 left-8">
        <div className="rounded-full w-28 h-28 bg-white flex flex-row items-center justify-center">
            <div className="rounded-full w-24 h-24 bg-gray-700">

            </div>
        </div>
        <div className="w-fit text-center">
        <span className="text-white text-center block w-fit">
            John Larson
        </span>
        <span className="text-gray-700 text-center">
            Entrepreneur
        </span>
        </div>
       
    </div>
    </div>
  );
};
