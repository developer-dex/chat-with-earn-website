import Input from "../common/form/Input";
import ReactTable from "../common/table/ReactTable";
import personImage from "../../assets/images/profile.png";
import StatusButton from "../common/statusButton/StatusButton";
import CareerDetails from "./careerDetails/CareerDetails";

const CareerComponent = () => {

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
        <div className="border-[0.5px] border-light-gray-400 rounded-[10px]  shadow-profileFormShadow">
          <div className="w-full px-4 pt-5">
            <div className="flex flex-row gap-3 py-2 px-4 items-center bg-white border border-gray-400 rounded-3xl ">
              <Input
                className="bg-transparent border-none !p-0 text-gray-500 text-base leading-7 font-normal"
                placeholder="Search or start a new chat"
              />
            </div>
          </div>

          <ReactTable data={data} columns={columns} />
        </div>
      </div>
      <div className="w-1/2 h-auto">
        <CareerDetails />
      </div>
    </div>
  );
};

export default CareerComponent;
