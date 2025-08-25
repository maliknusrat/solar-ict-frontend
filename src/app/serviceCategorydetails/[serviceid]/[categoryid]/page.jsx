"use client";

import React, { useState, useEffect } from "react";
import serviceData from "../../../../../public/service.json";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  const { serviceid, categoryid } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const service = serviceData.find((s) => s.id === Number(serviceid));
    if (!service) {
      setCategory(null);
      return;
    }
    const foundCategory = service.categories?.find(
      (c) => c.category_id === Number(categoryid)
    );
    setCategory(foundCategory || null);
  }, [serviceid, categoryid]);

  return (
    <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#DDE4FF_100%)] text-[#03091D] w-full p-20">
      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={category?.category_image || "/Group 1000003583.png"}
          alt={category?.category_name || "Category Image"}
          width={800}
          height={400}
          className="w-full rounded-lg mx-auto mb-10"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {category?.blog_content?.introduction?.map((intro, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{intro.heading}</h2>
              <p className="text-gray-600 text-justify">{intro.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-5"
        >
          <h2 className="text-3xl font-bold mb-6">
            Key Features of {category?.category_name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {category?.blog_content?.sections?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {feature.heading}
                </h3>
                <p className="text-gray-600 text-justify">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold mb-2">Summary</h2>
          <p className="text-gray-600 text-justify">
            {category?.blog_content?.summary}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
