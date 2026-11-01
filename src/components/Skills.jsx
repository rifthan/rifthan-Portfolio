import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    number: "01",
    description: "Languages I use to solve technical problems.",
    skills: [
      { name: "Python", logo: "python", color: "3776AB" },
      { name: "SQL", logo: "mysql", color: "4479A1" },
      { name: "JavaScript", logo: "javascript", color: "F7DF1E" },
    ],
  },

  {
    title: "Data Analytics",
    number: "02",
    description: "Transforming raw data into meaningful insights.",
    skills: [
      { name: "Power BI", logo: "powerbi", color: "F2C811" },
      { name: "Excel", logo: "microsoftexcel", color: "217346" },
      { name: "Tableau", logo: "tableau", color: "E97627" },
      { name: "Pandas", logo: "pandas", color: "E70488" },
      { name: "NumPy", logo: "numpy", color: "4DABCF" },
    ],
  },

  {
    title: "Machine Learning",
    number: "03",
    description: "Building models and discovering patterns.",
    skills: [
      { name: "Scikit-learn", logo: "scikitlearn", color: "F7931E" },
      { name: "Jupyter", logo: "jupyter", color: "F37626" },
      { name: "Matplotlib", logo: "plotly", color: "3F4F75" },
      { name: "Seaborn", logo: "python", color: "4C72B0" },
    ],
  },

  {
    title: "Development & Database",
    number: "04",
    description: "Building applications and managing databases.",
    skills: [
      { name: "React.js", logo: "react", color: "61DAFB" },
      { name: "Flask", logo: "flask", color: "FFFFFF" },
      { name: "HTML5", logo: "html5", color: "E34F26" },
      { name: "CSS3", logo: "css3", color: "1572B6" },
      { name: "Git", logo: "git", color: "F05032" },
      { name: "GitHub", logo: "github", color: "FFFFFF" },
      { name: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { name: "MySQL", logo: "mysql", color: "4479A1" },
    ],
  },
];

function SkillCard({ skill }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-xl hover:shadow-blue-900/20">

      <div className="flex h-12 w-12 items-center justify-center">

        <img
          src={`https://cdn.simpleicons.org/${skill.logo}/${skill.color}`}
          alt={`${skill.name} logo`}
          className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "block";
          }}
        />

        <span
          className="hidden text-xl font-bold"
          style={{ color: `#${skill.color}` }}
        >
          {skill.name.charAt(0)}
        </span>

      </div>

      <span className="text-center text-sm font-medium text-slate-300 transition group-hover:text-white">
        {skill.name}
      </span>

    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white"
    >

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Technical Expertise
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Technical Skills
            <span className="text-blue-500">.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Technologies and tools I use across Data Analytics,
            Machine Learning, and Software Development.
          </p>

        </div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-2">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05]"
            >

              <div className="mb-8">

                <span className="text-sm font-bold tracking-widest text-blue-400">
                  {category.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {category.description}
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <p className="text-center text-sm text-slate-500">
            Continuously learning and expanding my technical expertise.
          </p>

        </div>

      </div>

    </section>
  );
}