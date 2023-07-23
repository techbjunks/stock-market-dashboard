export interface ButtonProps {
    ariaLabel?: string,
    onClick: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children: React.ReactNode, 
}