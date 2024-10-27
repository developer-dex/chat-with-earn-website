import React from "react";

interface ContentCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
  imageWidth?: number;
}
const SliderContentCard:React.FC<ContentCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "slideImage",
  imageHeight = 578,
  imageWidth = 518,
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-12 !font-syne">
      <h2 className="font-semibold text-[32px] leading-9 text-light-gray-100 px-24">{title}</h2>
      <p className="font-medium text-base leading-6 text-light-gray-100 text-center px-24  ">{description}</p>
      <div className="max-h-[578px] h-full max-w-[518px] w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          height={imageHeight}
                  width={imageWidth}
                  className="max-h-[578px] h-full max-w-[518px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default SliderContentCard;
