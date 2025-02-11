import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
  fork: boolean;
}

interface Project {
  title: string;
  description: string;
  techs: { name: string; color: string }[];
  imageUrl: string;
  repoUrl: string;
  demoUrl?: string;
}

const techColors: { [key: string]: string } = {
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  react: '#61DAFB',
  'react-native': '#61DAFB',
  nodejs: '#339933',
  python: '#3776AB',
  tailwindcss: '#06B6D4',
  nextjs: '#000000',
  vite: '#646CFF',
  electron: '#47848F',
  prisma: '#2D3748',
  postgresql: '#4169E1',
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching projects...');
        const response = await fetch('https://api.github.com/users/wernerjr/repos?per_page=100&sort=updated', {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const repos: GithubRepo[] = await response.json();
        console.log('Repositórios brutos:', repos);

        const formattedProjects = repos
          .filter(repo => {
            console.log(`\nAnalisando repositório: ${repo.name}`);
            console.log('Fork:', repo.fork);
            console.log('Descrição:', repo.description);
            console.log('Linguagem:', repo.language);
            console.log('Tópicos:', repo.topics);
            
            // Remover apenas os forks
            const shouldInclude = !repo.fork;
            console.log('Incluir no portfolio?', shouldInclude);
            return shouldInclude;
          })
          .map(repo => {
            console.log(`\nFormatando projeto: ${repo.name}`);
            
            // Garantir que topics seja um array
            const topics = Array.isArray(repo.topics) ? repo.topics : [];
            console.log('Tópicos disponíveis:', topics);
            
            // Criar array de tecnologias
            const techs = [];
            
            // Adicionar linguagem principal se existir
            if (repo.language) {
              const langTech = {
                name: repo.language.toLowerCase(),
                color: techColors[repo.language.toLowerCase()] || '#666'
              };
              console.log('Adicionando linguagem principal:', langTech);
              techs.push(langTech);
            }
            
            // Adicionar tópicos que têm cores definidas
            const topicTechs = topics
              .filter(topic => {
                const hasColor = !!techColors[topic];
                console.log(`Tópico ${topic} tem cor definida?`, hasColor);
                return hasColor;
              })
              .map(topic => ({
                name: topic,
                color: techColors[topic]
              }));
            
            console.log('Tecnologias dos tópicos:', topicTechs);
            techs.push(...topicTechs);
            
            console.log('Total de tecnologias:', techs.length);

            return {
              title: repo.name.replace(/-/g, ' '),
              description: repo.description || 'Projeto em desenvolvimento', // Descrição padrão se não houver
              techs,
              imageUrl: `/projects/${repo.name}.png`,
              repoUrl: repo.html_url,
              demoUrl: repo.homepage || undefined
            };
          });

        console.log('Projetos formatados final:', formattedProjects);
        setProjects(formattedProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold">Projetos</h2>
        <div className="mt-8 flex justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold">Projetos</h2>
        <div className="mt-8 text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projetos
      </motion.h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
} 