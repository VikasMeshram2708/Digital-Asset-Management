import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-24">
      {/* <h2 className="text-xl md:text-3xl font-bold text-center">Processing...</h2> */}
      <p className="loader"></p>
    </div>
  );
}
