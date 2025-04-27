import { ICONS_LIST } from "@/utils/icons";
import React, { ReactElement } from "react";
interface LoginCardProps {
  icon: string;
  className?: string;
  fill?: string;
  stroke?: string;
  pathClass?: string;
  onClick?: () => void;
}

const Icons: React.FC<LoginCardProps> = ({ icon, className }) => {
  const addClassName = (
    icon: ReactElement<SVGElement>
  ): ReactElement<SVGElement> => {
    return React.cloneElement(icon, {
      className: (className || "") + " custom-class",
    });
  };
  const iconsNew = Object.fromEntries(
    Object.entries(ICONS_LIST).map(([key, icon]) => [key, addClassName(icon)])
  );
  return iconsNew[icon] || null;
};

export default Icons;
