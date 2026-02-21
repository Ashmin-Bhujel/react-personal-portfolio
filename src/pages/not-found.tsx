import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-6 py-16 max-lg:pt-0">
      <h3 className="text-center text-2xl">404 - Page Not Found</h3>
      <Link to={"/"} className="group relative">
        <span>Go to About Me</span>
        <span className="absolute bottom-0 left-0 inline-block h-px w-0 origin-left bg-(--foreground) transition-all duration-200 group-hover:w-full"></span>
      </Link>
    </section>
  );
}
