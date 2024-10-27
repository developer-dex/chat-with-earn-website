import React from 'react';

interface LabelProps {
  text: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ 
  text, 
  htmlFor, 
  className = '', 
}) => {
  return (
    <label htmlFor={htmlFor} className={`font-normal text-base leading-6 text-black-100 font-poppins ${className}`}>
      {text}
    </label>
  );
};

export default Label;
