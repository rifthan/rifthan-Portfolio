import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-16 pt-28 text-white"
    >

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >

          {/* Availability Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/10 px-5 py-2.5">

            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-sm font-medium text-blue-300">
              Welcome to my portfolio
            </span>

          </div>

          <p className="mb-4 text-lg font-medium text-blue-400">
            Hello, I'm
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl xl:text-7xl">

            Seyed Mohamed
            <br />

            Rifthan<span className="text-blue-500">.</span>

          </h1>

          <h2 className="mb-6 text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">

            Data Analyst
            <span className="text-blue-500"> | </span>
            Machine Learning Enthusiast

          </h2>

          <p className="mb-10 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">

            I transform data into meaningful insights and build practical
            solutions using data analytics, machine learning, and modern
            technologies.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore Projects
              <ArrowRight size={19} />
            </a>

            <a
              href="/images/resume/SeyedMohamedRifthan.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-slate-700 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              Download CV
              <Download size={19} />
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6">

            <span className="text-sm text-slate-500">
              Connect with me
            </span>

            <a
              href="https://github.com/rifthan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-white"
            >
              <span className="text-sm font-semibold">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/seyed-mohamed-rifthan-a977b4329/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <ExternalLink size={21} />
            </a>

            <a
              href="mailto:m.seyedmohamedrifthan@gmail.com"
              aria-label="Email"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <Mail size={21} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-1 flex justify-center lg:order-2"
        >

          <div className="relative">

            {/* Background Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-blue-600/20 blur-3xl" />

            {/* Image Border */}
            <div className="relative h-72 w-72 overflow-hidden rounded-[40px] border border-blue-400/30 bg-slate-900 shadow-2xl shadow-blue-950/50 sm:h-96 sm:w-96">

              <img
                src="/images/rifthan.png"
                alt="Seyed Mohamed Rifthan"
                className="h-full w-full object-cover object-center"
              />

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl">

              <p className="text-sm font-semibold text-white">
                Data & Technology
              </p>

              <p className="mt-1 text-xs text-blue-400">
                Analytics | Machine Learning
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}