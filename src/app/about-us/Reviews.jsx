"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Mr. Israr Ahmad",
    text: "Host provides solid value in VPS hosting with great prices that provide the best premium support and excellent up-time in the industry.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Mr. Manoj Pillai",
    text: "Being in education we need an interactive and user friendly online platform for admissions and registrations. Host offered us the complete package.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Mr. Yogesh Gosavi",
    text: "My company has had a great long standing relationship with Host. Their response time and customer support has been a boon.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Mr. Yogesh Gosavi",
    text: "My company has had a great long standing relationship with Host. Their response time and customer support has been a boon.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Mr. Yogesh Gosavi",
    text: "My company has had a great long standing relationship with Host. Their response time and customer support has been a boon.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Reviews() {
  return (
    <section className="py-16  text-center text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What our clients say
        </h2>
        <p className="text-gray-300 mb-12">
          Your trusted hosting partner since 2005. Here's what some of our
          customers say about HOST.CO.IN
        </p>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <Image
                  src={review.image}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="rounded-full border-1 border-gray-700 mb-4"
                />

                {/* Review Card with gradient border */}
                <div className="relative rounded-2xl p-[2px] border border-slate-50">
                  <div className="text-center rounded-2xl p-6 h-[150px]">
                    <p className="text-gray-200 text-sm">{review.text}</p>
                  </div>
                </div>

                {/* Name */}
                <p className="mt-4 font-medium">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
