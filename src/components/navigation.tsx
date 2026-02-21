import { NavLink } from "react-router";

// Type definitons
type NavLink = {
  title: string;
  to: string;
};

export default function Navigation() {
  // Values
  const navLinks: NavLink[] = [
    {
      title: "About Me",
      to: "/",
    },
    {
      title: "Skills",
      to: "/skills",
    },
    {
      title: "Projects",
      to: "/projects",
    },
  ];

  return (
    <nav className="mt-16">
      <ul className="flex flex-col gap-2 max-lg:gap-6">
        {navLinks.map((navLink) => (
          <li key={navLink.title}>
            <NavLink
              to={navLink.to}
              className="group inline-flex items-center gap-2"
              children={({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "h-px w-16 bg-(--nav-active-background)"
                        : "h-px w-8 bg-(--nav-inactive-background) transition-all duration-200 group-hover:w-16 group-hover:bg-(--nav-active-background)"
                    }
                  ></span>
                  <span
                    className={
                      isActive
                        ? ""
                        : "text-(--muted-foreground) group-hover:text-(--foreground)"
                    }
                  >
                    {navLink.title}
                  </span>
                </>
              )}
            ></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
