import React from 'react';
import { Code, Database, Terminal, Cpu, Monitor, Gamepad2 } from 'lucide-react';

type SkillCategoryProps = {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
  icon: React.ReactNode;
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React.js', level: 85 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'AJAX', level: 82 },
    { name: 'React Native', level: 75 },
  ];

  const backendSkills = [
    { name: 'Laravel', level: 87 },
    { name: 'PHP', level: 85 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'Authentication', level: 84 },
  ];

  const databaseSkills = [
    { name: 'MySQL', level: 83 },
    { name: 'Firebase', level: 75 },
    { name: 'Database Design', level: 80 },
  ];

  const programmingSkills = [
    { name: 'JavaScript', level: 85 },
    { name: 'PHP', level: 88 },
    { name: 'C#', level: 70 },
    { name: 'Python', level: 65 },
  ];

  const toolsSkills = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'VS Code', level: 90 },
    { name: 'Figma/Canva', level: 80 },
    { name: 'WordPress', level: 72 },
  ];

  const gameDevSkills = [
    { name: 'Unity Engine', level: 78 },
    { name: 'C# (Game Scripting)', level: 70 },
    { name: '2D/3D Game Mechanics', level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My technical expertise across various technologies and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            icon={<Monitor className="text-blue-600 dark:text-blue-400" size={24} />}
          />
          <SkillCategory 
            title="Backend Development" 
            skills={backendSkills} 
            icon={<Code className="text-blue-600 dark:text-blue-400" size={24} />}
          />
          <SkillCategory 
            title="Database" 
            skills={databaseSkills} 
            icon={<Database className="text-blue-600 dark:text-blue-400" size={24} />}
          />
          <SkillCategory 
            title="Programming Languages" 
            skills={programmingSkills} 
            icon={<Terminal className="text-blue-600 dark:text-blue-400" size={24} />}
          />
          <SkillCategory 
            title="Tools & DevOps" 
            skills={toolsSkills} 
            icon={<Cpu className="text-blue-600 dark:text-blue-400" size={24} />}
          />
          <SkillCategory 
            title="Game Development" 
            skills={gameDevSkills} 
            icon={<Gamepad2 className="text-blue-600 dark:text-blue-400" size={24} />}
          />
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">Other Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Unity Engine', 'Responsive Design', 'UI/UX Design', 'Authentication Systems', 'Role-Based Access', 
              'Session Management', 'RESTful APIs', 'Mobile-First Design', 'Cross-Browser Compatibility', 
              'Version Control', 'Collaborative Development', 'Problem Solving', 'Debugging',
              'Code Optimization', 'Performance Tuning'
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-200 dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
