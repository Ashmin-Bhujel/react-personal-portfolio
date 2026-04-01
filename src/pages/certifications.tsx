import { useEffect, useState } from "react";
import { X } from "lucide-react";

import type { CertificationType } from "../components/certification";
import Certificate from "../components/certification";

export default function Certifications() {
  // Certifications data
  const certifications: CertificationType[] = [
    {
      imgSrc: "/hackerrank-frontend-developer-react-certificate.jpeg",
      title: "HackerRank Frontend Developer (React) Certificate",
      description:
        "HackerRank Frontend Developer (React) - It covers topics like React, CSS, and JavaScript.",
      issuedOn: "Feb 2026",
      credentialId: "a879f4dbfbec",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
      credentialLink: "https://www.hackerrank.com/certificates/a879f4dbfbec",
    },
    {
      imgSrc: "/60-days-of-learning-2025.jpeg",
      title: "60 Days of Learning 2025 - Learning with Leapfrog",
      description:
        "Certificate of Accomplishment for 60 Days of Learning 2025. Learning with Leapfrog.",
      issuedOn: "Sep 2025",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
      ],
      credentialLink:
        "https://www.linkedin.com/posts/lftechnology_60daysoflearning2025-activity-7378401938557730816-C1B_/",
    },
    {
      imgSrc: "/digitalocean-hacktoberfest-2024-holopin-ashminbhujel.png",
      title: "DigitalOcean Hacktoberfest 2024",
      description:
        "Participating in and completing DigitalOcean’s Hacktoberfest 2024 by completing required numbers of PRs on hacktoberfest tagged GitHub repository.",
      issuedOn: "Nov 2024",
      skills: ["Git", "GitHub"],
      credentialLink: "https://www.holopin.io/@ashminbhujel",
    },
  ];

  // States
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [previewImg, setPreviewImg] = useState("");

  // Handler function
  function toggleShowImagePreview() {
    setShowImagePreview((currentShowImagePreview) => !currentShowImagePreview);
  }
  function handlePreviewImgSrc(imgSrc: string) {
    setPreviewImg(imgSrc);
  }

  // setShowImagePreview to false when user presses the escape key
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setShowImagePreview(false);
    }
  }

  // Add event listener for keydown when component mounts and remove it when component unmounts
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="py-16 max-lg:pt-0">
      {/* Image preview */}
      {showImagePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/50 px-4 backdrop-blur-sm backdrop-brightness-75">
          <div className="relative overflow-hidden rounded-2xl">
            <button
              onClick={toggleShowImagePreview}
              className="absolute top-2 right-2 cursor-pointer rounded-full border-2 bg-neutral-800 p-1 transition-colors duration-300 hover:bg-neutral-700"
            >
              <X />
            </button>

            <img src={previewImg} alt="" className="w-full max-w-5xl" />
          </div>
        </div>
      )}

      <h3 className="pb-6 text-2xl font-medium lg:hidden">Certifications</h3>

      {/* Certifications */}
      <div className="flex flex-col gap-4 divide-y-2 divide-(--muted-background)">
        {certifications.map((certification) => (
          <Certificate
            key={certification.title}
            certification={certification}
            handlePreviewImgSrc={handlePreviewImgSrc}
            toggleShowImagePreview={toggleShowImagePreview}
          />
        ))}
      </div>
    </section>
  );
}
