import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode; // Define the type for children
    type?: "button" | "submit" | "reset"; // Optional type prop
    bgColor?: string; // Optional background color prop
    textColor?: string; // Optional text color prop
    className?: string; // Optional additional class names
    [key: string]: any; // This allows for any other props to be passed
}

const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;