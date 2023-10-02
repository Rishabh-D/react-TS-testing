import React from "react";

type Item = {
    name: string;
    href: string;
};

type SideBarProps = {
    items: Item[];
};

export const SideBar = ({ items }: SideBarProps) => (
    <div>
        {items.map((item: Item) => (
            <div key={item.href}>
                <a role="navigation" href={item.href}>
                    {item.name}
                </a>
            </div>
        ))}
    </div>
);
