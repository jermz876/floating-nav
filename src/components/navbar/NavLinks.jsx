import React from "react";
import Link from "next/link";

export const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Adventure",
        href: "#news",
    },
];

const NavLinks = () => {
    return (
        <ul className="flex gap-4">
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className="hover:text-blue-800 hover:border-b-2 font-semibold transform transition duration-300">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
