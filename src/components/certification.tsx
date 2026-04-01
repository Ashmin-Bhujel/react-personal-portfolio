import { Link2 } from "lucide-react";
import { Link } from "react-router";

// Types
export type CertificationType = {
  imgSrc: string;
  title: string;
  description: string;
  issuedOn: string;
  skills: string[];
  credentialId?: string;
  credentialLink: string;
};
type CertificationPropType = {
  certification: CertificationType;
  handlePreviewImgSrc: (imgSrc: string) => void;
  toggleShowImagePreview: () => void;
};

export default function Certification({
  certification,
  handlePreviewImgSrc,
  toggleShowImagePreview,
}: CertificationPropType) {
  return (
    <div className="flex flex-col gap-4 divide-y-2 divide-(--muted-background)">
      <div className="relative rounded-lg p-4 transition-colors duration-200 hover:bg-(--muted-background)">
        <div
          className="group cursor-pointer overflow-hidden rounded-md bg-zinc-800"
          onClick={() => {
            handlePreviewImgSrc(certification.imgSrc);
            toggleShowImagePreview();
          }}
        >
          <img
            src={certification.imgSrc}
            alt={certification.description}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Name and description */}
        <div className="mt-4 space-y-2">
          <h4 className="text-xl capitalize">{certification.title}</h4>
          <p className="text-(--muted-foreground)">
            {certification.description}
          </p>
        </div>

        <div className="mt-2 space-y-4">
          {/* Issued on */}
          <div>
            <p className="text-sm">Issued On</p>
            <p className="text-sm text-(--muted-foreground)">
              {certification.issuedOn}
            </p>
          </div>

          {/* Credential ID */}
          {certification.credentialId && (
            <div>
              <p className="text-sm">Credential ID</p>
              <p className="text-sm text-(--muted-foreground)">
                {certification.credentialId}
              </p>
            </div>
          )}

          {/* Skills */}
          <div>
            <p className="text-sm">Skills</p>
            <p className="text-sm text-(--muted-foreground)">
              {certification.skills.join(", ")}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <Link
              to={certification.credentialLink}
              target="_blank"
              className="group inline-flex items-center gap-2 text-(--muted-foreground) hover:text-(--foreground)"
            >
              <Link2 className="size-4 text-(--foreground)" />
              <span className="relative">
                View Crendential
                <span className="absolute bottom-0 left-0 inline-block h-px w-0 origin-left bg-(--foreground) transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
