import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/wernerjr',
    icon: FiGithub,
    color: '#fff'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/werner-gehrke-junior-867b8841/',
    icon: FiLinkedin,
    color: '#0A66C2'
  },
  {
    name: 'Yetz',
    url: 'https://yetz.dev',
    icon: FiGlobe,
    color: '#45af50'
  },
  {
    name: 'Email',
    url: 'mailto:contato@wernerjr.dev',
    icon: FiMail,
    color: '#EA4335'
  }
];

export default function ContactSection() {
  const whatsappNumber = '5547988099418';
  const whatsappMessage = encodeURIComponent('Olá! Vi seu portfólio e gostaria de conversar.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-surface/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Estou sempre aberto a novas oportunidades e parcerias.
            Se você tem um projeto interessante ou quer bater um papo, entre em contato!
          </p>

          <div className="flex justify-center gap-8 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-4 rounded-full bg-surface group-hover:bg-surface/80 transition-colors">
                  <link.icon size={24} color={link.color} />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-colors text-lg font-medium"
            >
              <FaWhatsapp size={24} />
              Conversar no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 