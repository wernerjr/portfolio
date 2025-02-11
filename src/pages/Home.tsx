import { motion } from 'framer-motion';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div>
      <section className="min-h-[90vh] flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Olá, eu sou <span className="text-gradient">Werner Jr</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Desenvolvedor Full Stack especializado em JavaScript, React Native, React e Node.js.
              Foco em desenvolvimento mobile/web, arquiteturas escaláveis e performance.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="btn-primary">
                Ver Projetos
              </a>
              <a href="#contact" className="btn-outline">
                Contato
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
} 