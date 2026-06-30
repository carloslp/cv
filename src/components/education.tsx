import * as React from "react";

interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
}

interface EducationProps {
  entries: readonly EducationEntry[];
}

export function Education({ entries }: EducationProps) {
  return (
    <div className="space-y-3 print:space-y-2">
      {entries.map((entry) => (
        <div key={`${entry.school}-${entry.start}`}>
          <div className="flex items-baseline justify-between gap-x-2">
            <h3 className="font-bold leading-snug print:text-[11pt]">
              {entry.school}
            </h3>
            <span className="shrink-0 tabular-nums text-sm text-muted-foreground print:text-[10pt] print:text-black">
              {entry.start} – {entry.end}
            </span>
          </div>
          {entry.location && (
            <p className="text-sm italic text-muted-foreground print:text-[10pt] print:text-black">
              {entry.location}
            </p>
          )}
          <p className="text-sm italic text-muted-foreground print:text-[10pt] print:text-black">
            {entry.degree}
          </p>
        </div>
      ))}
    </div>
  );
}
