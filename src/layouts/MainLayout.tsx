import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiGlobe, FiHeart } from 'react-icons/fi';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
        <nav className="container h-16 flex items-center justify-between">
          <motion.a 
            href="/"
            className="text-2xl font-heading font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Werner Jr
          </motion.a>
          <div className="flex gap-6">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      
      <main className="pt-16 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-surface mt-20">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Werner Jr</h3>
              <p className="text-gray-400">
                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais incríveis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/wernerjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface/50 hover:bg-surface/80 transition-colors"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/werner-gehrke-junior-867b8841/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface/50 hover:bg-surface/80 transition-colors"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://yetz.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface/50 hover:bg-surface/80 transition-colors"
                >
                  <FiGlobe size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Werner Jr. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Feito com</span>
                <FiHeart className="text-red-500" />
                <span>usando React & Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-primary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
} 