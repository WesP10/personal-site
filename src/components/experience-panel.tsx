import React from "react";

interface ExperiencePanelProps {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  skills: { name: string; onClick?: () => void }[];
  companyUrl?: string;
  /** If true, always use dark theme for this panel, regardless of system or parent theme. */
  forceDark?: boolean;
  /** Enable collapsing / expanding the panel */
  collapsible?: boolean;
  /** Initial collapsed state when collapsible; defaults to false (expanded) */
  defaultCollapsed?: boolean;
}

const badgeColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
];

export const ExperiencePanel: React.FC<ExperiencePanelProps> = ({
  role,
  company,
  location,
  dates,
  bullets,
  skills,
  companyUrl,
  forceDark = false,
  collapsible = false,
  defaultCollapsed = false,
}) => {
  const [expanded, setExpanded] = React.useState(!defaultCollapsed);

  const toggle = () => {
    if (!collapsible) return;
    setExpanded((e) => !e);
  };

  const rootClass = [
    "w-full max-w-2xl mx-auto my-6 p-6 rounded-xl shadow-lg transition-all",
    forceDark
      ? "bg-neutral-800 border border-neutral-400 text-neutral-50"
      : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-400",
    forceDark ? "dark" : "",
  ].join(" ");

  return (
    <div className={rootClass}>
      <div className="flex flex-col gap-2">
        <div
          className={
            "flex flex-col md:flex-row md:justify-between md:items-start gap-2 " +
            (collapsible ? "cursor-pointer" : "")
          }
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls={`exp-content-${role.replace(/\s+/g, "-")}`}
        >
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
              {role}
              {collapsible && (
                <span
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-transform"
                  aria-hidden="true"
                >
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              )}
            </h3>
            <div className="text-neutral-600 dark:text-neutral-200 text-sm">
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={(e) => {
                    if (collapsible) e.stopPropagation();
                  }}
                >
                  {company}
                </a>
              ) : (
                company
              )}
              {" | "}
              {location}
            </div>
          </div>
          <div
            className="text-neutral-500 dark:text-neutral-200 text-sm md:text-right"
            onClick={(e) => {
              if (collapsible) e.stopPropagation();
            }}
          >
            {dates}
          </div>
        </div>
        <div
          id={`exp-content-${role.replace(/\s+/g, "-")}`}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            expanded ? "opacity-100" : "opacity-0"
          } ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          aria-hidden={!expanded}
        >
          <div className="overflow-hidden">
            <ul className="list-disc pl-5 space-y-1 mb-4 mt-1">
              {bullets.map((point, idx) => (
                <li
                  key={idx}
                  className="text-neutral-800 dark:text-neutral-100 text-base"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200 dark:border-neutral-400">
              {skills.map((skill, idx) => (
                <button
                  key={skill.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    skill.onClick?.();
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                    badgeColors[idx % badgeColors.length]
                  } hover:scale-105 hover:shadow-md`}
                  type="button"
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePanel;
