import React from "react";

interface ExperiencePanelProps {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  skills: { name: string; onClick?: () => void }[];
  companyUrl?: string;
  /**
   * If true, always use dark theme for this panel, regardless of system or parent theme.
   */
  forceDark?: boolean;
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
}) => {
  // If forceDark is true, always use dark background and border, never bg-white
  const rootClass = [
    'w-full max-w-2xl mx-auto my-6 p-6 rounded-xl shadow-lg transition-all',
    forceDark
      ? 'bg-neutral-800 border border-neutral-400 text-neutral-50'
      : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-400',
    forceDark ? 'dark' : '',
  ].join(' ');
  return (
    <div className={rootClass}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {role}
          </h3>
          <div className="text-neutral-600 dark:text-neutral-200 text-sm">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 dark:hover:text-blue-400"
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
        <div className="text-neutral-500 dark:text-neutral-200 text-sm md:text-right">
          {dates}
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        {bullets.map((point, idx) => (
          <li key={idx} className="text-neutral-800 dark:text-neutral-100 text-base">
            {point}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200 dark:border-neutral-400">
        {skills.map((skill, idx) => (
          <button
            key={skill.name}
            onClick={skill.onClick}
            className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${badgeColors[idx % badgeColors.length]} hover:scale-105 hover:shadow-md`}
            type="button"
          >
            {skill.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePanel;
