export interface ButtonProps {
  ariaLabel?: string;
  variant?: string;
  onClick: () => void;
  width?: string | undefined;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
