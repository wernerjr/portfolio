import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Tech {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  techs: Tech[];
  imageUrl: string;
  repoUrl: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techs,
  imageUrl,
  repoUrl,
  demoUrl
}: ProjectCardProps) {
  const getPlaceholderUrl = (projectTitle: string) => {
    // Remove espaços extras e caracteres especiais
    const formattedTitle = projectTitle.trim().replace(/\s+/g, '+');
    return `https://placehold.co/600x400/0A0A0A/666666/png?text=${formattedTitle}`;
  };

  return (
    <motion.article
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-surface/50">
        <img
          src={imageUrl}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = getPlaceholderUrl(title);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 capitalize">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech) => (
            <span
              key={tech.name}
              className="px-2 py-1 text-sm rounded-full capitalize"
              style={{ backgroundColor: tech.color + '20', color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
          >
            <FiGithub className="w-5 h-5" />
            <span>Código</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}