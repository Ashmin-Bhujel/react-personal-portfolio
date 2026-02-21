import { Globe } from "lucide-react";
import { Link } from "react-router";

import { GitHub } from "../components/icons/github";

// Type definitions
export type ProjectType = {
  id: number;
  name: string;
  html_url: string;
  description: null | string;
  language: string;
  topics: string[];
  homepage: string;
  updated_at: string;
};
type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  return (
    <div className="rounded-lg p-4 transition-colors duration-200 hover:bg-(--muted-background)">
      {/* Name and description */}
      <div className="space-y-2">
        <h4 className="text-xl capitalize">
          {project.name.split("-").join(" ")}
        </h4>
        <p className="text-(--muted-foreground)">{project.description}</p>
      </div>

      <div className="mt-2 space-y-4">
        {/* Language */}
        {project.language && (
          <p className="text-xs">
            <span>Language: </span>
            <span>{project.language}</span>
          </p>
        )}

        {/* Topics */}
        {project.topics.length !== 0 && (
          <div>
            <p className="text-sm">Topics</p>
            <p className="text-sm text-(--muted-foreground)">
              {project.topics.join(", ")}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4">
          <Link
            to={project.html_url}
            target="_blank"
            className="group inline-flex items-center gap-2 text-(--muted-foreground) hover:text-(--foreground)"
          >
            <GitHub className="size-4" />
            <span className="relative">
              Visit Repository
              <span className="absolute bottom-0 left-0 inline-block h-px w-0 origin-left bg-(--foreground) transition-all duration-200 group-hover:w-full"></span>
            </span>
          </Link>

          {project.homepage && (
            <Link
              to={project.homepage}
              target="_blank"
              className="group inline-flex items-center gap-2 text-(--muted-foreground) hover:text-(--foreground)"
            >
              <Globe className="size-4 text-(--foreground)" />
              <span className="relative">
                Live Website
                <span className="absolute bottom-0 left-0 inline-block h-px w-0 origin-left bg-(--foreground) transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
