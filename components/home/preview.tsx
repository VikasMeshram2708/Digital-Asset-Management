import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    label: "Want to upload asset?",
    description: "Click on add asset to begin the process.",
    img: "https://ik.imagekit.io/leywq8vud/DAM%20(SEO)/6569140.gif?updatedAt=1740747640460",
  },
  {
    id: 2,
    label: "Fill in Details",
    description: "Provide all necessary details for your asset.",
    img: "https://ik.imagekit.io/leywq8vud/DAM%20(SEO)/original-7e974ceca651feb6123f2ac24cf57f42.gif?updatedAt=1740747672874",
  },
  {
    id: 3,
    label: "Completion",
    description:
      "Your asset will be available immediately after a successful upload.",
    img: "https://ik.imagekit.io/leywq8vud/DAM%20(SEO)/happy.gif?updatedAt=1740747862750",
  },
];

export const Preview = () => {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-6 py-8 ">
        <h2 className="text-3xl font-bold text-center pb-5">
          How {"It's"} Done
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          A simple, step-by-step guide to successfully uploading your asset.
        </p>
        <div className="flex flex-col items-center space-y-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full shadow-md">
                  {step.id}
                </div>
                <span className="text-xl font-semibold">{step.label}</span>
              </div>
              {step.img && (
                <div className="w-full max-w-sm rounded-lg overflow-hidden">
                  <Image
                    src={step.img}
                    alt={step.label}
                    width={400}
                    height={250}
                    className="w-full h-auto"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <p className="text-gray-700 max-w-md">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="w-1 h-12 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
