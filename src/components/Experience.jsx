import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "CV. Codespace Indonesia",
      location: "Malang, Jawa Timur",
      period: "Juli 2025 - Oktober 2025",
      role: "Magang",
      responsibilities: [
        "Mengembangkan aplikasi yang digunakan operasional perusahaan.",
        "Berkontribusi dalam proses pengembangan mulai dari perancangan fitur, implementasi logika backend, hingga pengujian dan perbaikan sistem."
      ]
    },
    {
      company: "PLN Icon Plus",
      location: "Semarang, Jawa Tengah",
      period: "Agustus 2024 - Desember 2024",
      role: "Magang",
      responsibilities: [
        "Melakukan operasi dan pemeliharaan aset perusahaan untuk memastikan kinerja optimal.",
        "Mengembangkan aplikasi mendukung kegiatan operasional perusahaan.",
        "Membuat aplikasi dan solusi digital untuk mendukung divisi terkait."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        My Experience
      </h2>

      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer block"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {exp.location} | {exp.period}
            </p>
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
              {exp.role}
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              {exp.responsibilities.map((resp, respIdx) => (
                <li key={respIdx} className="flex items-start">
                  <span className="text-green-500 mr-2">●</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;