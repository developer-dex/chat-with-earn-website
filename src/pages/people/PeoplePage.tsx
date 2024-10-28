import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import People from "../../components/people/People";

const PeoplePage = () => {
  return (
    <PublicLayout>
      <h1 className="bg-gradient-text text-transparent bg-clip-text text-4xl mt-5 font-semibold leading-[48px]">
        People
      </h1>
      <div className="py-10 h-auto">
        <People/>
      </div>
    </PublicLayout>
  );
};

export default PeoplePage;
