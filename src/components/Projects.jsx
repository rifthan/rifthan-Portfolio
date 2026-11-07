import { motion } from "framer-motion";

const projects = [
  {
    title: "Data Professional Survey Dashboard",
    category: "Data Analytics",
    image: "/images/projects/Data Professional Dashboard.png",
    description:
      "An interactive Power BI dashboard analyzing survey responses from 630+ data professionals, exploring salaries, job roles, programming languages, and industry trends.",
    technologies: ["Power BI", "Power Query", "DAX", "Excel"],
  },

  {
    title: "Text Emotion Classifier",
    category: "Machine Learning",
    image: "/images/projects/Text_Emotion_Classification.png",
    description:
      "A machine learning project that classifies text into emotion categories using Natural Language Processing, TF-IDF feature extraction, and Support Vector Machine.",
    technologies: ["Python", "Pandas", "Scikit-learn", "TF-IDF", "SVM"],
  },

  {
    title: "Restaurant Management System",
    category: "Full-Stack Development",
    image: "/images/projects/Restaurant_Management.png",
    description:
      "A restaurant management application featuring menu management, order processing, role-based authentication, and sales reporting.",
    technologies: ["React.js", "Python", "Flask", "SQLite", "SQLAlchemy"],
  },
  {
    title: "Loan Approval Classification",
    category: "Machine Learning",
    image: "images/projects/Loan_Classification.png",
    description:
      "A machine learning application that predicts loan approval or rejection based on applicant details using classification algorithms.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
    ],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-28 text-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            My Recent Work
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Featured Projects
            <span className="text-blue-600">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A selection of projects showcasing my work in Data Analytics,
            Machine Learning, and Software Development.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
            >
              {/* Project Image */}

              <div className="h-56 overflow-hidden bg-slate-100 rounded-t-xl flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-7">
                <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-28 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
