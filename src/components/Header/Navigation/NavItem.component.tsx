import { useHeaderNav } from "@/contexts/HeaderNav.context";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface NavItemProps extends PropsWithChildren {
  to?: string;
  onClick?: () => void;
}

function NavItem({ children, to = "", onClick = () => {} }: NavItemProps) {
  const { closeHeaderNav } = useHeaderNav();
  const Element = to.length > 0 ? Link : "div";

  const onClickHandler = () => {
    closeHeaderNav();
    onClick();
  };

  return (
    <Element onClick={onClickHandler} className="py-2 px-4 cursor-pointer" to={to}>
      {children}
    </Element>
  );
}

export default NavItem;
