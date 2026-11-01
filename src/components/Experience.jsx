import { motion } from "framer-motion";

const experiences = [
{
role: "Full Stack Developer",
company: "Tunelink Networks Pvt. Ltd.",
location: "Chennai, India",
period: "Aug 2024 – Aug 2025",
type: "Professional Experience",
description:
"Worked on full-stack application development using modern web technologies.",
technologies: [
"React.js",
"JavaScript",
"Python",
"Flask",
"MySQL",
],
},

{
role: "Machine Learning Intern",
company: "Gradtwin OPC Pvt. Ltd.",
location: "Chennai, India",
period: "Aug 2024 – Oct 2024",
type: "Internship",
description:
"Gained practical exposure to machine learning concepts, Python libraries, data processing, and model development.",
technologies: [
"Python",
"Pandas",
"NumPy",
"Scikit-learn",
"Matplotlib",
],
},
];

export default function Experience() {
return ( <section
   id="experience"
   className="bg-slate-950 px-6 py-28 text-white"
 > <div className="mx-auto max-w-7xl">

```
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        My Professional Journey
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Experience<span className="text-blue-500">.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        My professional journey, practical experience,
        and continuous growth in technology.
      </p>

    </motion.div>

    {/* Timeline */}
    <div className="relative">

      {/* Timeline Line */}
      <div className="absolute bottom-0 left-[9px] top-0 w-px bg-slate-700 md:left-6" />

      <div className="space-y-12">

        {experiences.map((item, index) => (

          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative pl-10 md:pl-16"
          >

            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-500 ring-2 ring-blue-500/30 md:left-[15px]" />

            {/* Experience Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05] sm:p-10">

              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>

                  <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-400">
                    {item.type}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-lg font-medium text-blue-400">
                    {item.company}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.location}
                  </p>

                </div>

                <div className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300">
                  {item.period}
                </div>

              </div>

              <p className="max-w-3xl leading-8 text-slate-400">
                {item.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-7 flex flex-wrap gap-3">

                {item.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </div>
</section>

);
}
