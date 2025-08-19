"use client";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..",
    image: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20  text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Some Of Our Portfolios
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition relative"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-sky-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-gray-500 hover:text-sky-600 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <button className="btn border-none px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-medium shadow-lg hover:opacity-90 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
