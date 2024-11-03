import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import PeopleComponent from "../../components/people/PeopleComponent";

const PeoplePage = () => {
  return (
    <PublicLayout>
      <h1 className="bg-gradient-text text-transparent bg-clip-text text-3xl mt-2.5 font-semibold leading-[48px]">
        People
      </h1>
      <div className="py-5 h-auto">
        <PeopleComponent/>
      </div>
    </PublicLayout>
  );
};

export default PeoplePage;
