export default function AboutMe() {
  return (
    <section className="py-16 max-lg:pt-0">
      <h3 className="pb-6 text-xl lg:hidden">About Me</h3>

      <div className="flex flex-col gap-6 leading-loose text-(--muted-foreground)">
        <p>
          Hi, I'm Ashmin Bhujel — a passionate Software Developer from Nepal
          specializing in modern web application development. I focus on
          building reliable, scalable, and high-performance software using
          technologies like TypeScript, Node.js, React.js, Tailwind CSS,
          MongoDB, PostgreSQL, and Docker.
        </p>

        <p>
          I enjoy creating web applications with clean, modern user interfaces
          and seamless user experiences. Continuously learning and improving my
          craft, I strive to write maintainable, efficient code and follow best
          practices to deliver impactful and user-centered digital solutions.
        </p>
      </div>
    </section>
  );
}
