import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacts = () => {
  const email = "ommhaismale13@gmail.com";
  const linkedInProfile = "https://www.linkedin.com/in/om-mhaismale/";
  const githubProfile = "https://github.com/Om-mhaismale";

  return (
    <section id="contact" className="p-8 scroll-mt-12 gap-70 text-white min-h-screen flex flex-col items-center justify-center space-y-6">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <div className="flex flex-col items-center space-y-4">
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >
          <FaEnvelope size={20} />
          <span>Email Me</span>
        </a>

        {/* LinkedIn */}
        <a
          href={linkedInProfile + "overlay/contact-info/"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#0a66c2] hover:bg-[#004182] transition"
        >
          <FaLinkedin size={20} />
          <span>Message on LinkedIn</span>
        </a>

        {/* GitHub Follow */}
        <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-gray-800 hover:bg-gray-900 transition"
        >
          <FaGithub size={20} />
          <span>Follow on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contacts;
