"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const portfolios = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..",
    image: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

export default function Portfolio() {
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Some Of Our Portfolios
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Portfolio Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {portfolios.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative cursor-pointer"
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
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <button className="btn border-none px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-medium shadow-lg hover:opacity-90 transition">
            View More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
