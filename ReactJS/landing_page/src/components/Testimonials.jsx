import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 px-6 lg:px-12" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold my-10 lg:my-20 tracking-wide">
        What Our <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Clients Say</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 bg-neutral-900 p-6 border border-neutral-700 rounded-xl shadow-lg hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
          >
            <p className="text-neutral-300 text-lg font-light italic">
              "{testimonial.text}"
            </p>

            <div className="flex items-center mt-6">
              <img
                className="w-14 h-14 rounded-full border-2 border-orange-500 shadow-lg"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div className="ml-4">
                <h6 className="text-lg font-semibold text-white">{testimonial.user}</h6>
                <span className="text-sm text-orange-500 italic">{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
