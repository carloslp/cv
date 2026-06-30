import * as React from "react";

interface WorkEntry {
  company: string;
  link?: string;
  title: string;
  start: string;
  end: string | null;
  description?: string;
  location?: string;
  badges?: readonly string[];
}

interface WorkExperienceProps {
  entries: readonly WorkEntry[];
  presentLabel?: string;
}

export function WorkExperience({
  entries,
  presentLabel = "Present",
}: WorkExperienceProps) {
  return (
    <div className="space-y-4 print:space-y-2">
      {entries.map((entry, index) => (
        <div key={`${entry.company}-${entry.title}-${index}`}>
          <div className="flex items-baseline justify-between gap-x-2">
            <h3 className="font-bold leading-snug print:text-[11pt]">
              {entry.link ? (
                <a
                  className="hover:underline print:no-underline"
                  href={entry.link}
                >
                  {entry.company}
                </a>
              ) : (
                entry.company
              )}
            </h3>
            <span className="shrink-0 tabular-nums text-sm text-muted-foreground print:text-[10pt] print:text-black">
              {entry.start} – {entry.end ?? presentLabel}
            </span>
          </div>
          {entry.location && (
            <p className="text-sm text-muted-foreground print:text-[10pt] print:text-black">
              {entry.location}
            </p>
          )}
          <p className="text-sm italic leading-snug text-muted-foreground print:text-[10pt] print:text-black">
            {entry.title}
          </p>
          {entry.description && (
            <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground print:text-[10pt] print:text-black">
              {entry.description
                .split("\n")
                .filter(Boolean)
                .map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
