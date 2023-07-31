export interface ButtonProps {
  ariaLabel?: string;
  variant?: string;
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
