import React from "react";
import Filter from "@/components/Filter";
import Feed from "@/components/Feed";

const SearchPage = () => {
  return (
    <div className="container mx-auto px-3 pb-16 pt-4">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {/* Left side: Title */}
        <div className="mb-8 lg:mb-0">
          <Filter />
        </div>
        {/* Gallery Section */}
        <Feed />
      </div>
    </div>
  );
};

export default SearchPage;
