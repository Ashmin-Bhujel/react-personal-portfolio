import { useEffect, useState } from "react";

import type { ProjectType } from "../components/project";
import Project from "../components/project";

export default function Projects() {
  // States
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Normal values
  const apiURL = "https://api.github.com/users/Ashmin-Bhujel/repos";

  // Callbacks and effects
  useEffect(() => {
    async function getProjects() {
      try {
        setIsLoading(true);
        const response = await fetch(apiURL, {
          method: "GET",
        });

        if (!response.ok) {
          return;
        }

        const data: ProjectType[] = await response.json();

        setProjects(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log("Failed to get repositories:", error.message);
        }
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    }

    getProjects();
  }, []);

  // Render if loading
  if (isLoading) {
    return (
      <section className="py-16 max-lg:pt-0">
        <h3 className="pb-6 text-center text-2xl font-medium">
          Fetching Projects Data
        </h3>
      </section>
    );
  }

  return (
    <section className="py-16 max-lg:pt-0">
      <h3 className="pb-6 text-2xl font-medium lg:hidden">Projects</h3>

      <div className="flex flex-col gap-4 divide-y-2 divide-(--muted-background)">
        {projects
          .filter((project) => project.homepage)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          )
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}
