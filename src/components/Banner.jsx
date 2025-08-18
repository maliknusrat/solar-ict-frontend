import Image from "next/image";

export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto min-h-screen text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Transforming Technology <br />
            Solutions for a Digital Future
          </h1>
          <p className="mt-6 text-lg font-light text-gray-300 max-w-lg">
            Delivering Sustainable Positive Impact through Expertly Crafted
            Infrastructure & Software Solutions. Empowering Your Business with
            Design, Development & Operations.
          </p>
          <div className="flex items-center justify-between">
            <button className="mt-8 px-10 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-extralight">
              Contact Us
            </button>
            <div className="size-10 shadow-2xl rounded-full bg-[linear-gradient(225deg,#D4088C_14.64%,#CC088C_17.47%,#85078A_47.17%,#590689_68.39%,#480689_79%)] "></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Banner 1.png"
            alt="Tech Illustration"
            width={400}
            height={400}
            className="w-[400px] h-auto"
          />
        </div>
      </section>
    </div>
  );
}
