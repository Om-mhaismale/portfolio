import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const email = "ommhaismale13@gmail.com";
const linkedInProfile = "https://www.linkedin.com/in/om-mhaismale/overlay/contact-info/";
const githubProfile = "https://github.com/Om-mhaismale";
const instagramProfile = "https://www.instagram.com/abigukulele/";

const contactCards = [
  {
    href: `mailto:${email}`,
    icon: FaEnvelope,
    text: "Email Me",
    color: "from-blue-500 to-blue-600",
    hoverColor: "from-blue-600 to-blue-700",
    delay: 0.1
  },
  {
    href: linkedInProfile,
    icon: FaLinkedin,
    text: "Connect on LinkedIn",
    color: "from-[#0a66c2] to-[#004182]",
    hoverColor: "from-[#004182] to-[#003366]",
    target: "_blank",
    delay: 0.2
  },
  {
    href: githubProfile,
    icon: FaGithub,
    text: "Follow on GitHub",
    color: "from-gray-700 to-gray-800",
    hoverColor: "from-gray-800 to-gray-900",
    target: "_blank",
    delay: 0.3
  },
  {
    href: instagramProfile,
    icon: FaInstagram,
    text: "Guitar Enthusiast",
    color: "from-red-500 to-purple-600",
    hoverColor: "from-pink-600 to-purple-700",
    target: "_blank",
    delay: 0.4
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contacts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      id="contact"
      className="px-4 pt-24 pb-8 scroll-mt-28 text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden mt-96 z-40"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
        variants={itemVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-b from-amber-400  bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          Ready to collaborate? Reach out through any of these platforms!
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        {contactCards.map((card, index) => (
          <motion.a
            key={index}
            href={card.href}
            target={card.target}
            rel={card.target ? "noopener noreferrer" : undefined}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${card.color} p-5 shadow-md hover:shadow-lg transition-all duration-300`}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Content */}
            <div className="relative z-10 flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <card.icon size={20} className="text-white" />
              </motion.div>
              
              <div>
                <span className="text-white font-semibold text-lg group-hover:text-white/90 transition-colors">
                  {card.text}
                </span>
                <motion.div
                  className="h-0.5 bg-white/50 mt-1 w-0 group-hover:w-full transition-all duration-300"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 text-center"
        variants={itemVariants}
      >
        <p className="text-gray-400 text-sm">
          I'm always excited to discuss new opportunities and creative projects!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Contacts;
