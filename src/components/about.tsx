// import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto px-4 mt-24 md:mt-32"
    >
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" // Replace with your image URL or import
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-sky-500"
        />
      </div>
      {/* Description */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Om Mhaismale</h2>
        <p className="text-sky-200 text-lg mb-2">
          Hi! I'm Om, a passionate developer who loves building beautiful and functional web applications. I enjoy working with modern JavaScript frameworks and always strive to learn new technologies.
        </p>
        <p className="text-slate-400">
          Let's connect and create something amazing together!
        </p>
      </div>
    </section>
  );
}