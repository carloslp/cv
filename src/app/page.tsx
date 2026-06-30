"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { useLanguage } from "@/lib/language-context";
import { ProjectCard } from "@/components/project-card";
import { Education } from "@/components/education";
import { WorkExperience } from "@/components/work-experience";

export default function Page() {
  const { language } = useLanguage();
  const data = RESUME_DATA[language];
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between print:flex-col print:items-center print:text-center">
          <div className="flex-1 space-y-1.5 print:space-y-1">
            <h1 className="text-2xl font-bold print:text-center print:text-[18pt] print:tracking-wide">
              {data.name}
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:hidden">
              {data.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:hidden">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={data.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {data.location}
              </a>
            </p>
            {/* Screen-only social buttons */}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {data.contact.email ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`mailto:${data.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.tel ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`tel:${data.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            {/* Print-only contact line */}
            <div className="hidden print:flex print:flex-col print:items-center print:gap-0.5 print:text-[10pt]">
              <p className="text-muted-foreground">{data.location}</p>
              {data.contact.email && (
                <a href={`mailto:${data.contact.email}`}>
                  <span className="underline">{data.contact.email}</span>
                </a>
              )}
              {data.contact.tel && (
                <a href={`tel:${data.contact.tel}`}>
                  <span className="underline">{data.contact.tel}</span>
                </a>
              )}
              {data.contact.social.map((social) => (
                <a key={social.name} href={social.url}>
                  <span className="underline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Avatar: visible on screen, hidden when printing */}
          <Avatar className="size-28 print:hidden">
            <AvatarImage alt={data.name} src={data.avatarUrl} />
            <AvatarFallback>{data.initials}</AvatarFallback>
          </Avatar>
        </div>

        {/* About / Summary */}
        <Section>
          <h2 className="text-xl font-bold print:border-b print:border-black print:pb-0.5 print:text-[12pt] print:uppercase print:tracking-widest">
            {language === "es" ? "Sobre mí" : "About"}
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:font-serif print:text-[11pt] print:text-black print:font-normal">
            {data.summary}
          </p>
        </Section>

        {/* Education */}
        <Section>
          <h2 className="text-xl font-bold print:border-b print:border-black print:pb-0.5 print:text-[12pt] print:uppercase print:tracking-widest">
            {language === "es" ? "Educación" : "Education"}
          </h2>
          <Education entries={data.education} />
        </Section>

        {/* Work Experience */}
        <Section>
          <h2 className="text-xl font-bold print:border-b print:border-black print:pb-0.5 print:text-[12pt] print:uppercase print:tracking-widest">
            {language === "es" ? "Experiencia Laboral" : "Work Experience"}
          </h2>
          <WorkExperience
            entries={data.work}
            presentLabel={language === "es" ? "Presente" : "Present"}
          />
        </Section>

        {/* Skills */}
        <Section>
          <h2 className="text-xl font-bold print:border-b print:border-black print:pb-0.5 print:text-[12pt] print:uppercase print:tracking-widest">
            Skills
          </h2>
          {/* Screen: badges; Print: plain comma-separated text */}
          <div className="flex flex-wrap gap-1 print:hidden">
            {data.skills.map((skill) => (
              <Badge className="print:text-[10px]" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
          <p className="hidden print:block print:text-[11pt] print:text-black">
            {data.skills.join(", ")}
          </p>
        </Section>

        {/* Certifications */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold print:border-b print:border-black print:pb-0.5 print:text-[12pt] print:uppercase print:tracking-widest">
            {language === "es" ? "Certificaciones" : "Certifications"}
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:mx-0 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {data.certifications?.map((certification) => (
              <ProjectCard
                key={certification.title}
                title={certification.title}
                description={certification.description}
                tags={certification.techStack}
                link={"link" in certification ? certification.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold print:border-b print:border-black print:pb-0.5 print:text-[12pt] print:uppercase print:tracking-widest">
            {language === "es" ? "Proyectos" : "Projects"}
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:mx-0 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>
      </section>
    </main>
  );
}

