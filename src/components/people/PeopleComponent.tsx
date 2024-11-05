import { useEffect, useState } from "react";
import PeopleDetails from "./PeopleDetails/PeopleDetails";
import Input from "../common/form/Input";
import ReactTable from "../common/table/ReactTable";
import personImage from "../../assets/images/profile.png";
import StatusButton from "../common/statusButton/StatusButton";
import filter from "../../assets/images/Vector.png";
import search from "../../assets/images/Combined Shape.png";
import Filter from "./filter/Filter";
import { fetchPeopleListData } from "../../features/people/fethcPeopleListSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export type filterValuesType = {
  age: string;
  gender: string;
  area: string;
  college: string;
};

const PeopleComponent = () => {

  const { responseData } = useAppSelector((state) => state.fetchPeopleListDataReducer);

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const page = 1;
  const [selectedUser, setSelectedUser] = useState<any>();
  const [searchText, setSearchText] = useState<string>("");
  const [filterValues, setFilterValues] = useState<filterValuesType>({
    age: "",
    gender: "",
    area: "",
    college: "",
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserList();
  }, [searchText, filterValues]);

  useEffect(() => {
    setSelectedUser(responseData.people[0]);
  }, [responseData.people]);

  const getUserList = async () => {
    await dispatch(fetchPeopleListData({ searchText, page, limit: 10, age: filterValues.age, gender: filterValues.gender, area: filterValues.area, collage: filterValues.college }));
  };

  const columns = [
    {
      header: "Persons",
      accessorKey: "id",
      cell: ({ row }: any) => (
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={() => setSelectedUser(row.original)}>
          <img src={personImage} alt="person" height={45} width={45} />
          <h4 className="text-black text-opacity-50 font-medium text-base leading-5 group-hover:text-opacity-100">
            {row.original.first_name} {row.original.last_name}
          </h4>
        </div>
      ),
    },
    {
      header: "Date",
      accessorKey: "date",
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
          status={row.original.is_active}
          onClick={() => console.log(`Status of ${row.original.first_name} ${row.original.last_name} clicked!`)}
        />
      ),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: ({ row }: any) => (
        <p className="text-base leading-5 font-medium text-black text-opacity-50 group-hover:text-opacity-60">
          {row.original.amount}
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
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
          <ReactTable data={responseData.people || []} columns={columns} />
          {isFilterOpen && (
            <div className="absolute inset-0 bg-white bg-opacity-70 mt-[75px] pt-2.5 pl-5 rounded-[10px] ">
              <div
                className=" inset-0 left-0 "
                onClick={() => setIsFilterOpen(false)}
              ></div>
              <Filter filterValues={filterValues} setFilterValues={setFilterValues} setIsFilterOpen={setIsFilterOpen} />
            </div>
          )}
        </div>
      </div>
      <div className="w-1/2 h-auto">
        {selectedUser && <PeopleDetails data={selectedUser} />}
      </div>
    </div>
  );
};

export default PeopleComponent;
