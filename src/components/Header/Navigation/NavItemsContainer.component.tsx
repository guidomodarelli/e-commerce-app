import { ReactElement } from "react";

interface NavLinksContainerProps {
  items: ReactElement[];
}

const NavItemsContainer = ({ items }: NavLinksContainerProps) => {
  return (
    <ul className="flex items-center justify-end flex-col gap-2 md:flex-row">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default NavItemsContainer;
