import Input from "../common/form/Input";
import ReactTable from "../common/table/ReactTable";
import personImage from "../../assets/images/profile.png";
import StatusButton from "../common/statusButton/StatusButton";
import CareerDetails from "./careerDetails/CareerDetails";
import { NavLink } from "react-router-dom";

const CareerComponent = () => {
  const data = [
    { id: 1, name: "Alice", status: "Online", occupation: "Engineer" },
    { id: 2, name: "Bob", status: "Offline", occupation: "Designer" },
    { id: 3, name: "Charlie", status: "Online", occupation: "Manager" },
    { id: 4, name: "Daisy", status: "Offline", occupation: "Developer" },
    { id: 5, name: "Eve", status: "Online", occupation: "Analyst" },
    { id: 6, name: "Eve", status: "Online", occupation: "Analyst" },
    { id: 7, name: "Eve", status: "Online", occupation: "Analyst" },
    { id: 8, name: "Eve", status: "Online", occupation: "Analyst" },
    { id: 9, name: "Eve", status: "Online", occupation: "Analyst" },
    { id: 10, name: "Eve", status: "Online", occupation: "Analyst" },

  ];

  const columns = [
    {
      header: "Persons",
      accessorKey: "id",
      cell: () => (
        <>
        <div className="hidden lg:flex flex-row items-center gap-2 md:gap-3 min-w-max">
          <img src={personImage} alt="person" height={45} width={45} className="w-[30px] md:w-[45px] h-[30px]  md:h-[45px]" />
          <h4 className="text-black text-opacity-50 font-medium text-sm md:text-base leading-5 group-hover:text-opacity-100">
            Sahil Nariya
          </h4>
        </div>
        <NavLink to="/career/career-details" className="flex lg:hidden flex-row items-center gap-2 md:gap-3 min-w-max">
        <img src={personImage} alt="person" height={45} width={45} className="w-[30px] md:w-[45px] h-[30px]  md:h-[45px]" />
        <h4 className="text-black text-opacity-50 font-medium text-sm md:text-base leading-5 group-hover:text-opacity-100">
          Sahil Nariya
        </h4>
          </NavLink>
          </>
      ),
    },
    {
      header: "Date",
      accessorKey: "name",
      cell: () => (
        <p className="text-sm md:text-base leading-5 font-medium text-black text-opacity-50 group-hover:text-opacity-60 min-w-max">
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
        <p className="text-sm md:text-base leading-5 font-medium text-black text-opacity-50 group-hover:text-opacity-60 min-w-max">
          + $150.29
        </p>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col xl:flex-row gap-7">
      <div className="w-full xl:w-1/2 h-full  ">
        <div className="border-0 md:border-[0.5px] border-light-gray-400 rounded-none md:rounded-[10px]   shadow-profileFormShadow overflow-hidden  h-full  min-h-[calc(100vh-194px)] lg:max-h-[calc(100vh-205px)] lg:min-h-[calc(100vh-205px)]">
          <div className="w-full px-4 py-3 md:py-5">
            <div className="flex flex-row gap-3 py-2 px-4 items-center bg-white border border-gray-400 rounded-3xl ">
              <Input
                className="bg-transparent border-none !p-0 text-gray-500 text-sm md:text-base leading-5 md:leading-7 font-normal"
                placeholder="Search or start a new chat"
              />
            </div>
          </div>
          <div className="h-full pb-5 md:pb-0 max-h-[calc(100vh-220px)] min-h-[calc(100vh-220px)] md:max-h-[calc(100vh-280px)] md:min-h-[calc(100vh-280px)] overflow-scroll table__scroll">
            <ReactTable data={data} columns={columns} />
          </div>
        </div>
      </div>
      <div className="w-0 lg:w-full xl:w-1/2 h-full hidden lg:block overflow-hidden">
        <CareerDetails />
      </div>
    </div>
  );
};

export default CareerComponent;
