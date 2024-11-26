import React from "react";
import AddGuitar from "../components/AddGuitar";

const page = () => {
  return (
    <div className="space-y-4 mx-2">
      <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
        Add Guitar
      </h1>
      <AddGuitar />
    </div>
  );
};

export default page;
