import React from 'react';
import meetImage from "../../../assets/images/MEET_PEOPLES-removebg-preview 1.png";
import { NavLink } from 'react-router-dom';

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  src = meetImage,
  alt = "logo",
  width = 144,
  height = 144,
}) => {
  return (
    <NavLink to={"/"} className="w-full h-max">
      <img src={src} alt={alt} width={width} height={height} />
    </NavLink>
  );
};

export default Logo;
