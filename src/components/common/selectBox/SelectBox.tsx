import React, { useState } from "react";

type SelectBoxProps = {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  onBlur?: (value: string) => string | void;
  className?: string;
};

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  onChange,
  placeholder,
  defaultValue,
  onBlur,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFocus = () => setIsOpen(true);

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsOpen(false);

    // Trigger the onBlur callback and set the error state if an error message is returned
    if (onBlur) {
      const errorMessage = onBlur(e.target.value);
      setError(errorMessage || null);
    }
  };
  return (
    <div className="relative">
      <select
        className={`block w-full py-2.5 px-4  bg-white border border-light-gray-300 rounded-md appearance-none text-gray-400 focus:outline-none ${className}`}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
      >
        {placeholder && (
          <option value="Male" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <i
          className={`fa-solid ${
            isOpen ? "fa-angle-up" : "fa-angle-down"
          } text-black pr-2.5`}
        ></i>
      </div>
    </div>
  );
};

export default SelectBox;
