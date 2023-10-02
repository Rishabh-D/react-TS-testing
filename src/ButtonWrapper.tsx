import React from "react";

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    title: string;
};

export const ButtonWrapper = ({ title, ...props }: ButtonProps) => (
    <button {...props}>{title}</button>
);
