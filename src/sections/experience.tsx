
import ExperiencePanel from '../components/experience-panel';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Infinimoon LLC',
    companyUrl: 'https://ro.place/',
    location: 'Remote',
    dates: 'May 2024 – Present',
    bullets: [
      'Designed and deployed 8+ full-stack features including wish lists, real-time notifications, and batch image processing pipelines.',
      'Reduced redundant requests and improved load times by up to 20% using Redis caching and backend queuing logic.',
      'Refactored over 7,750 lines across 30+ Vue files into Pug and TypeScript for scalable front-end architecture.',
      'Resolved 50+ bugs in a React, Apollo GraphQL, and Node.js stack by triaging with Sentry and tracking via Linear.',
    ],
    skills: [
      { name: 'TypeScript' },
      { name: 'Vue.js' },
      { name: 'Pug' },
      { name: 'GraphQL' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Redis' },
      { name: 'Sentry' },
      { name: 'Linear' },
    ],
  },
  {
    role: 'ECC Sub-Team Lead',
    company: 'Cornell Hyperloop',
    companyUrl: 'https://www.cornellhyperloop.com',
    location: 'Ithaca, NY',
    dates: 'Sept 2024 – Present',
    bullets: [
      'Developed C++ scripts for real-time pod data collection and control.',
      'Designed a Python GUI to streamline monitoring and improve operational efficiency.',
      'Soldered sensor hardware and designed modular circuits for seamless pod integration.',
    ],
    skills: [
      { name: 'C++' },
      { name: 'Python' },
      { name: 'GUI Design' },
      { name: 'Electronics' },
    ],
  },
  {
    role: 'Engineering Team Member',
    company: 'Cornell Blockchain',
    companyUrl: 'https://cornellblockchain.org',
    location: 'Ithaca, NY',
    dates: 'Sept 2024 – Present',
    bullets: [
      'Designed and implemented Ezrapay, a full-stack platform for managing BRB tokens using crypto wallets.',
      'Wrote smart contracts in Solidity and built a robust front-end/back-end stack using TypeScript.',
      'Enabled seamless wallet integration and reliable token transaction flows for Cornell students and faculty.',
    ],
    skills: [
      { name: 'Solidity' },
      { name: 'TypeScript' },
      { name: 'Smart Contracts' },
      { name: 'Web Development' },
    ],
  },
];


interface ExperienceSectionProps {
  forceDark?: boolean;
}

const ExperienceSection = ({ forceDark = false }: ExperienceSectionProps) => {
  return (
    <section className="w-full py-12 bg-transparent">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="flex flex-col items-center gap-8">
        {experiences.map((exp, idx) => (
          <ExperiencePanel key={exp.company + idx} {...exp} forceDark={forceDark} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
