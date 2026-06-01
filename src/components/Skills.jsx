import React from 'react';

const Skills = () => {
  const skillsData = {
    'Tech Stack': ['Dart', 'Python', 'PHP', 'GO', 'Java'],
    'Database': ['MySQL', 'PHPMyAdmin', 'SQLite', 'Firebase', 'MongoDB'],
    'Frameworks': ['Laravel', 'React.js', 'Flutter'],
    'Tools': ['Visual Studio Code', 'Git', 'Figma', 'Microsoft Office', 'Jira'],
    'Others': ['Project Management', 'Software Quality Assurance', 'Internet of Things'],
    'Softskills': ['Problem Solving', 'Leadership', 'Teamwork', 'Critical Thinking'],
    'Bahasa': ['Indonesia (native)', 'English (high intermediate)', 'Arabic (passive)']
  };

  const skillsEntries = Object.entries(skillsData);
  const skillsItems =
    skillsEntries.length % 3 === 0
      ? skillsEntries
      : [
          ...skillsEntries,
          ...Array.from({ length: 3 - (skillsEntries.length % 3) }, () => [
            '__placeholder__',
            [],
          ]),
        ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        My Skills
      </h2>

      <div className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsItems.map(([category, items], idx) => (
            <div
              key={idx}
              className={
                category === '__placeholder__'
                  ? 'hidden lg:block lg:invisible bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6'
                  : 'bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition'
              }
            >
              {category !== '__placeholder__' && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-green-500 mr-2">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
