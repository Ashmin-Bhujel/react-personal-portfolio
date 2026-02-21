import Badge from "../components/badge";

export default function Skills() {
  // Values
  const frontendSkills: string[] = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Vite.js",
    "React.js",
    "Tailwind CSS",
    "shadcn/ui",
    "Motion",
    "React Hook Form",
    "Zod",
  ];
  const backendSkills: string[] = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Zod",
  ];
  const tools: string[] = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Linux",
    "Docker",
  ];

  return (
    <section className="py-16 max-lg:pt-0">
      <h3 className="pb-6 text-2xl font-medium lg:hidden">Skills</h3>

      <div className="flex flex-col gap-6">
        {/* Frontend */}
        <div className="space-y-4">
          <h4 className="text-lg">Frontend</h4>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-4">
            {frontendSkills.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="space-y-4">
          <h4 className="text-lg">Backend</h4>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-4">
            {backendSkills.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="space-y-4">
          <h4 className="text-lg">Tools</h4>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-4">
            {tools.map((tool) => (
              <li key={tool}>
                <Badge>{tool}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
