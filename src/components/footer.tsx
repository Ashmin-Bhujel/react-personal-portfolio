import type { ReactNode } from "react";
import { Link } from "react-router";

import { GitHub } from "./icons/github";
import { Hackerrank } from "./icons/hackerrank";
import { LinkedIn } from "./icons/linkedin";
import { XformerlyTwitter } from "./icons/x-twitter";
import { YouTube } from "./icons/youtube";

// Type definitions
type Link = {
  title: string;
  icon: ReactNode;
  to: string;
};

export default function Footer() {
  // Values
  const links: Link[] = [
    {
      title: "GitHub",
      icon: <GitHub className="size-6" />,
      to: "https://www.github.com/ashmin-bhujel",
    },
    {
      title: "LinkedIn",
      icon: <LinkedIn className="size-6" />,
      to: "https://www.linkedin.com/in/ashmin-bhujel",
    },
    {
      title: "X",
      icon: <XformerlyTwitter className="size-6" />,
      to: "https://www.x.com/ashmin_bhujel",
    },
    {
      title: "HackerRank",
      icon: <Hackerrank className="size-6" />,
      to: "https://www.hackerrank.com/profile/ashmin_bhujel",
    },
    {
      title: "YouTube",
      icon: <YouTube className="size-6" />,
      to: "https://www.youtube.com/@ashmin_bhujel",
    },
  ];

  return (
    <footer className="mt-16">
      <ul className="flex items-center gap-4 max-lg:justify-around max-lg:gap-0">
        {links.map((link) => (
          <li key={link.title} className="group flex items-center rounded-full">
            <Link
              to={link.to}
              target="_blank"
              className="flex size-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-(--muted-background)"
              aria-label={link.title}
              title={link.title}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
