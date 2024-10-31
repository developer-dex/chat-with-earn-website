import React, { useState } from "react";
import PeopleDetails from "./PeopleDetails/PeopleDetails";
import Input from "../common/input/Input";
import ReactTable from "../common/table/ReactTable";
import personImage from "../../assets/images/profile.png";
import StatusButton from "../common/statusButton/StatusButton";
import filter from "../../assets/images/Vector.png";
import search from "../../assets/images/Combined Shape.png";
import Filter from "./filter/Filter";

const People = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const data = [
    { id: 1, name: "Alice", status: "Online", occupation: "Engineer" },
    { id: 2, name: "Bob", status: "Offline", occupation: "Designer" },
    { id: 3, name: "Charlie", status: "Online", occupation: "Manager" },
    { id: 4, name: "Daisy", status: "Offline", occupation: "Developer" },
    { id: 5, name: "Eve", status: "Online", occupation: "Analyst" },
  ];
  const columns = [
    {
      header: "Persons",
      accessorKey: "id",
      cell: () => (
        <div className="flex flex-row items-center gap-3">
          <img src={personImage} alt="person" height={45} width={45} />
          <h4 className="text-black text-opacity-50 font-medium text-base leading-5 group-hover:text-opacity-100">
            Sahil Nariya
          </h4>
        </div>
      ),
    },
    {
      header: "Date",
      accessorKey: "name",
      cell: () => (
        <p className="text-base leading-5 font-medium text-black text-opacity-50 group-hover:text-opacity-60">
          Mar 12,2024
        </p>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }: any) => (
        <StatusButton
          status={row.original.status}
          onClick={() => console.log(`Status of ${row.original.name} clicked!`)}
        />
      ),
    },
    {
      header: "Amout",
      accessorKey: "occupation",
      cell: () => (
        <p className="text-base leading-5 font-medium text-black text-opacity-50 group-hover:text-opacity-60">
          + $150.29
        </p>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-row gap-7">
      <div className="w-1/2 h-auto">
        <div className="border-[0.5px] border-light-gray-400 rounded-[10px]  shadow-profileFormShadow relative">
          <div className="w-full px-[26px] pt-5 flex flex-row items-center gap-11">
            <div
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="cursor-pointer"
            >
              <img src={filter} alt="filter" width={20} height={18} />
            </div>
            <div className="flex flex-row gap-3 py-2 px-5 items-center bg-white border border-gray-400 rounded-3xl w-full">
              <img src={search} alt="filter" width={20} height={20} />
              <Input
                className="bg-transparent border-none !p-0 text-gray-500 text-base leading-7 font-normal"
                placeholder="Search or start a new chat"
              />
            </div>
          </div>

          <ReactTable data={data} columns={columns} />
          {isFilterOpen && (
            <div className="absolute inset-0 bg-white bg-opacity-70 mt-[75px] pt-2.5 pl-5 rounded-[10px] ">
              <div
                className=" inset-0 left-0 "
                onClick={() => setIsFilterOpen(false)}
              ></div>
              <Filter setIsFilterOpen={setIsFilterOpen} />
            </div>
          )}
        </div>
      </div>
      <div className="w-1/2 h-auto">
        <PeopleDetails />
      </div>
    </div>
  );
};

export default People;
