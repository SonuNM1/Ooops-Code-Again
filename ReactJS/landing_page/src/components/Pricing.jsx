import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 px-6 lg:px-12" id="pricing">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold my-9 tracking-wide">
        Choose Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Pricing Plan
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 lg:w-1/4 bg-neutral-900 p-6 border border-neutral-700 rounded-xl shadow-lg hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <p className="text-3xl font-semibold mb-4 text-white">
                {option.title}
                {option.title === "Advanced Portfolio" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-lg ml-2">
                    <br />
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-4 text-4xl font-bold text-orange-500">
                {option.price}
              </p>
            </div>

            <ul className="text-md text-neutral-300 space-y-3">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="text-green-400 text-xs mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <a
                href="https://wa.me/917903648044?text=Hello!%20I%20would%20like%20a%20free%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center text-center w-full h-10 p-4 tracking-tight text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-red-800 hover:opacity-90 rounded-lg transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
