import React from "react";

export default function Newsletter() {
  return (
    <div className="max-h-[220px] my-auto text-white rounded-lg bg-white/10 w-full">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between max-w-6xl px-1 md:px-0 mx-auto py-10">
        <div className="w-full md:w-[500px] space-y-2">
          <p className="text-3xl md:text-3xl font-bold">
           Subscribe To Our Newsletter!
          </p>
          
          <p className="text-base font-extralight">
            Get Regularly News and Exclusive Offers
          </p>
        </div>

        <div>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your mail"
              className="w-full pr-40 border border-[#FFFFFF] bg-[#FFFFFF] py-2 px-4 rounded-full"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-1 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-extralight text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
