import { motion } from "framer-motion";

const contactDetails = [
  {
    label: "Email",
    value: "m.seyedmohamedrifthan@gmail.com",
    href: "mailto:m.seyedmohamedrifthan@gmail.com",
  },
  {
    label: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/rifthan",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/seyed-mohamed-rifthan-a977b4329/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 px-6 py-28 text-slate-900"
    >
      ```
      {/* Background Effect */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Get in touch
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let's Work Together
            <span className="text-blue-600">.</span>
          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-600">
            I'm always interested in connecting with professionals, exploring
            new opportunities, and collaborating on meaningful projects in Data
            Analytics and Machine Learning.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-slate-950 p-9 text-white sm:p-12"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Have an opportunity?
            </p>

            <h3 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
              Let's create something meaningful together.
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Whether it's a job opportunity, a technical discussion, or a
              collaboration, I'd be happy to connect.
            </p>

            <a
              href="mailto:m.seyedmohamedrifthan@gmail.com"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Send Me an Email
            </a>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-5"
          >
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      {item.label}
                    </p>

                    <p className="mt-3 font-semibold text-slate-800 transition group-hover:text-blue-600">
                      {item.value}
                    </p>
                  </div>

                  <span className="text-2xl text-blue-600 transition group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Location
              </p>

              <p className="mt-3 font-semibold text-slate-800">
                Dubai, United Arab Emirates
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
