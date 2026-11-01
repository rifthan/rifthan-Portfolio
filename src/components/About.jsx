import { motion } from "framer-motion";

const highlights = [
{
number: "01",
title: "Data Analytics",
description:
"Exploring datasets, identifying patterns, and transforming raw information into meaningful insights.",
},
{
number: "02",
title: "Machine Learning",
description:
"Building predictive models and experimenting with machine learning algorithms using Python.",
},
{
number: "03",
title: "Development",
description:
"Creating practical applications using modern frontend, backend, and database technologies.",
},
];

export default function About() {
return ( <section
   id="about"
   className="bg-slate-50 px-6 py-28 text-slate-900"
 > <div className="mx-auto max-w-7xl">

```
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        Get to know me
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        About Me<span className="text-blue-600">.</span>
      </h2>
    </motion.div>

    <div className="grid gap-16 lg:grid-cols-2">

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="mb-6 text-2xl font-bold">
          Turning curiosity into meaningful solutions.
        </h3>

        <p className="mb-5 text-lg leading-9 text-slate-600">
          I'm Seyed Mohamed Rifthan, a Computer Science and
          Engineering graduate with a strong interest in Data
          Analytics and Machine Learning.
        </p>

        <p className="mb-5 text-lg leading-9 text-slate-600">
          I enjoy working with data, exploring patterns,
          developing machine learning models, and creating
          interactive dashboards that communicate meaningful
          insights.
        </p>

        <p className="text-lg leading-9 text-slate-600">
          Alongside analytics, I have experience building
          practical web applications using React.js, Python,
          Flask, and databases. I'm continuously learning
          and improving my technical skills through
          hands-on projects.
        </p>

        {/* Education Card */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Education
          </p>

          <h4 className="text-xl font-bold text-slate-900">
            Bachelor of Engineering
          </h4>

          <p className="mt-2 text-slate-600">
            Computer Science and Engineering
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Mohamed Sathak Engineering College · 2024
          </p>

        </div>
      </motion.div>

      {/* Highlight Cards */}
      <div className="grid gap-5">

        {highlights.map((item, index) => (

          <motion.div
            key={item.number}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
          >

            <div className="mb-5 flex items-center justify-between">

              <span className="text-sm font-bold tracking-widest text-blue-600">
                {item.number}
              </span>

              <span className="h-2 w-2 rounded-full bg-blue-500 transition group-hover:scale-150" />

            </div>

            <h3 className="mb-3 text-xl font-bold">
              {item.title}
            </h3>

            <p className="leading-7 text-slate-600">
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>

    </div>
  </div>
</section>
);
}
