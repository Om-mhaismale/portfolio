import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contacts = () => {
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
      text: "Follow on Instagram",
      color: "from-red-500 to-purple-600",
      hoverColor: "from-pink-600 to-purple-700",
      target: "_blank",
      delay: 0.4
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      id="contact"
      className="p-8 scroll-mt-12 text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden mt-96 z-50"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-xl"
        variants={itemVariants}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-amber-50/20 rounded-full blur-xl"
        variants={itemVariants}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 10, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-600/30 to-red-500/20 rounded-full blur-lg"
        variants={itemVariants}
        animate={{
          rotate: [0, 360],
          scale: [1, 10, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          Ready to collaborate? Reach out through any of these platforms!
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        {contactCards.map((card, index) => (
          <motion.a
            key={index}
            href={card.href}
            target={card.target}
            rel={card.target ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: card.delay }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.color} p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
            variants={itemVariants}
          >
            {/* Animated Background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${card.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <card.icon size={24} className="text-white" />
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

            {/* Sparkle Effect */}
            <motion.div
              className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
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
