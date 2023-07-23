import { HeaderProps } from "./types";

const Header = ({ children }: HeaderProps) => {
  return <nav>{children}</nav>;
};

export default Header;
