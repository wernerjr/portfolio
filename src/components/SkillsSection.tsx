import { motion } from 'framer-motion';
import { 
  SiJavascript,
  SiTypescript, 
  SiReact, 
  SiNodedotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiVite,
  SiNextdotjs,
  SiElectron,
  SiPython
} from 'react-icons/si';

const skills = [
  // Core Languages
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  
  // Frontend & Mobile
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  
  // Backend & Database
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  
  // Desktop
  { name: 'Electron', icon: SiElectron, color: '#47848F' }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-surface/50">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-surface hover:bg-surface/80 transition-colors"
            >
              <skill.icon size={40} color={skill.color} />
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 