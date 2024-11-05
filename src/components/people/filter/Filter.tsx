import CustomButton from "../../common/form/Button";
import Label from "../../common/form/Label";
import SelectBox from "../../common/form/SelectBox";
import { filterValuesType } from "../PeopleComponent";

interface IProps {
  filterValues: filterValuesType;
  setFilterValues: React.Dispatch<React.SetStateAction<filterValuesType>>;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter = ({ filterValues, setFilterValues, setIsFilterOpen }: IProps) => {

  const ageOptions = Array.from({ length: 41 }, (_, i) => ({
    value: (10 + i).toString(),
    label: (10 + i).toString(),
  }));

  const otherOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(filterValues);
  };

  const handleSelectChange = (field: string, value: any) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div className="border border-gray-400 bg-white bg-opacity-100 py-5 px-4 h-max max-w-[450px] w-full rounded-[10px]">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-col gap-3 items-start">
              <div className="w-full">
                <Label htmlFor="age" text="Age" />
                <SelectBox
                  options={ageOptions}
                  onChange={(value) => handleSelectChange("age", value)}
                  placeholder="Select age"
                  className="mt-1.5 !text-gray-300"
                  defaultValue={filterValues.age}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="gender" text="Gender" />
                <SelectBox
                  options={otherOptions}
                  onChange={(value) => handleSelectChange("gender", value)}
                  placeholder="Select gender"
                  className="mt-1.5 !text-gray-300"
                  defaultValue={filterValues.gender}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="area" text="Area" />
                <SelectBox
                  options={otherOptions}
                  onChange={(value) => handleSelectChange("area", value)}
                  placeholder="Select area"
                  className="mt-1.5 !text-gray-300"
                  defaultValue={filterValues.area}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="college" text="College" />
                <SelectBox
                  options={otherOptions}
                  onChange={(value) => handleSelectChange("college", value)}
                  placeholder="Select college"
                  className="mt-1.5 !text-gray-300"
                  defaultValue={filterValues.college}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full justify-between mt-10 gap-20">
            <CustomButton type="submit" className="button__contained w-1/2">
              Apply
            </CustomButton>
            <CustomButton
              onClick={() => setIsFilterOpen(false)}
              type="button"
              className="button__outline w-1/2"
            >
              Cancel
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
